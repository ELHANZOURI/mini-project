import React, { useState } from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"



export default function Hero({clicked}) {


  
  const onclick = () => {
      clicked(true)
  }
  

  
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Partenaires Formation / Insertion</h1>
        <p>
          Nous établissons des partenariats avec des entreprises et des centres
          de formation afin d’offrir aux apprenants des opportunités de
          développement de compétences et d’insertion professionnelle. Ces
          collaborations permettent d’accéder à des stages, des formations
          adaptées aux besoins du marché et des opportunités d’emploi,
          favorisant ainsi une transition réussie vers le monde du travail
        </p>
        
          <button className="btn" onClick={onclick} >
            En savoir plus
            <img src={dark_arrow} alt="" />
          </button>
       
      </div>
    </div>
  );
}
