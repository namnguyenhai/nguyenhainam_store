import { styled } from "styled-components";
import { Header } from ".";
import { Footer } from "./Footer";
const StyledPrimaryLayout = styled.div`
    width: 100%;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`
export const PrimaryLayout = ({children}) => {
    return <StyledPrimaryLayout>
        <Header></Header>
        {children}
        <Footer></Footer>
    </StyledPrimaryLayout>
}