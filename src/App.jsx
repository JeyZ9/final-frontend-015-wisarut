import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Popular from './components/Popular'
import Review from './components/Review'

function App() {

  return (
    <div>
        <Navbar />
        <main>
          <Home />
          <About />
          <Popular/>
          <Review />
        </main>
    </div>
  )
}

export default App
