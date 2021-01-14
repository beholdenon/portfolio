import React from 'react';
import './styles/index.scss';
import WelcomeSection from './components/WelcomeSection';
import WorkSection from './components/WorkSection';
import SkillsSection from './components/SkillsSection';
import PlaygroundSection from './components/PlaygroundSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import WorkOverlay from './components/WorkOverlay';
import Footer from './components/Footer';
import VFont from "./VariableType";
import fadeScroll from "./fadeScroll";
import workData from "./data/work.json";
import skillsData from "./data/skills.json";
import experienceData from "./data/experience.json";
import playgroundData from "./data/playground.json";
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    AOS.init();
    new VFont();
    new fadeScroll();
  }
  
  render() {
    return(
      <div className="App">
        <div className="bg"></div>
        <WelcomeSection description="Creative Technologist with over 18 years of experience designing and developing campaigns for top brands. Currently Senior Art Director/lead Front-End Creative Developer at Bloomingdale’s and Adjunct Lecturer at CUNY." />
        <WorkSection action={this.launchModal} workItems={workData} />
        <ExperienceSection logos={experienceData} />
        <SkillsSection skills={skillsData} />
        <PlaygroundSection playgroundItems={playgroundData} />
        <ContactSection />
        <Footer />
      </div>
    )
  }
}

export default App;
