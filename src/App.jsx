// import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-scaffold">
      <NavBar />
      <Home />
      <About />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
