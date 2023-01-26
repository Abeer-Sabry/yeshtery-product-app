import React, { Component } from "react";
import "./Navbar.scss";
// reusable-components
import Container from "../../reusableComponents/Container/Container";
import FlexDiv from "../../reusableComponents/FlexDiv/FlexDiv";
import IconsDev from "../../reusableComponents/IconsDiv/IconsDev";
import SearchBar from "../../reusableComponents/SearchBar/SearchBar";

class Navbar extends Component {
  render() {
    const { cartItems, showCart } = this.props;
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
              <IconsDev icon={"/images/Path 772.svg"} title={"cart"} onClick={() => showCart()} />
              <span className="badge">{cartItems.length}</span>
            </FlexDiv>
            <IconsDev icon={"/images/Path 771 (1).svg"} title={"wishList"} />
            <IconsDev icon={"/images/Path 773.svg"} title={"Login"} />
          </div>
        </div>
      </Container>
    );
  }
}

export default Navbar;
