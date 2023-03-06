import styled from "styled-components";
import Card from "../Card/Card";
import ServicesList from "../Constant";

const serviceList = ServicesList.map((item, index) => (
  <Card title={item.title} content={item.Description}  />
));

const ServiceDisplay = styled.div`
  display: flex;
  margin: auto;
  width: 85%;
`;

const CardContainer = () => {
  return (
    <>
      <section className="header">
        <ServiceDisplay>{serviceList}</ServiceDisplay>
      </section>
    </>
  );
};

export default CardContainer;
