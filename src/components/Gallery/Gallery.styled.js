import { styled } from "styled-components";

const StyledList = styled.ul`
list-style: none;
display: flex;
flex-wrap: wrap;
gap: 8px;
justify-content: center;
`

const LoadMoreButton = styled.button`
display: block;
background-color: #406CFF;
cursor: pointer;
width: 200px;
height: 40px;
border: 0;
border-radius: 4px;
color: white;
font-size: 18px;
margin-bottom: 8px;
margin-left: auto;
margin-right: auto;

:hover{
    background-color: #0545FF;
}
`
export {StyledList, LoadMoreButton}