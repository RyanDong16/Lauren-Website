import './App.css';

import NavBarSection from './components/NavBarSection.jsx';
import FooterSection from './components/FooterSection.jsx';

import Home from './pages/Home.jsx';
import AboutSection from './components/AboutSection.jsx';
import ResourcesSection from './components/ResourcesSection.jsx';

const App = () => {
  return (
    <div>
      <NavBarSection />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="resources">
          <ResourcesSection />
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default App;