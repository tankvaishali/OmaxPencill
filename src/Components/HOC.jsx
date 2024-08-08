import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PageLoader from "./PageLoader";

function HOC(Component) {
  function Newcomponents() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000); // Adjust the duration as needed
      return () => clearTimeout(timer);
    }, []);
    return (
      <>
        {loading && <PageLoader />}
        <Header />
        <Component />
        <Footer />
      </>
    );
  }
  return Newcomponents;
}

export default HOC;
