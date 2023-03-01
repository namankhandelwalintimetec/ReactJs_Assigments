import { FooterProps } from "./Interface/Interfaces";
import { FooterPart } from "./StyleComponents/Footer";

const Footer = ({ content }: FooterProps) => {
  return (
    <>
      <FooterPart>
        <h1>{content}</h1>
      </FooterPart>
    </>
  );
};

export default Footer;
