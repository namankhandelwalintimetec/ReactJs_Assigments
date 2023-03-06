import styled from "styled-components";

export const AboutMainDIv = styled.section`
  margin-top:6%;

  .container{
  width: 100%;
  max-width: 85%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  }

  .company-image{
   height: auto;
   width: 25%;
   margin-left:5%;
  }

  .about-content{
  width: 50%;
  float: right;
  margin-right: 5%;
  word-wrap: break-word;
  text-align: justify;
  }

  .about-head{
	font-size: 3vmax;
  font-weight: 600;
  margin-bottom: 10px;
  }

  .about-title{
   font-size: 2vmax;
  font-weight: 400;
  margin-bottom: 20px;
  }
  .content-container{
	font-size: 1vmax;
  line-height: 25px;
  letter-spacing: 1px;
  }

  .button{
	font-size: 18px;
  background: #4070f4;
  color: #fff;
  text-decoration: none;
  border: none;
  padding: 8px 25px;
  border-radius: 6px;
  transition: 0.5s;
  }

  .button:hover {
  background: #000;
  border: 1px solid #4070f4;
}
`