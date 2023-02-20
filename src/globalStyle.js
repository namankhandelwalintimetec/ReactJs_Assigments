import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  .App {
	text-align: center;
}

body {
	background-color: #d8cccc;
}

.border-line {
	border: 1px solid rgb(51, 51, 51);
	width: 80%;
	margin: auto;
}

.note-card {
	text-align: justify right;
	margin: 5%;
	display: grid;
	gap: 5%;
	grid-template-columns: repeat(auto-fill, 250px);
	background: #d8cccc;
	overflow-y: scroll;
	height: 600px;
	/* position: relative; */
	
}

h1 {
	color: white;
	background: transparent;
	background-color: #8566aa;
	padding: 6px 0 2px 0;
	margin-bottom: 10px;
	box-shadow: 5px 5px 15px -15px rgb(0, 0, 0, 0.3);
}

input {
	text-align: center;
	height: 30px;
	top: 10px;
	border: none;
	background-color: transparent;
	font-size: 20px;
	font-weight: 500;
	width: 60%;
	border-bottom: 2px solid #8566aa;
	outline: none;
}

button {
	min-height: 40px;
	width: 40px;
	border-radius: 50%;
	border-color: transparent;
	display: inline-block;
}

.center {
	margin: auto;
	width: 40%;
	border: 3px solid #73ad21;
	padding: 10px;
	background-color: azure;
	text-align: center;
	align-items: center;
}

.Delete {
	display: inline-block;
	background-color: rgb(255, 252, 252);
	margin-left: 10%;
	margin-top: 2px;
	bottom: 0px;
	border: 1px solid black;
}

li {
	display: inline-block;
	margin-right: 10px;
	margin-bottom: 5%;
	font-weight: bold;
	text-decoration: line-through;
	width: fit-content;
	width: 100px;
	text-transform: capitalize;
}

.card {
	height: 250px;
	width: 250px;
	background-color: #ffffff;
	border-radius: 20px;
}


.addscroll {
	overflow-x: scroll;
	height: 55%;
	/* overflow-x: auto; */
	width: 80%;
	font-size: larger;
	font-weight: bold;
	margin-top: 1px;
	margin-left: 10%;
	word-wrap: break-word;
}

.set-date {
	margin-bottom: 1%;
	text-align: center;
	font-weight: bold;
}

.ADD {
	height: 100%;
	width: 100%;
}

.update {
	display: inline-block;
	background-color: rgb(255, 252, 252);
	margin-left: 2%;
	bottom: 3px;
	left: 10%;
	border: 1px solid black;
}

.popup {
	height: 300px;
	width: 50%;
	margin: auto;
	box-shadow: 10px 10px 10px 10px #888888;
	border-radius: 2%;
	color: black;
	background-color: white;
}

.head-pop {
	text-align: start;
	font-weight: bold;
	text-align: center;
	margin-top: 6%;
	margin-bottom: 6%;
}

.input-pop {
	display: block;
	margin: auto;
	border-radius: 20px;
	border: 5px solid #282c34;
	width: 70%;
	height: 14%;
}
.time{
	font-size:larger;
	font-weight:bold;
}

.update-list {
	margin: auto;
	width: 50%;
	align-items: center;
	text-align: center;
	color: #ffffff;
	background-color: #2c807b;
	border-radius: 20px;
	font-size: 2vmax;
}

.head-part {
	margin-bottom: 8%;
	margin-top: 8%;
	font-size: 2vmax;
}

input::placeholder {
	font-size: 1.5vmax;
	opacity: 0.4;
	color: #000000;
}

.check {
	width: 8%;
	height: 8%;
	margin-left: 35%;
}

.edit-image {
	width: 18%;
	height: 18%;
}

.main-card {
	display: flex;
	justify-content: center;
	width: 100%;
	margin: auto;
}

.border-down {
	border: 1px solid rgb(151, 149, 149);
	width: 80%;
	margin: auto;
	margin-bottom: 2px;
}

::-webkit-scrollbar {
	display: none;
}

.card-modify {
	height: 250px;
	width: 250px;
	background-color: #c7b9b9;
	border-radius: 20px;
	color: rgb(0, 0, 0);
}

.addscroll-modify {
	overflow-y: scroll;
	height: 55%;
	overflow-y: auto;
	width: 80%;
	font-size: larger;
	font-weight: bold;
	margin-top: 1px;
	margin-left: 10%;
	text-decoration: line-through;
}


@media screen and (max-width: 610px) {
	.note-card {
		text-align: justify right;
		display: grid;
		list-style: none;
		background: #d8cccc;
		margin: auto;
		margin-top: 5%;
		margin-bottom: 30px;
		width: 50%;
		height: 400px;
	}

	.card {
		width: 220px;
		height: 220px;
		margin-left: 25px;
		margin-bottom: 20px;
	}

	.set-date {
		font-size: 70%;
	}

	.addscroll {
		font-size: 80%;
	}

	.card-modify {
		width: 220px;
		height: 220px;
		margin-left: 25px;
		margin-bottom: 20px;
	}

	.update-list {
		font-size: 18px;

	}
}
`;

export default GlobalStyle;
