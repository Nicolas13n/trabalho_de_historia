import React from "react";
import SectionStyle from "./style.js";
export default function Section() {
    return (
        <>
            <SectionStyle> 
                    <div className="imageOrigemAnces"><img src="https://1.bp.blogspot.com/-oBJGhXBAgDM/W36hewOjjFI/AAAAAAAAEgs/JuJp-7-bq8oz3ToL5mnQ30Ndc38QFxBGwCLcBGAs/s1600/images%2B1.jpg" alt="" /></div>
                    <div className="text">
                        <h2>Origem e ancestralidade</h2>
                        <p>Os Guarani fazem parte da grande família linguística Tupi-Guarani e habitam a América do Sul há milhares de anos. Segundo suas tradições orais e mitos de criação, eles vieram de uma “terra sem males”, um paraíso espiritual que guiava suas migrações.</p>
                        <ul>
                            <li>São nativos da região que hoje compreende partes do Brasil, Paraguai, Argentina, Uruguai e Bolívia.</li>
                            <li>Acredita-se que tenham migrado da região amazônica para o sul do continente há cerca de 2.000 anos.</li>
                        </ul>
                    </div>
            </SectionStyle>
        </>
    );
}

