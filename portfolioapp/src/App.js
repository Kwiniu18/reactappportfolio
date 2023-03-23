import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavigationBar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import "./Style/index.scss";
import Accept from "./Components/Accept/Accept";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <NavigationBar />
      <About />
      <Projects />
      <Accept />
      <Footer />
    </>
  );
}

export default App;
