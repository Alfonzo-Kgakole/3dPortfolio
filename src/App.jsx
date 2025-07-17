import Navbar from "./section/Navbar.jsx";
import Hero from "./section/Hero.jsx";
import About from "./section/About.jsx";

const App = () => {
    return (
        <div className="container mx-auto max-w-7xl">
            <Navbar />
            <Hero />
            <About />
            <section className={"min-h-screen"} />
            <section className={"min-h-screen"} />
            <section className={"min-h-screen"} />
            <section className={"min-h-screen"} />
            <section className={"min-h-screen"} />
        </div>
    )
}

export default App