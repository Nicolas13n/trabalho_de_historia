import styled from "styled-components";
const Divheader = styled.header`
    background-color: #148a1a;
    height: 60px;
    width: 100%;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    margin-bottom: 20px;
    align-items: center;
    
    nav ul {
        list-style: none;
        display: flex;
        gap: 20px;
    }

    nav ul li a{
        color: white;
        text-decoration: none;
        font-weight: bold;

    }
`;

export default Divheader;