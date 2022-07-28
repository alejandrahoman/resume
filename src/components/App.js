import "./App.css";

import { theme } from "../lib/theme";
import {
  experience,
  headline,
  name,
  skills,
  education,
  contact,
  intro,
} from "../blurbs/info";
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
        {/* <CenteredContent headerText={intro} /> */}
        <CenteredContent
          headerText={intro}
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
        <CenteredContent
          headerText="Education"
          text={education}
          color="secondary"
        ></CenteredContent>
        <CenteredContent
          headerText="Contact"
          text={contact}
          color="secondary"
          hasRowColor
        ></CenteredContent>
      </main>
    </ThemeProvider>
  );
}

export default App;
