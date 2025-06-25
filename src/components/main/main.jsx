import React from "react";
import MainStyle from "./style.js";
export default function Main() {
    return (
        <MainStyle className="main">
            <div className="text">
                <h1>Organização tradicional</h1>
                <ul>
                    <li>Vivem em aldeias (tekoha) organizadas coletivamente.</li>
                    <li>A vida espiritual e religiosa é central: seus líderes espirituais, os pajés ou nhemongarai, têm papel fundamental.</li>
                    <li>Sua visão de mundo envolve forte conexão com a natureza, a coletividade e a espiritualidade.</li>
                    <li>Rituais Cerimoniais: Celebrações espirituais importantes, como agradecimentos à natureza e rituais de iniciação.</li>
                </ul>
            </div>
            <div className="imageOrganização">
                <img src="https://cimi.org.br/wp-content/uploads/2023/05/Maiara-Dourado-1-scaled.jpg" alt="" />
            </div>
        </MainStyle>
    )
}