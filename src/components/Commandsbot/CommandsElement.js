import styled from "styled-components";

export const CommandsContainer = styled.div`
    height: 1060px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

    @media screen and (max-width: 768px){
        height: 1200px;
    }

    @media screen and (max-width: 480px){
        height: 1200px;
    }
`

export const CommandsWrapper = styled.div`
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

export const CommandsCard = styled.div`
    background: #010606;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: right;
    border-radius: 10px;
    max-height: 400px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
    }

`

export const CommandsH1 = styled.h1`
    font-size: 2.5rem;
    color: #010606;
    margin-bottom: 64px;
    text-align: center;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const CommandsH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 3px;
    color: #fff;
`

export const CommandsP = styled.p`
    font-size: 1rem;
    text-align: left;
    color: #fbb3bd;
    margin-bottom: 10px;
`