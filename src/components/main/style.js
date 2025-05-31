import styled from "styled-components";

const DivMain = styled.main`
    padding: 20px;
    background-color: #148a1a;
    display: flex;
    align-items: center;
    height: 100vh;
    gap: 50px;
    margin-bottom: 50px;
    flex-wrap: wrap;
   
    .imageOrganização{
        width: 40%;
        display: flex;
        
        img {
            width: 100%;
            height: auto;
            border-radius: 10px;
        }
    }
    .text {
        width: 50%;
        color: #fff;
        h1 {
            font-size: 2.5rem;
            margin-bottom: 20px;
        }
        p {
            font-size: 1.2rem;
            line-height: 1.6;
            color: #f0f0f0;
        }
    }
    @media (max-width: 768px) {
         .main{
         flex-direction: column-reverse;
         }
        .imageOrganização {
            width: 100%;
            display: flex;
            justify-content: center;
            img {
                width: 80%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 10px;
            }
        }
        .text{
        width: 100%;
        h1{
            font-size: 2rem;
        }
        p{
            width: 100%;
            font-size: 1rem;
        }
        }
    }
`;

export default DivMain;