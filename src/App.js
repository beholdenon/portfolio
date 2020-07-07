import React from 'react';
import './styles/index.scss';
import WelcomeSection from './components/WelcomeSection';
import WorkSection from './components/WorkSection';
import SkillsSection from './components/SkillsSection';
import PlaygroundSection from './components/PlaygroundSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import WorkOverlay from './components/WorkOverlay';
import initVfont from "./VariableType";
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
    this.state = {modalId: 0};
    this.launchModal = this.launchModal.bind(this);
  }

  componentDidMount(){
    AOS.init();
    var txt = new initVfont();
    var fscroll = new fadeScroll();
  }

  launchModal(id) {
    this.setState({
        modalId: id
    });
    document.getElementById("overlay").classList.add("active");
    document.body.classList.add("overlay-active");
  }

  render() {
    return(
      <div className="App">

      <div className="bg"></div>
        <WelcomeSection description="Creative Technologist with over 18 years of experience designing and developing campaigns for top brands. Currently Senior Art Director/lead Front-End Creative Developer at Bloomingdale’s and Adjunct Lecturer at CUNY." />
        <WorkSection action={this.launchModal}  workItems={workData} />
        <ExperienceSection logos={experienceData} />
        <SkillsSection skills={skillsData} />
        <PlaygroundSection playgroundItems={playgroundData} />
        <ContactSection />
        <WorkOverlay id={this.state.modalId} workData={workData} />
      </div>
    )
  }
}

export default App;
