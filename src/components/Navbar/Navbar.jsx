import React, { Component } from "react";
import Container from "../../reusableComponents/Container/Container";
import FlexDiv from "../../reusableComponents/FlexDiv/FlexDiv";
import IconsDev from "../../reusableComponents/IconsDiv/IconsDev";
import SearchBar from "../../reusableComponents/SearchBar/SearchBar";
import "./Navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <Container>
        <div className="parentGrid">
          <div>
            <SearchBar
              className="search"
              placeholder={"search"}
              absolute={<img src="/images/Path 774.svg" alt="search" />}
            />
          </div>
          <div className="adidas">
            <img src="/images/Group 745.svg" alt="adidas" />
          </div>
          <div className="flexible ">
            <FlexDiv>
              <IconsDev
                icon={"/images/Path 772.svg"}
                title={"cart"}
                badge={0}
                onClick={() => this.props.toggleCart()}
              />
              <span className="badge">{this.props.cartItems.length}</span>
            </FlexDiv>
            <FlexDiv>
              <IconsDev icon={"/images/Path 771 (1).svg"} title={"wishList"} />
            </FlexDiv>
            <FlexDiv>
              <IconsDev icon={"/images/Path 773.svg"} title={"Login"} />
            </FlexDiv>
          </div>
        </div>
      </Container>
    );
  }
}

export default Navbar;
