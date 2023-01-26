import React from "react";
import { NavLink } from "react-router-dom";
import Container from "../../reusableComponents/Container/Container";
import "./Category.scss";
const Category = () => {
  return (
    <div className="category">
      <Container>
        <ul>
          <li className="cateWrapper">
            <NavLink to="/">men</NavLink>
            <NavLink to="/">women</NavLink>
            <NavLink to="/">unisex</NavLink>
            <NavLink to="/">kids</NavLink>
            <NavLink to="/">best sellers</NavLink>
            <NavLink to="/">new arrivals</NavLink>
            <NavLink to="/">offers</NavLink>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Category;
