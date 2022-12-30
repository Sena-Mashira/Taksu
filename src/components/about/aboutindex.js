import Education from "./education";
import Experience from "./experience";
import Skill from "./skill";
import Project from "./project"
import Language from "./language";

function About() {
    return (
        <div className="about-container">
            <Education />
            <Experience />
            <Skill />
            <Project />
            <Language />
        </div>
    )
}
export default About;