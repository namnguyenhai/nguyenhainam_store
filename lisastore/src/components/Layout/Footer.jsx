import { TextFormat } from "components/Text";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram,faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Payment from "images/Content/payment.svg";
const StyledFooter = styled.div`
    width: 100%;
    
    
    .footer_flex_row{
        padding:50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        gap: 10%;
    }
    .footer_flex_icon{
        display: flex;
        gap: 10%;
    }
    .footer_flex_column{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 25%;
        height: 50%;
        gap: 20px;
    }
    .backtotop{
        width: 100%;
        height: 50px;
        box-sizing: border-box;
        padding:  0 10% 0 10%;
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const Footer = ({ }) => {
    return <StyledFooter>
        <div className="footer_flex_row">
            <div className="footer_flex_column">
                <TextFormat color={"#000000"} fontfam={"AmstelvarAlpha"} size={"28px"} weight={400}>Lisa</TextFormat>
                <TextFormat color={"rgba(30, 40, 50, 0.75)"} size={"16px"} weight={400}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua
                </TextFormat>
                <div className="footer_flex_icon">
                    <FontAwesomeIcon style={{fontSize:"20px"}} icon={faFacebook} />
                    <FontAwesomeIcon style={{fontSize:"20px"}} icon={faTwitter} />
                    <FontAwesomeIcon style={{fontSize:"20px"}} icon={faLinkedin} />
                    <FontAwesomeIcon style={{fontSize:"20px"}} icon={faInstagram} />
                </div>
            </div >
            <div className="footer_flex_column">
                <TextFormat color={"#000000"} size={"16px"} weight={600}>CATALOG</TextFormat>
                <TextFormat color={"#1E2832"} size={"14px"} weight={400}>Necklaces</TextFormat>
                <TextFormat color={"#1E2832"} size={"14px"} weight={400}>hoodies</TextFormat>
                <TextFormat color={"#1E2832"} size={"14px"} weight={400}>Jewelry Box</TextFormat>
                <TextFormat color={"#1E2832"} size={"14px"} weight={400}>t-shirt</TextFormat>
                <TextFormat color={"#1E2832"} size={"14px"} weight={400}>jacket</TextFormat>
            </div>
            <div className="footer_flex_column">
                <TextFormat color={"#000000"} size={"16px"} weight={600}>ABOUT US</TextFormat>
                <TextFormat color={"#1E2832"} size={"14px"} weight={400}>Our Producers</TextFormat>
                <TextFormat color={"#1E2832"} size={"14px"} weight={400}>Sitemap</TextFormat>
                <TextFormat color={"#1E2832"} size={"14px"} weight={400}>FAQ</TextFormat>
                <TextFormat color={"#1E2832"} size={"14px"} weight={400}>About Us</TextFormat>
                <TextFormat color={"#1E2832"} size={"14px"} weight={400}>Terms & Conditions</TextFormat>
            </div>
            <div className="footer_flex_column">
                <TextFormat color={"#000000"} size={"16px"} weight={600}>CUSTOMER SERVICES</TextFormat>
                <TextFormat color={"#1E2832"} size={"14px"} weight={400}>Contact Us</TextFormat>
                <TextFormat color={"#1E2832"} size={"14px"} weight={400}>Track Your Order</TextFormat>
                <TextFormat color={"#1E2832"} size={"14px"} weight={400}>Product Care & Repair</TextFormat>
                <TextFormat color={"#1E2832"} size={"14px"} weight={400}>Book an Appointment</TextFormat>
                <TextFormat color={"#1E2832"} size={"14px"} weight={400}>Shipping & Returns</TextFormat>
            </div>
        </div>
        
        <div className="backtotop">
            <div>
                <TextFormat color={"#FFFFFF"} size={"16px"} weight={600}>&copy; 2023 LISA , Inc.</TextFormat>
                </div>
            <div>
                <img src={Payment} alt="" />
            </div>
            <div>
                <TextFormat color={"#FFFFFF"} size={"16px"} weight={400}>Scroll to top</TextFormat>
            </div>
        </div>
    </StyledFooter>
}