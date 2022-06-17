import styled from "styled-components";

export const AutorBiografyContainer = styled.section`
    padding: 5px 0;
    background-color: blue;
    color: white;
    display: grid;
    grid-template-columns: 40% 60%;
    grid-gap: 40px;
    margin: 0 auto;
    text-align: left;

    div:first-child {
        float: right;
    }

    div:last-child {
        margin-right: 50px;
    }
`