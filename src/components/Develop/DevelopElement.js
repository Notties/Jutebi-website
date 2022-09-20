import styled from "styled-components";

export const DevelopContainer = styled.div`
    height: 1060px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px){
        height: 1200px;
    }

    @media screen and (max-width: 480px){
        height: 800px;
    }
`

export const DevelopWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const DevelopCard = styled.div`
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 500px){
        width: 360px;
    }

    @media screen and (max-width: 420px){
        width: 300px;
    }

`
export const Images = styled.img`
    border-radius: 5px;

    @media screen and (max-width: 500px){
        width: 330px;
    }

    @media screen and (max-width: 420px){
        width: 270px;
    }
`;

export const DevelopIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
    border-radius: 50%;
`

export const DevelopH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const DevelopH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const DevelopP = styled.p`
    font-size: 1rem;
    text-align: center;
`