import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Loading from "./components/Loading";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Study from "./components/Study";

const App = () => {
  return (
    <Loading>
      <Navbar />
      <Home />
      <About />
      <Study />
      <Skills />
      <Work />
      <Contact />
    </Loading>
  );
};

export default App;
