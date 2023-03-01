//Styles:
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components:
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { AboutMe } from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
