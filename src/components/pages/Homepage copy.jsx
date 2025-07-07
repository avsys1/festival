import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Homepage = () => {
  useEffect(() => {
    const scrollEvent = () => {
      const dancer = document.querySelector(".dancer");
      if (!dancer) return;
      const scroll = window.scrollY;
      if (scroll > 500) return;
      dancer.style.height = `calc(400px - ${scroll * 0.5}px)`;
      dancer.style.width = `calc(400px - ${scroll * 0.5}px)`;
      dancer.style.marginTop = scroll * 1.5 + "px";
    };

    document.addEventListener("scroll", scrollEvent);

    return () => {
      document.removeEventListener("scroll", scrollEvent);
    };
  }, []);
  return (
    <section id="homepage">
      <div id="homepage__slider">
        <img className="dancer" src="./obrazky/dancer.jpg"></img>
      </div>
    </section>
  );
};

export default Homepage;
