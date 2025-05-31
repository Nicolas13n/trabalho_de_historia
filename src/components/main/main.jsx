import React from "react";
import MainStyle from "./style.js";
export default function Main() {
    return (
        <MainStyle className="main">
            <div className="text">
                <h1>Organização tradicional</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis nihil temporibus quo non, incidunt consequatur, architecto alias illum doloremque dolor saepe modi distinctio repellendus unde quisquam natus dolores deserunt? Quos? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odio adipisci obcaecati, atque qui blanditiis cupiditate iusto hic odit perferendis. Laboriosam ipsum aliquam repellat neque quas hic possimus, blanditiis vitae!</p>
            </div>
            <div className="imageOrganização">
                <img src="https://cimi.org.br/wp-content/uploads/2023/05/Maiara-Dourado-1-scaled.jpg" alt="" />
            </div>
        </MainStyle>
    )
}