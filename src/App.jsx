import React, { useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import TestImonials from './Components/TestImonials/TestImonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Video from './Components/Video/Video'
import Conditions from './Components/Conditions/Conditions'

const App = () => {
  const [playState, setPlayState] = useState(false)
  const [dis, setDis] = useState(false)

  const clicked=(e)=>setDis(e)
  
  return (
    <div>
      {dis === false ? (
        <>
          <NavBar />
          <Hero clicked={clicked} />
          <div className="container">
            <Title
              subTitle="Notre programme"
              title="Ce que nous offrons
"
            />
            <Programs />
            <About setPlayState={setPlayState} />
            <Title
              subTitle="galerie "
              title="Photos du campus
"
            />
            <Campus />
            <Title
              subTitle="Témoignages"
              title="Ce que dit l’étudiant
"
            />
            <TestImonials />
            <Title subTitle="Contactez-nous" title="Entrer en contact" />
            <Contact />
            <Footer />
          </div>
          <Video setPlayState={setPlayState} playState={playState} />
        </>
      ) : (
        <Conditions className="container" clicked={clicked} />
      )}
    </div>
  );
}



export default App
