import { styled } from "styled-components";
import { ReactComponent as SearchIcon } from '../../images/search .svg';

const StyledForm = styled.form`
display: flex;
justify-content: center;
align-items: center;
background-color:  #406CFF;
border: 1px solid #949494;
padding: 16px;
`

const StyledInput = styled.input`
border: none;
background-color: #fff;
height: 40px;
width: 400px;
padding: 0;
margin: 0;
padding-left: 4px;
outline: 0;
font-size: 18px;

:focus-visible {
    outline: 0;
}
`

const StyledButton = styled.button`
border: none;
background-color: #fff;
height: 40px;
width: 40px;
padding: 0;
margin: 0;
cursor: pointer;
:hover{
    fill: #406CFF;
}

`

const StyledSvg = styled(SearchIcon)`
padding: 0;
margin: 0;
width: 20px;
height: 20px;

`

export {StyledForm, StyledInput, StyledButton, StyledSvg}