import "./App.css";

import { theme } from "../lib/theme";
import { experience, headline, name, skills } from "../blurbs/info";
// import Header from "./Header";
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
        <CenteredContent
          headerText={name}
          text={headline}
          color="secondary"
          hasRowColor
        />
        <CenteredContent headerText="Skills" text={skills} color="secondary" />
        <CenteredContent
          headerText="Work Experience"
          text={experience}
          color="secondary"
          hasRowColor
        />
      </main>
    </ThemeProvider>
  );
}

export default App;
