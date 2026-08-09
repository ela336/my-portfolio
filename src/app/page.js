import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Introduction />
        <Aboutme />
        <Skills />
        <Projects></Projects>
        <Contact></Contact>
      </main>
    </>
  );
}