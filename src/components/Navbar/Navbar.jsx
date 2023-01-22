import React from "react";
import Container from "../../reusableComponents/Container";
import FlexDiv from "../../reusableComponents/FlexDiv";
import IconsDev from "../../reusableComponents/IconsDev";
import SearchBar from "../../reusableComponents/SearchBar";

const Navbar = () => {
  return (
    <Container>
      <div className="gridDiv">
        <SearchBar
          className="search"
          placeholder={"search"}
          absolute={<img src="/images/Path 774.svg" alt="search" />}
        />
        <img className="adidas" src="/images/Group 745.svg" alt="adidas" />
        <div className="flexible ">
          <FlexDiv>
            <IconsDev icon={"/images/Path 772.svg"} title={"cart"} />
          </FlexDiv>
          <FlexDiv>
            س
            <IconsDev icon={"/images/Path 771 (1).svg"} title={"wishList"} />
          </FlexDiv>
          <FlexDiv>
            <IconsDev icon={"/images/Path 772.svg"} title={"cart"} />
          </FlexDiv>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
