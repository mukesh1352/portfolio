import Header from "../app/components/header"
import Aboutme from "./components/Aboutme"
import Experience from "./components/Experience"
import Projects from "./components/projects"
import { Contact } from "./components/Contact"
import { SkillsAndTools } from "./components/skills"
export default function Home(){
    return(
        <><div>
            <Header />
            <Aboutme/>
            <Header/>
            <SkillsAndTools/>
            <Header/>
            <Projects/>
            <Header/>
            <Experience/>
            <Contact/>
        </div>
        </>
    )
}