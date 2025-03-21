import React, { useRef } from 'react'
import "./TestImonials.css"
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"

export default function TestImonials() {

    const slider = useRef()
    let tx = 0;

    const next = () => {
        if (tx>-50) {
            tx-=25
        }

        slider.current.style.transform=`translateX(${tx}%)`

    }
    const back = () => {
            if (tx<0) {
            tx+=25
        }

        slider.current.style.transform=`translateX(${tx}%)`
    }

  return (
    <div className="test">
      <img src={next_icon} alt="" className="next_btn" onClick={next} />
      <img src={back_icon} alt="" className="back_btn" onClick={back} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3> Sarah</h3>
                  <span>Sidi Bernoussi</span>
                </div>
              </div>
              <p>
                Grâce à cette plateforme, j’ai trouvé mon premier stage en
                quelques jours seulement ! L’interface est simple et les offres
                sont bien ciblées.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Mehdi,</h3>
                  <span>El Azhar</span>
                </div>
              </div>
              <p>
                J’étais perdu dans ma recherche d’emploi, mais cette plateforme
                m’a vraiment aidé. J’ai pu postuler facilement et même
                bénéficier de conseils pour améliorer mon CV.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Yasmine</h3>
                  <span>Annasi</span>
                </div>
              </div>
              <p>
                En tant que jeune entrepreneure, j’ai trouvé des ressources
                précieuses pour lancer mon projet. La plateforme m’a aussi
                permis de me connecter avec d’autres entrepreneurs.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Adam</h3>
                  <span>Sidi Bernoussi</span>
                </div>
              </div>
              <p>
                C’est motivant de voir autant d’opportunités réunies en un seul
                endroit. J’ai enfin décroché un stage qui correspond à mes
                études et mes ambitions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
