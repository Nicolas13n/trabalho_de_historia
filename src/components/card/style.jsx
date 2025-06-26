import styled from "styled-components";




const DivCards = styled.main`
    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-bottom:20px;
    .card{
        width: 25%;
        height: 70vh;
        background-color:rgb(67, 180, 52);
        padding: 20px;
        border-radius: 10px;
        img{
            width: 100%;
            height: auto;
            border-radius: 10px;
            margin-bottom: 15px;
        }
        .textCard{
            
            h3{
                font-size: 1.5rem;
                margin-bottom: 10px;
                color: #fff;
                text-align: center;
            }
            ul li{
            list-style:none;
            margin-bottom:10px;
            text-align: center;
                font-size: 1rem;
                color: #f0f0f0;
                
            }
        }
    }
        @media (max-width: 768px) {
        .card {
            width: 25%;
            height: auto;
        }
        img {
            width: 100%;
            height: 100%;
            
    }

}
`;

export default DivCards;
