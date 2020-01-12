import React, { Component } from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import PageContext from "./contexts/PageContent";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <LanguageProvider>
          <PageContext>
            <Navbar />
            <Form />
          </PageContext>
        </LanguageProvider>
      </ThemeProvider>
    );
  }
}

export default App;
