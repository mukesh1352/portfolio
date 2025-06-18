import Header from "../app/components/header"
import Aboutme from "./components/Aboutme"
import Projects from "./components/projects"
export default function Home(){
    return(
        <><div>
            <Header />
            <Aboutme/>
            <Header/>
            <Projects/>
        </div>
        </>
    )
}