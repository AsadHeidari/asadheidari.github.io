import Hero from "./Components/Hero/Hero";
import Posts from "./Components/Posts/Posts";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Projects from "./Components/Projects/Projects";
import AnimationLogo from "./Components/AnimationLogo/AnimationLogo";

/**
 * Main application component.
 * Renders the entire website structure including header, hero section, projects,
 * posts, and footer.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the entire application.
 */
function App(): JSX.Element {
  return (
    <>
      <AnimationLogo />
      <main className="container lg mx-auto flex min-h-screen flex-col items-center justify-between px-10 py-10 lg:px-24 h-full w-full">
        <Header />
        <Hero />
        <Projects />
        <Posts />
        <Footer />
      </main>
    </>
  );
}

export default App;
