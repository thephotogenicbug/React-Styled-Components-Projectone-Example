import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import { Container } from "./Components/Styles/Container.styled";
import GlobalStyles from "./Components/Styles/Global";

//  to access theme.color.header
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#00333",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <h1>Hello World</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
