import styled from "styled-components";

const DivSection = styled.section`
    padding: 50px;
    gap: 30px;
    display: flex;
    margin-bottom: 50px;
    flex-wrap: wrap;
    .imageOrigemAnces{
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
        h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
        }
        p {
            font-size: 1.2rem;
            line-height: 1.6;
            color: #333;
        }
    }
        @media (max-width: 768px) {
        .imageOrigemAnces {
            width: 100%;
        }
        .text {
            width: 100%;
            font-size: 1rem;
        }
`;

export default DivSection;
