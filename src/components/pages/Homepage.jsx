import React, { useEffect } from "react";
import "../../App.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  useEffect(() => {
    const scrollEvent = () => {
      console.log("jsem volám");
      const screenWidth = window.innerWidth;
      function scrollToFire() {
        if (screenWidth < 924) return;
        const fire = document.querySelector(".fire");
        if (!fire) return;
        const scroll = window.scrollY;
        if (scroll > 500) return;
        fire.style.height = `calc(500px - ${scroll * 0.5}px)`;
        fire.style.width = `calc(500px - ${scroll * 0.5}px)`;
        fire.style.marginTop = scroll * 1.5 + 40 + "px";
      }

      function changeBackground() {
        const changeImage = (imageId) => {
          const placeholder = document.getElementById("placeholder");
          placeholder.style.backgroundImage = `url(${imageId})`;
        };

        const placeholder = document.getElementById("placeholder");
        const scroll = window.scrollY;
        const windowHeight = window.innerHeight;
        const start = placeholder?.scrollTop - windowHeight - 1;

        let imageUrl = "";
        if (scroll > start && scroll < start + windowHeight) {
          imageUrl = `./obrazky/1.jpg`;
          placeholder.style.filter = "brightness(0.5)";
        } else if (
          scroll > start + windowHeight &&
          scroll < start + windowHeight * 2
        ) {
          placeholder.style.filter = "brightness(0.5)";
          imageUrl = `./obrazky/2.jpg`;
        } else if (
          scroll > start + windowHeight * 2 &&
          scroll < start + windowHeight * 3
        ) {
          placeholder.style.filter = "brightness(0.5)";
          imageUrl = `./obrazky/3.jpg`;
        } else if (
          scroll > start + windowHeight * 3 &&
          scroll < start + windowHeight * 4
        ) {
          placeholder.style.filter = "brightness(1)";
          imageUrl = `./obrazky/4.jpg`;
        } else if (
          scroll > start + windowHeight * 4 &&
          scroll < start + windowHeight * 5
        ) {
          placeholder.style.filter = "brightness(0.5)";
          imageUrl = `./obrazky/1.jpg`; // Doplnit zde za jiný obrázek
        } else if (scroll > start + windowHeight * 5) {
          placeholder.style.filter = "brightness(0.5)";
          imageUrl = `./obrazky/2.jpg`; // Doplnit zde za jiný obrázek
        }
        changeImage(imageUrl);
      }

      scrollToFire();
      changeBackground();
    };

    document.addEventListener("scroll", scrollEvent);
    return () => {
      document.removeEventListener("scroll", scrollEvent);
    };
  }, [window.innerWidth]);

  return (
    <section id="homepage">
      <div id="homepage__slider">
        <div className="fire__container">
          <img
            className="fire"
            src="./obrazky/vektory/3D/ohen.svg"
            alt="Fire"
          />
          <img
            className="dancer"
            id="dancer1"
            src="./obrazky/vektory/3D/slice27.svg"
            alt="Image 1"
          />
          <img
            className="dancer"
            id="dancer2"
            src="./obrazky/vektory/3D/slice28.svg"
            alt="Image 2"
          />
          <img
            className="dancer"
            id="dancer3"
            src="./obrazky/vektory/3D/slice20.svg"
            alt="Image 3"
          />
          <img
            className="dancer"
            id="dancer4"
            src="./obrazky/vektory/3D/slice29.svg"
            alt="Image 4"
          />
        </div>
        <div className="divider" />
        <div id="placeholder" />
        <div className="texts">
          <div className="text">
            <p>
              Lesní laboratoř spekulativních přítomností a nadějných
              budoucností.
            </p>
          </div>
          <div className="text">
            <p>
              A forestry laboratory of speculative presences and hopeful
              futures.
            </p>
          </div>
          <div className="text">
            <p>
              “Kdysi dávno – možná zítra – se v mechu probudil kruh. Z kořenů a
              mědi, z popěvků i blikajících vln signálu. Ti, kdo tam přišli,
              nehledali odpovědi, ale zpomalení. V tichu mezi stromy se učili
              znovu propojovat: umění s algoritmem, rituál s obvodem, naději s
              budoucností. A svět, ten se tam na chvíli zastavil. Jen trochu.
              Aby nezapomněl dýchat.”
            </p>
          </div>
          <div className="text">
            <p>
              Once upon a time - perhaps tomorrow - a circle awoke in the moss.
              Of roots and copper, of chants and flickering waves of signal.
              Those who came there were not looking for answers, but for
              slowness. In the silence among the trees, they were learning to
              reconnect: art with algorithm, ritual with circuit, hope with the
              future. And the world, it stopped there for a moment. Just a
              little. So it wouldn't forget to breathe.
            </p>
          </div>
        </div>
        <div className="sidebar-menu">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <Link to="/lineup" className="hover:text-white">
            Lineup
          </Link>
          <Link to="https://tickets.drevjeno.cz" className="hover:text-white">
            Tickets
          </Link>
          <Link to="/info" className="hover:text-white">
            Info
          </Link>
          <Link
            to="https://t.me/+sLPjGaYpe045Yjg0"
            className="hover:text-white"
          >
            Telegram
          </Link>
          <Link to="https://discord.gg/NThqMbWQvT" className="hover:text-white">
            Discord
          </Link>
        </div>
      </div>
      <div className="preload-images"></div>
    </section>
  );
};

export default Homepage;
