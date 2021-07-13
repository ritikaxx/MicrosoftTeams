import "./landingpage.css"
import SideBar from "../../components/SideBar/SideBar"
import TopBar from "../../components/TopBar/TopBar"
import Header from "../../components/Header/Header"


export default function Landing() {
    return (
        <div className="Landing">
               <>
               <TopBar />
               <SideBar />
               <Header />
               </>
        </div>
    );
}
