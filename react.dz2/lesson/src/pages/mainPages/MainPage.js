import { Header } from "../../components/header/Header"
import { Services } from "../../components/services/Services"


function MainPage () {
    return(
        <div>
            <h2>MainPage</h2>
            <Header/>
            <Services services="services from main page"/>
        </div>
    )
}

export default MainPage;