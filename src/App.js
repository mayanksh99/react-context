import React, { Component } from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import PageContext from "./contexts/PageContent";
import { ThemeProvider } from "./contexts/ThemeContext";

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <PageContext>
          <Navbar />
          <Form />
        </PageContext>
      </ThemeProvider>
    );
  }
}

export default App;
