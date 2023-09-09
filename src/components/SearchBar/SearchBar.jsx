import { StyledForm, StyledButton, StyledInput, StyledSvg } from "./SearchBar.styled";


export const SearchBar = ({onQueryChange}) => {
    return(
        <StyledForm onSubmit={
            evt => {
                evt.preventDefault();
                onQueryChange(evt.target.elements.query.value)
                evt.target.reset();
            }
        }>
            <StyledButton type ="submit">
                <StyledSvg/>
            </StyledButton>
            <StyledInput type="text" name = "query"/>
            
          </StyledForm>
    )
}