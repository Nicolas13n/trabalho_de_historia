import styled  from "styled-components";

const ListaStyle = styled.main`
    color:#fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #148a1a;
    h1{
        margin-bottom:20px;
    }
    div{
    margin-bottom:20px;
    }
    div h1{
        font-size:2rem;
    }
    div li{
        font-size:1.3rem;
        list-style:none;
    }
`

export default  ListaStyle;