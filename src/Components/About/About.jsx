import React from 'react'
import "./About.css"
import about_img from "../../assets/about0.png"
import play_icon from "../../assets/play-icon.png"
const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => setPlayState(true)}
        />
      </div>
      <div className="about-right">
        <h3>À PROPOS DE LA PLATEFORME</h3>
        <h2>NOURRIR les leaders de demain dès aujourd’hui</h2>
        <p>
          Notre plateforme aide les jeunes à trouver un emploi ou un stage en
          mettant en relation les chercheurs d’opportunités avec les
          entreprises. Grâce à un système simple et efficace, nous facilitons
          l’accès aux offres et accompagnons chaque candidat dans sa recherche.
        </p>
        <p>
          En plus de l’emploi, nous soutenons les jeunes entrepreneurs en leur
          offrant des ressources et des conseils pour développer leurs projets.
          Nous créons un espace d’échange où ils peuvent trouver des partenaires
          et des opportunités pour grandir.
        </p>
        <p>
          Notre mission est de donner à chaque jeune les moyens de réussir, que
          ce soit en intégrant le marché du travail ou en lançant leur propre
          entreprise. Rejoignez-nous pour construire ensemble un avenir
          professionnel prometteur !
        </p>
      </div>
    </div>
  );
};

export default About
