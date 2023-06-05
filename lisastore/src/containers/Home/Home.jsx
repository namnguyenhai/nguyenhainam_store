import { styled } from "styled-components";
import Graphic from "images/Content/graphic.svg";
import Salva from "images/Content/salva.svg";
import Golden from "images/Content/golden.svg";
import Furni from "images/Content/furni.svg";
import Travell from "images/Content/travel.svg";
const StyledHome = styled.div`
    width: 100%;
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .home_brand{
        width: 80%;
        display: flex;
        justify-content: space-around;
        height: 300px;
    }
    .recomend_home{
        width: 80%;
        height: 700px;
        background-color: black;
    }
`
export const Home = () => {
    return <StyledHome>
        <div className="home_brand">
            <img src={Graphic} alt="" />
            <img src={Salva} alt="" />
            <img src={Golden} alt="" />
            <img src={Furni} alt="" />
            <img src={Travell} alt="" />
        </div>
        <div className="recomend_home">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </StyledHome>
}