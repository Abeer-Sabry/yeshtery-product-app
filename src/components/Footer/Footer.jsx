import React from "react";
import { Link } from "react-router-dom";
import Button from "../../reusableComponents/Button/Button";
import Container from "../../reusableComponents/Container/Container";
import FlexDiv from "../../reusableComponents/FlexDiv/FlexDiv";
import IconsDev from "../../reusableComponents/IconsDiv/IconsDev";
import SearchBar from "../../reusableComponents/SearchBar/SearchBar";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="gridDiv">
          <div style={{ borderRight: "1px solid gray", paddingRight: "10px" }}>
            <img className="logo" src="/images/brand-logo-yellow.svg" alt="" />
            <p>
              This is an exclusive online platform providing the consumer with a convenient way of
              shopping from stores while in the convenience of their home. Supporting the latest{" "}
              brands and products available in the stock real time.
            </p>
          </div>
          <div>
            <p className="paragraph">Subscribe to our newsletter</p>
            <SearchBar
              placeholder={"Enter your mail"}
              className="btnPosition"
              absolute={
                <Button>
                  Subscribe
                  <img className="btnImg" src="/images/Group 1431.svg" alt="" />
                </Button>
              }
            />

            <div className="gridDiv">
              <div style={{ borderRight: "1px solid gray" }}>
                <ul>
                  <li>
                    <Link to="/">About Us</Link>
                    <Link to="/">Contact Us</Link>
                    <Link to="/">Track Order</Link>
                    <Link to="/">Sell With Us</Link>
                    <Link to="/">Shipping And Returns</Link>
                  </li>
                </ul>
              </div>
              <div>
                <FlexDiv>
                  <IconsDev
                    icon={"https://www.freepnglogos.com/uploads/facebook-logo-13.png"}
                    title={"Facebook"}
                    colorStyle={true}
                  />
                </FlexDiv>

                <FlexDiv>
                  <IconsDev
                    icon={
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
                    }
                    title={"Linkedin"}
                    colorStyle={true}
                  />
                </FlexDiv>

                <FlexDiv>
                  <IconsDev
                    icon={
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                    }
                    title={"Instagram"}
                    colorStyle={true}
                  />
                </FlexDiv>

                <FlexDiv>
                  <IconsDev
                    icon={"https://cdn-icons-png.flaticon.com/512/124/124021.png"}
                    title={"Twitter"}
                    colorStyle={true}
                  />
                </FlexDiv>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
