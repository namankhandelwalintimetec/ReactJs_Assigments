import { ServiceCard } from "./CardStyleComponent";
import AppDevelopment from "../../../../Image/application.png";

interface dataType {
  title: string;
  content: string; 
}

const Card = ({ title, content }: dataType) => {
  return (
    <>
      <ServiceCard>
        <img src={AppDevelopment} />
        <h3>{title}</h3>
        <p>{content}</p>
      </ServiceCard>
    </>
  );
};

export default Card;
