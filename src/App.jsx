import { Link, Route, Routes } from 'react-router-dom'
// import './app.scss'
import './scss/global.scss'
import Home from './views/Home/Home'
import Contact from './views/Contact/Contact'
import Styleguide from './styleguide/Styleguide'

function App() {

  return (
    <>
      <header>
        <h1>Proyecto Gamma</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/styleguide">Styleguide</Link>
      </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/styleguide" element={<Styleguide />} />
        </Routes>
      </main>
    </>
  )
}

export default App