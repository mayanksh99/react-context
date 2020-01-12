import React, { Component } from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import { PageContext } from "./contexts/PageContent";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
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
