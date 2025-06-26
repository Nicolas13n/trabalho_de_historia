import React from "react";
import Divheader from "./style.js";

export default function Header(){
    
    return (
        <>
          <Divheader>
                <h1>Tupi-Guarani</h1>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </nav>
                <section></section>
          </Divheader>  
        </>
    );
}