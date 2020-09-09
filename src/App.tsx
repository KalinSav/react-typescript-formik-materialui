import * as React from "react";
import "./styles.css";
import Navbar from "./Navbar";
import Main from "./Main";
import About from "./About";

export default function App(): JSX.Element {
  const [showAboutPage, setShowAboutPage] = React.useState<boolean>(false);
  return (
    <div className="app">
      <Navbar
        showAboutPage={showAboutPage}
        setShowAboutPage={setShowAboutPage}
      />
      {showAboutPage ? (
        <About
          showAboutPage={showAboutPage}
          setShowAboutPage={setShowAboutPage}
        />
      ) : (
        <Main />
      )}
    </div>
  );
}
