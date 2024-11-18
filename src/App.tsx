import Hero from "./components/Hero";
import Posts from "./components/Posts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import AnimationLogo from "./components/AnimationLogo";

function App() {
  return (
    <>
      <AnimationLogo />
      <main className="flex min-h-screen flex-col items-center justify-between px-10 py-10 lg:px-24 h-full w-full">
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
