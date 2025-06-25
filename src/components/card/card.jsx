import React from "react";
import CardsStyle from "./style.jsx";

export default function Cards() {
    return (
        <>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>História dos povos indígenas</h1>

        <CardsStyle>
            
            <div className="card">
                <div className="imageCard">
                    <img src="https://img.socioambiental.org/d/331093-1/chegada+de+cabral.jpg" alt="" />
                </div>
                <div className="textCard">
                    <h3>Contato com os europeus</h3>
                    <ul>
                        <li>Os Guarani foram um dos primeiros povos indígenas a ter contato com os colonizadores portugueses e espanhóis.</li>
                        <li>Foram também fortemente afetados pela ação dos jesuítas, que, entre os séculos XVII e XVIII, fundaram as famosas missões jesuíticas (também chamadas “reduções”) no sul do Brasil, Paraguai e Argentina.</li>
                        <li>Nessas missões, os Guarani eram catequizados, aprendiam ofícios europeus, mas também mantinham parte de sua cultura.</li>
                        <li>Apesar disso, muitos foram escravizados ou mortos por bandeirantes e invasores europeus.</li>
                    </ul>
                </div>
            </div>
            <div className="card">
                <div className="imageCard">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS6AMhDYLjiAfDOXp_do0s2A7fh5f5yAQYOw&s" alt="" />
                </div>
                <div className="textCard">
                    <h3>Resistência e perdas territoriais</h3>
                    <ul>
                        <li>Ao longo dos séculos, os Guarani resistiram à colonização, mas perderam grande parte de seus territórios tradicionais.</li>
                        <li>No século XX e XXI, continuam sofrendo com a expansão do agronegócio, construção de barragens, urbanização e violência contra suas comunidades — especialmente os **Guarani Kaiow</li>
                    </ul>
                </div>
            </div>
            
        </CardsStyle>
        </>
    )
}
