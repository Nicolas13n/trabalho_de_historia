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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                </div>
            </div>
            <div className="card">
                <div className="imageCard">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS6AMhDYLjiAfDOXp_do0s2A7fh5f5yAQYOw&s" alt="" />
                </div>
                <div className="textCard">
                    <h3>Resistência e perdas territoriais</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                </div>
            </div>
            
        </CardsStyle>
        </>
    )
}
