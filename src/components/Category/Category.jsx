import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../../reusableComponents/Container/Container";
import "./Category.scss";
const Category = () => {
  return (
    <div className="category">
      <Container>
        <ul>
          <li className="cateWrapper">
            <NavLink to="/men">men</NavLink>
            <NavLink to="/women">women</NavLink>
            <NavLink to="/unisex">unisex</NavLink>
            <NavLink to="/kids">kids</NavLink>
            <NavLink to="/best sellers">best sellers</NavLink>
            <NavLink to="/new arrivals">new arrivals</NavLink>
            <NavLink to="/">offers</NavLink>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Category;
