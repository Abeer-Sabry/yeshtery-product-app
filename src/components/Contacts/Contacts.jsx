import React from "react";
import { Link } from "react-router-dom";
import Container from "../../reusableComponents/Container/Container";
import FlexDiv from "../../reusableComponents/FlexDiv/FlexDiv";
import IconsDev from "../../reusableComponents/IconsDiv/IconsDev";
import "./Contacts.scss";

const Contacts = () => {
  return (
    <div className="contactsWrapper">
      <Container>
        <div className="contactsParent">
          <FlexDiv>
            <img className="logoIcon" src="/images/Group 770.svg" alt="Yeshtery" />
            <img className="conYeshtery" src="/images/Group 769.svg" alt="Yeshtery" />
          </FlexDiv>
          <div>
            <p className="offer">
              Day offer,Buy One Get One <Link to="">Show Now</Link>
            </p>
          </div>
          <div className="contacts">
            <IconsDev icon={"/images/Group 756.svg"} title="Contact"></IconsDev>
            <IconsDev icon={"/images/Group 758.svg"} title="Track Order"></IconsDev>
            <IconsDev icon={"/images/Group 753.svg"} title="Find A Store"></IconsDev>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contacts;
