import * as layouts from "../layouts"
import { default as Toolbar } from "../layouts/Toolbar"
import { default as About } from "../layouts/about"
import Projects from "./Gallery"
import { Outlet } from "react-router-dom";
import AboutUs from "./aboutUs"


const Home = () => {
    const isMobile = window.innerWidth <= 500;
    if (isMobile) {
        return (
            <>
                <layouts.Splash height="auto" mt="0">
                    <Toolbar isMobile={true} />
                    <layouts.Bod width="95vw"> <About color="green" /></layouts.Bod>
                    <AboutUs ismobile={isMobile} />\
                    <layouts.footer />
                </layouts.Splash>
            </>
        )
    }
    return (<>

        <layouts.Splash className="splash" flexDirection="column" pb="0" height="60vh" >
            <Toolbar ></Toolbar>
            <layouts.Bod m="auto" mt="3vh"  >
                <layouts.flex>
                    {/* <layouts.Sidebar width="30%" /> */}
                    <Outlet />
                </layouts.flex>
            </layouts.Bod>

        </layouts.Splash>
        <layouts.footer />
    </>
    )

}

export default Home;