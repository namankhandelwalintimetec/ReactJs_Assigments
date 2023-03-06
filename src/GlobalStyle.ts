import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

.header {
  text-align: center;
  margin-top: 15%;
}
.header h1 {
  text-align: center;
  font-size: 80px;
}

@media (max-width: 768px) {
	  .header h1 {
    font-size: 50px;
  }
}

a {
    text-decoration: none;
  }
`;
