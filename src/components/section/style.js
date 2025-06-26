import styled from "styled-components";

const DivSection = styled.section`
    padding: 50px;
    gap: 40px;
    display: flex;
    margin-bottom: 50px;
    flex-wrap: wrap;
    .imageOrigemAnces{
        width: 58%;
        display: flex;
        height: 555px;
        img {
            width: 100%;
            height: auto;
            border-radius: 10px;
        }
    }
    .text {
    width: 30%;
        h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
        }
        ul li,p{
            list-style:none;
            font-size: 1.2rem;
            line-height: 1.6;
            color: #333;
        }
    }
        @media (max-width: 768px) {
        .imageOrigemAnces {
            height: auto;
            width: 100%;
        }
        .text {
            width: 100%;
            font-size: 1rem;
        }
`;

export default DivSection;
