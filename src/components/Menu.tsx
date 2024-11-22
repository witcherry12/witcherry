import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo-witcherry.svg";
import arrow from "../assets/chevron.svg";
import bebidas from "../assets/menu/bebidas-witcherry.svg";
// import desayuno from "../assets/menu/desayuno-witcherry.svg";
// import postres from "../assets/menu/postres-witcherry.svg";
//import promos from "../assets/menu/promos-witcherry.svg";
import waffles from "../assets/menu/waffles-witcherry.svg";
import "./menu.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

export const Menu = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  const refNav = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleClickLinkHome = () => {
    navigate("/menu/main", { replace: true });
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = refNav.current!;
      const { y } = nav.getBoundingClientRect();
      y === 0 ? setToggle(true) : setToggle(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toggle]);

  return (
    <>
      <header className="header" ref={refNav}>
        <Slide>
          <button
            className={`button-nav ${!toggle ? "btn-active-border" : ""}`}
            onClick={handleClickLinkHome}
          >
            <div className="cont-buton">
              <img src={logo} className="logo" />
              <img
                src={arrow}
                alt="arrow"
                style={{ marginTop: "10px" }}
                className={`arrow ${toggle ? "activo" : ""}`}
              />
            </div>
          </button>
          <nav className={`nav ${toggle ? "current" : ""}`}>
            <ul className="list-items">
              <NavLink to={"/menu/waffles"}>
                <li className="items">
                  <img src={waffles} alt="waffles" />
                </li>
              </NavLink>
              {/* <NavLink to={"/menu/desayunos"}>
                <li className="items">
                  <img src={desayuno} alt="desayuno" />
                </li>
              </NavLink> */}
              <NavLink to={"/menu/bebidas"}>
                <li className="items">
                  <img src={bebidas} alt="bebidas" />
                </li>
              </NavLink>
              {/* <NavLink to={"/menu/postres"}>
                <li className="items">
                  <img src={postres} alt="postres" />
                </li>
              </NavLink>
              <NavLink to={"/menu/promos"}>
                <li className="items">
                  <img src={promos} alt="promos" />
                </li>
              </NavLink> */}
            </ul>
          </nav>
        </Slide>
      </header>
    </>
  );
};
