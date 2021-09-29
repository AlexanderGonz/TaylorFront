import React, { useState, useContext, useEffect } from "react";
import Link from "next/link"
import { MenuLink, Nav, Logo, Hamburger, Menu } from "./styles/Navbar.styled";
import { UserContext } from "../contexts/userContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, login, logout } = useContext(UserContext)
  const [isLogin, setIsLogin] = useState(Object.keys(user).length > 0)
  const handleClickLog = () => {
    Object.keys(user).length > 0 ? logout() : login()
  }

  useEffect(() => {
    setIsLogin(Object.keys(user).length > 0)
  }, [user])

  return (
    <Nav>
      <Link href="/">
        <Logo>
          TAYLOR <span> restaurant list</span>
        </Logo>
      </Link>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <Link href="">
          <MenuLink onClick={handleClickLog}>{isLogin ? 'LogOut' : 'LogIn'}</MenuLink>
        </Link>
        {
          isLogin &&
          <Link href="/myRestaurants">
            <MenuLink>My Restaurants</MenuLink>
          </Link>
        }
        <Link href="/about">
          <MenuLink>About</MenuLink>
        </Link>
      </Menu>
    </Nav>
  );
};

export default Navbar;