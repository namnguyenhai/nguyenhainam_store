import { styled } from "styled-components";
import LeftLimb from "images/Header/lefttree.svg";
import RightLimb from "images/Header/right_tree.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { TextFormat } from "components/Text";
import { Button } from "components/Button";
import WomenContent from "images/Header/woman_content.svg";

const StyledHear = styled.div`
    background-color: #F0F0F0;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction:  column;
    align-items: center;

    .menu_header{
        height: 10%;
        width: 80%;
        border-bottom: 1px solid #E3E3E3;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .menu_left{
            width: 10%;

        }
        .menu_center{
            width: 30%;
            font-family: 'AmstelvarAlpha'
        }
        .menu_right{
            width: 20%;
            display: flex;
            /* gap: 15%; */
            justify-content: space-between;
            align-items: center;
            div{
                display: flex;
                align-items: center;
                /* justify-content: space-between; */
                width: 35%;
                gap: 10%;
            }
            p{
                padding:0;
                margin: 0;
            }
        }
    }
    .content_header{
        height: 90%;
        display: flex;
        width: 100%;
        .content_left{
            width: 10%;
            height: 100%;
            position: relative;
            img{
                position: absolute;
                bottom: 10%;
            }
        }
        .content_center{
            width: 80%;
            height: 100%;
            display: flex;
            align-items: center;
            .center_left{
                width:60%;
                height: 100%;
                display: flex;
                flex-direction: column;
                /* align-items: center; */
                justify-content: center;
                gap: 10%;
            }
            .center_right{
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 40%;
                height: 100%;
            }
            
        }
        .content_right{
            width: 10%;
            height: 100%;
            position: relative;
            
            img{
                position: absolute;
                bottom: 25%;
                width: 100%;
            }
        }
    }

`
export const Header = () => {
    return <StyledHear>
        <div className="menu_header">
            <FontAwesomeIcon className="menu_left" icon={faMagnifyingGlass} />
            <TextFormat size={"2.625em"} weight={400} color={"#000000"} fontfam={"AmstelvarAlpha"}>LISA STORE</TextFormat>
            <div className="menu_right">
                <div>
                    <FontAwesomeIcon  icon={faUser} />
                    <TextFormat color={"#1E2832"} fontfam={"Roboto"} weight={400} size={"1.125em"}>Account</TextFormat>
                </div>
                <div>
                    <FontAwesomeIcon icon={faBagShopping} />
                    <TextFormat  color={"#1E2832"} fontfam={"Roboto"} weight={400} size={"1.125em"}>Shoping</TextFormat>
                </div>
            </div>
        </div>
        <div className="content_header">
            <div className="content_left">
                <img src={LeftLimb} alt="" />
            </div>
            <div className="content_center">
                <div className="center_left">
                    <div>
                        <TextFormat color={"#000000"} size={"74px"} weight={300} >Collections</TextFormat>
                    </div>
                    <div>
                        <TextFormat color={"#000000"} fontfam={"Roboto"} size={"30px"} weight={400}>You can explore ans shop many differnt collection
                            <br></br>From various barands here.</TextFormat>
                    </div>
                    <div>
                        <Button bgcolors={"#1E2832"} border={"1px solid"} height={"72px"} width={"223px"} iconname={faBagShopping} stylefontawe={{color:"#FFFFFF",size:"2xl"}}>
                            <TextFormat weight={400} size={"29px"} color={"#FFFFFF"}>Shop Now</TextFormat>
                        </Button>
                    </div>
                </div>
                <div className="center_right">
                    <img src={WomenContent} alt="" />
                </div>
            </div>
            <div className="content_right">
                <img src={RightLimb} alt="" />
            </div>
        </div>
    </StyledHear>
}