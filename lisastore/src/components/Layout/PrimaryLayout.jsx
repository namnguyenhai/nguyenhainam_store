import { styled } from "styled-components";
import { Header } from ".";
import { Test1 } from ".";
const StyledPrimaryLayout = styled.div`
    width: 100%;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const PrimaryLayout = ({children}) => {
    return <StyledPrimaryLayout>
        <Header></Header>
        {children}
    </StyledPrimaryLayout>
}