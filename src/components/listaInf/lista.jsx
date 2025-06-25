import ListaStyle from "./style";

export default function Lista(){
    return (
        <>
            <ListaStyle>
                <h1>Culinária da Tribo Guarani</h1>
                <ul>
                    <div>
                        <h2>Mandioca (aipim)</h2>
                        <li>Base da alimentação Guarani.</li>
                        <li>Usada para fazer beiju, farinha, mingaus, e bebidas fermentadas como o cauim.</li>
                    </div>
                    <div>
                        <h2>Milho</h2>
                        <li>Considerado um alimento sagrado.</li>
                        <li>Preparado como angu, bolo de milho, sopas, ou cozido puro.</li>
                        <li>Usado também em festas e rituais.</li>
                    </div>
                    <div>
                        <h2>Batata-doce, abóbora e amendoim</h2>
                        <li>Cultivados nas roças (ka’aguy) e consumidos assados, cozidos ou em forma de purês.</li>
                    </div>
                    <div>
                        <h2>Frutas nativas</h2>
                        <li>Guavira, jabuticaba, pitanga, banana, mamão, açaí, entre outras.</li>
                    </div>
                    <div>
                        <h2>Mel silvestre</h2>
                        <li>Coletado diretamente de abelhas nativas.</li>
                        <li>Usado como adoçante e alimento energético.</li>
                    </div>
                    <div>
                        <h2>Pescados e carnes de caça</h2>
                        <li>Peixes de rios e lagos (como traíra e tilápia), além de caça como tatu, paca, cutia, veado.</li>
                        <li>Preparados geralmente assados na brasa ou defumados.</li>
                    </div>
                    <div>
                        <h2>Ervas e temperos naturais</h2>
                        <li>Usam ervas nativas para dar sabor e para fins medicinais.</li>
                    </div>
                    <div>
                        <h2>Técnicas de preparo</h2>
                        <li>Assado direto no fogo ou brasa</li>
                        <li>ozimento em folhas (como folha de bananeira)</li>
                        <li>Fermentação natural (para bebidas e massas)</li>
                        <li>Defumação de carnes e peixes</li>
                        <li>Toras e pedras quentes para cozinhar alimentos sem panela</li>
                    </div>
                </ul>
            </ListaStyle>
        </>
    )
}