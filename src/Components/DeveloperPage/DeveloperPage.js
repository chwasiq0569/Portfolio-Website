import React, { useEffect } from "react";
// import HeroComp from "../util/HeroComp";
import DeveloperPageHero from "./DeveloperPageHero";
import "../util/introSection.scss";
import Footer from "./../util/Footer";
import VsCode from "../../assets/devtools/visualStudio.png";
import Github from "../../assets/devtools/github.png";
import Postman from "../../assets/devtools/icons8-postman-api-128.png";
import Npm from "../../assets/devtools/npm.png";
import WebPack from "../../assets/devtools/icons8-webpack-512.png";
import TiltingEyes from "./../util/TiltingEyes/TiltingEyes";
//projects
import CovidTrackerImg from "../../assets/DeveloperProj/CovidTracker2.png";
import MovieStreamApp from "../../assets/DeveloperProj/MovieStreamApp.jpg";
import HTMLIcon from "../../assets/DeveloperLanguages/html5.png";
import CSSIcon from "../../assets/DeveloperLanguages/css.png";
import WordpressIcon from "../../assets/DeveloperLanguages/wordpress.png";
import JSIcon from "../../assets/DeveloperLanguages/javascript.png";
import BootstrapIcon from "../../assets/DeveloperLanguages/bootstrap.png";
import ReactIcon from "../../assets/DeveloperLanguages/react.png";
import NodeJSIcon from "../../assets/DeveloperLanguages/nodejs.png";
import JavaIcon from "../../assets/DeveloperLanguages/java.png";
import SassIcon from "../../assets/DeveloperLanguages/sass.png";
import ReduxIcon from "../../assets/DeveloperLanguages/redux.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { motion } from "framer-motion";
import IntroSection from "./../util/IntroSection";
import CartImg from "../../assets/DesignProj/icons8-fast-cart-64.png";
import ChatRoomIcon from "../../assets/DeveloperProj/icons8-chat-room-100.png";
import IconContainer from "./IconContainer";

const DeveloperPage = ({ page, text, pageData }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflowY = "scroll";
  }, []);

  const row1 = [
    {
      className: "iconContainer",
      data: "zoom-in",
      delay: "150",
      duration: "700",
      text: "HTML5",
      Icon: HTMLIcon,
      innerClass: "tooltip",

      altText: "HTML Icon",
    },
    {
      className: "iconContainer",

      data: "zoom-in",
      delay: "200",
      duration: "700",
      text: "CSS3",
      Icon: CSSIcon,
      innerClass: "tooltip",

      altText: "CSS Icon",
    },
    {
      className: "iconContainer",

      data: "zoom-in",
      delay: "250",
      duration: "700",
      text: "Javascript",
      Icon: JSIcon,
      innerClass: "tooltip",

      altText: "Javascript Icon",
    },
    {
      className: "iconContainer",

      data: "zoom-in",
      delay: "300",
      duration: "700",
      text: "Wordpress",
      Icon: WordpressIcon,
      innerClass: "tooltip",

      altText: "Wordpress Icon",
    },
  ];
  const row2 = [
    {
      className: "iconContainer",
      data: "zoom-in",
      delay: "350",
      duration: "700",
      text: "Bootstrap",
      Icon: BootstrapIcon,
      innerClass: "tooltip",
      altText: "Bootstrap Icon",
    },
    {
      className: "iconContainer middleBigIcon",
      data: "zoom-in",
      delay: "400",
      duration: "700",
      text: "React-JS",
      Icon: ReactIcon,
      innerClass: "react-tooltip",
      altText: "React Icon",
    },
  ];

  const row3 = [
    {
      className: "iconContainer",

      data: "zoom-in",
      delay: "500",
      duration: "700",
      text: "NodeJS",
      Icon: NodeJSIcon,
      innerClass: "tooltip",

      altText: "NodeJS Icon",
    },
    {
      className: "iconContainer",

      data: "zoom-in",
      delay: "550",
      duration: "700",
      text: "Java",
      Icon: JavaIcon,
      innerClass: "tooltip",

      altText: "Java Icon",
    },
    {
      className: "iconContainer",

      data: "zoom-in",
      delay: "600",
      duration: "700",
      text: "Sass",
      Icon: SassIcon,
      innerClass: "tooltip",

      altText: "Sass Icon",
    },
    {
      className: "iconContainer",

      data: "zoom-in",
      delay: "650",
      duration: "700",
      text: "Redux",
      Icon: ReduxIcon,
      innerClass: "tooltip",

      altText: "Redux Icon",
    },
  ];

  const toolsIcons = [
    {
      className: "iconContainer",
      innerClass: "tooltip",
      data: "zoom-in",
      delay: "600",
      duration: "1000",
      text: "VS-CODE",
      Icon: VsCode,
      altText: "VS-CODE Icon",
    },
    {
      className: "iconContainer",
      innerClass: "tooltip",
      data: "zoom-in",
      delay: "1200",
      duration: "1000",
      text: "Webpack",
      Icon: WebPack,
      altText: "WebPack Icon",
    },
    {
      className: "iconContainer",
      innerClass: "tooltip",
      data: "zoom-in",
      delay: "1000",
      duration: "1000",
      text: "Postman",
      Icon: Postman,
      altText: "Postman Icon",
    },
    {
      className: "iconContainer",
      innerClass: "tooltip",
      data: "zoom-in",
      delay: "1400",
      duration: "1000",
      text: "NPM",
      Icon: Npm,
      altText: "NPM Icon",
    },
  ];

  return (
    <motion.div
      className="developerPage__Wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="developerPage__inner__Wrapper">
        <DeveloperPageHero page={page} text={text} pageData={pageData} />

        <div className="lowerSection">
          <IntroSection page={page} pageData={pageData} />
          {/* ////////////////////////// */}

          <div className="toolsSection">
            <h1
              className="toolsHead"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              Languages/Libraries/Frameworks I Use as Developer
            </h1>
            <TiltingEyes />
            <div className="toolsIconContainer">
              <div className="Row1">
                {row1.map((r) => (
                  <IconContainer
                    className={r.className}
                    data={r.data}
                    delay={r.delay}
                    duration={r.duration}
                    text={r.text}
                    Icon={r.Icon}
                    altText={r.altText}
                    innerClass={r.innerClass}
                  />
                ))}
              </div>
              <div className="Row2">
                {row2.map((r) => (
                  <IconContainer
                    className={r.className}
                    data={r.data}
                    delay={r.delay}
                    duration={r.duration}
                    text={r.text}
                    Icon={r.Icon}
                    altText={r.altText}
                    innerClass={r.innerClass}
                  />
                ))}
                <div
                  className="iconContainer"
                  data-aos="zoom-in"
                  data-aos-delay="450"
                  data-aos-duration="700"
                >
                  <div className="gsap-tooltip">GSAP</div>
                  <p>GSAP</p>
                </div>
              </div>
              <div className="Row3">
                {row3.map((r) => (
                  <IconContainer
                    className={r.className}
                    data={r.data}
                    delay={r.delay}
                    duration={r.duration}
                    text={r.text}
                    Icon={r.Icon}
                    altText={r.altText}
                    innerClass={r.innerClass}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="toolsSection2">
            <h1
              className="toolsHead"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              Tools I Use as Developer
            </h1>
            <div className="toolsIconContainerDev">
              {toolsIcons.map((t) => (
                <IconContainer
                  className={t.className}
                  data={t.data}
                  delay={t.delay}
                  duration={t.duration}
                  text={t.text}
                  Icon={t.Icon}
                  altText={t.altText}
                  innerClass={t.innerClass}
                />
              ))}
            </div>
          </div>

          <div className="workSectionDev">
            <h1 className="titleHead">Work</h1>
            <div className="projects">
              <div
                className="landscapeProj movieStreamProj"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
                onClick={() =>
                  window.open(
                    "https://coronavirustracker-2bc65.web.app/",
                    "_blank"
                  )
                }
              >
                <div className="imgWrapper">
                  <img src={CovidTrackerImg} alt="AirHuaracheImg" />
                </div>
              </div>
              <div className="twoProjs">
                <div
                  className="leftProj"
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="700"
                  onClick={() =>
                    window.open(
                      "https://social-networking-app-38daf.web.app/",
                      "_blank"
                    )
                  }
                >
                  <h1 className="titleHead portfoliodesign">Chat Room App</h1>
                  <div className="imgWrapper">
                    <img src={ChatRoomIcon} alt="ChatRoomIcon" />
                  </div>
                </div>
                <div
                  className="rightProj"
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-duration="700"
                  onClick={() =>
                    window.open(
                      "https://ecommerce-app-553b9.web.app/",
                      "_blank"
                    )
                  }
                >
                  <h1 className="titleHead">Ecommerce App</h1>
                  <div className="imgWrapper">
                    <img src={CartImg} alt="CartImg" />
                  </div>
                </div>
              </div>

              <div
                className="landscapeProj coviddesign"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="750"
                onClick={() =>
                  window.open("https://streamproject-4ce54.web.app/", "_blank")
                }
              >
                <h1 className="titleHead">Stream App</h1>
                <div className="imgWrapper">
                  <img src={MovieStreamApp} alt="CovidTracker" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default DeveloperPage;
