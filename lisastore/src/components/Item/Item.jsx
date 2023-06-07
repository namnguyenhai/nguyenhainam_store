import { styled } from "styled-components";
import { TextFormat } from "components/Text";
import { Button } from "components/Button";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { Card } from "components/Card";
const StyledShowItem = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-top: 80px; */
    gap: 30px;
    .flex_row_menu{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    .menu{
        width: 40%;
        ul{
            display: flex;
            gap: 10%;
            list-style: none;
            p:hover{
                color:#000000;
            }
        }
    }
    .showitem{
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        row-gap: 10px;

    }
`
export const Item = ({children,tittles,buttonname}) => {
    return <StyledShowItem>
        <div>
            <TextFormat color={"#000000"} fontfam={"Roboto"} size={"50px"} weight={500}>{tittles}</TextFormat>
        </div>
        <div className="flex_row_menu">
            <div className="menu">
                <ul>
                    <li><TextFormat size={"16px"} weight={600} color={"rgba(0, 0, 0, 0.5)"}>All Products</TextFormat></li>
                    <li><TextFormat size={"16px"} weight={600} color={"rgba(0, 0, 0, 0.5)"}>T-Shirt</TextFormat></li>
                    <li><TextFormat size={"16px"} weight={600} color={"rgba(0, 0, 0, 0.5)"}>Hoodies</TextFormat></li>
                    <li><TextFormat size={"16px"} weight={600} color={"rgba(0, 0, 0, 0.5)"}>Jacket</TextFormat></li>
                </ul>
            </div>
            <div>
                <Button bgcolors={"#1E2832"} border={"1px solid #1E2832"} height={"32px"} width={"92px"} iconname={faFilter} stylefontawe={{color:"white",size:"xl"}}>
                    <TextFormat color={"#FFFFFF"} fontfam={"Open Sans"} size={"16px"} weight={400}>{buttonname}</TextFormat>
                </Button>
            </div>
        </div>
        <div className="showitem">
            {children}

        </div>
    </StyledShowItem>
}