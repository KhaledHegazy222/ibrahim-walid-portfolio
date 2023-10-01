import Typed from "react-typed";

import heroImage from "../../assets/hero.png";
import whatsappIcon from "../../assets/whatsapp.svg";
import linkedinIcon from "../../assets/linkedin.png";
import behanceIcon from "../../assets/behance.png";
import twitterIcon from "../../assets/twitter.png";

import { StyledFilledLink, StyledOutlinedLink } from "../Navbar/Navbar.styled";
import { StyleLinksList } from "./Hero.styled";
import ParticlesBackground from "../ParticlesBackground";
const Hero = () => {
  return (
    <>
      <ParticlesBackground />
      <section
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: "2",
        }}
      >
        <div
          style={{
            width: "40%",
          }}
        >
          <p
            style={{
              fontSize: "24px",
            }}
          >
            Hello, I&apos;m
          </p>
          <h2
            style={{
              fontSize: "56px",
            }}
          >
            Ibrahim Walid
          </h2>
          <h2
            style={{
              fontSize: "56px",
            }}
          >
            A Creative{" "}
            <span
              style={{
                color: "#45A0FF",
              }}
            >
              <Typed
                strings={["UI/UX Designer", "Web Designer"]}
                typeSpeed={60}
                backSpeed={60}
                backDelay={3000}
                loop
              />
            </span>
          </h2>
          <p
            style={{
              fontSize: "24px",
            }}
          >
            I&apos;m creative designer based in New York, and I&apos;m very
            passionate and dedicated to my work
          </p>
          <div
            style={{
              margin: "30px 0",
            }}
          >
            <StyledFilledLink
              href="#"
              style={{
                width: "150px",
                textAlign: "center",
                marginLeft: "0",
              }}
            >
              Hire me
            </StyledFilledLink>
            <StyledOutlinedLink href="#"> See Portfolio</StyledOutlinedLink>
          </div>
          <div>
            <StyleLinksList>
              <li>
                <img src={linkedinIcon} alt="" />
              </li>
              <li>
                <img src={behanceIcon} alt="" />
              </li>
              <li>
                <img src={twitterIcon} alt="" />
              </li>
            </StyleLinksList>
          </div>
        </div>
        <img src={heroImage} />
      </section>{" "}
      <a
        href="#"
        style={{
          position: "fixed",
          zIndex: "4",
          right: "20px",
          bottom: "20px",
        }}
      >
        <img
          src={whatsappIcon}
          style={{
            margin: "0",
            padding: "0",
          }}
        />
      </a>
    </>
  );
};

export default Hero;
