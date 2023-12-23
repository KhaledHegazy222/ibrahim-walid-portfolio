import {
  StyledColoredTitle,
  StyledSection,
  StyledSubTitle,
} from "../About/About.styled";

import phone_image from "../../assets/contact/phone.png";
import mail_image from "../../assets/contact/mail.png";
import address_image from "../../assets/contact/address.png";
import {
  StyledContactTitle,
  StyledContent,
  StyledFormContainer,
  StyledList,
  StyledListItem,
  StyledMultiLineInput,
  StyledOneLineInput,
  StyledSubmitButton,
} from "./Contact.styled";
const Contact = () => {
  return (
    <StyledSection
      style={{
        width: "100%",
        background:
          "linear-gradient(54.59deg, #00387A 5.04%, #001227 62.83%, #001227 62.83%)",
      }}
    >
      <StyledColoredTitle
        style={{
          padding: 0,
          fontSize: "32px",
          lineHeight: "32px",
          margin: "10px auto",
        }}
      >
        Contact
      </StyledColoredTitle>
      <StyledSubTitle textAlign="center">
        I want to hear from you
      </StyledSubTitle>
      <StyledContent>
        <StyledList>
          <StyledListItem>
            <img src={phone_image} alt="" />
            <div
              style={{
                padding: "0 10px",
              }}
            >
              <StyledContactTitle>Phone</StyledContactTitle>
              <p>01020889544</p>
            </div>
          </StyledListItem>
          <StyledListItem>
            <img src={mail_image} alt="" />
            <div
              style={{
                padding: "0 10px",
              }}
            >
              <StyledContactTitle>Email</StyledContactTitle>
              <p>IbrahimWalid963@gmail.com</p>
            </div>
          </StyledListItem>
          <StyledListItem>
            <img src={address_image} alt="" />
            <div
              style={{
                padding: "0 10px",
              }}
            >
              <StyledContactTitle>Address</StyledContactTitle>
              <p>Mansoura, Egypt</p>
            </div>
          </StyledListItem>
        </StyledList>
        <StyledFormContainer>
          <form>
            <StyledOneLineInput type="text" placeholder="Your name" />
            <StyledOneLineInput type="email" placeholder="Your email" />
            <StyledMultiLineInput type="text" placeholder="Your message" />

            <StyledSubmitButton type="submit" variant="contained">
              Send Message
            </StyledSubmitButton>
          </form>
        </StyledFormContainer>
      </StyledContent>
    </StyledSection>
  );
};

export default Contact;
