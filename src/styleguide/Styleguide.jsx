import Nav from '../styleguide/Nav'
import './styleguide.scss'
import '../scss/global.scss'
import Buttons from '../components/Buttons/Buttons'

export default function Styleguide() {
    return <>
        <div className="section">
            <h1>Soy un h1</h1>
            <h2>Soy un h2</h2>
            <h3>Soy un h3</h3>
            <h4>Soy un h4</h4>
            <h5>Soy un h5</h5>
            <h6>Soy un h6</h6>
        </div>
        <div className="section">
            <Buttons />
        </div>
        <Nav />
        </>
}