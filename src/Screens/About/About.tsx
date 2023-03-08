import IttImage from '../../Image/images.png'
import { AboutMainDIv } from "./AboutStyle";

const aboutContent="In Time Tec provides progressive software development services, enabling its clients'​   to aging 15 years in software/firmware R&D, and 20 years building onshore/offshore R&D teams"

const About =()=>{
	return (
    <>
      <AboutMainDIv>
        <div className="container"></div>
        <img className="company-image" src={IttImage} />
        <div className="about-content">
          <h2 className="about-head"> About Us </h2>
          <h5 className="about-title"> Software company</h5>
          <p className="content-container">{aboutContent}</p>
          <button className="button">Click here </button>
        </div>
      </AboutMainDIv>
    </>
  );
}

export default About