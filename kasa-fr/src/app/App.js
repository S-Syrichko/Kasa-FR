import React from "react";
import styles from "./App.module.scss";
import { HashRouter } from "react-router-dom";
import Footer from "../components/layout/Footer/Footer.js";
import Header from "../components/layout/Header/Header.js";
import AppRoutes from "./routes.js";

function App() {
  return (
    <div className={styles.root}>
      <HashRouter>
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
