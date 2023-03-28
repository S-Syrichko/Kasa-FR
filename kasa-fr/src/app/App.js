import React from "react";
import styles from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer/Footer.js";
import Header from "../components/Header/Header.js";
import AppRoutes from "./routes.js";

function App() {
  return (
    <div className={styles.root}>
      <BrowserRouter basename="/Kasa-FR">
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
