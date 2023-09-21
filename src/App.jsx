// import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="bg-scaffold">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
