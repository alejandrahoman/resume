import "./App.css";

import { theme } from "../lib/theme";
import { experience, headline, name, skills } from "../blurbs/info";
// import Header from "./Header";
import { Container } from "@mui/material";
import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import CenteredContent from "./CenteredContent";

function App() {
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <main>
        <CssBaseline />
        <div className="fullImg"></div>
        {/* <Header /> */}
        <Container maxWidth="sm">
          <CenteredContent text={name} variant="h2" marginBottom="24px" />
          <CenteredContent
            text={headline}
            marginBottom="62px"
            color="secondary"
          />
          <CenteredContent text="Skills" variant="h3" marginBottom="24px" />
          <CenteredContent
            text={skills}
            marginBottom="62px"
            color="secondary"
          />
          <CenteredContent
            text="Work Experience"
            variant="h3"
            marginBottom="24px"
          />
          <CenteredContent
            text={experience}
            marginBottom="24px"
            color="secondary"
          />
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default App;
