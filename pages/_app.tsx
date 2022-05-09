import "styles/globals.css";

import type { AppProps } from "next/app";
import Seo from "components/Seo";
import { useMediaQuery } from "react-responsive";

import { getRandomColor } from "utils/randomColor";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const [themeColor, setThemeColor] = useState("");

  useEffect(() => {
    setThemeColor(getRandomColor());
  }, []);

  const handleChangeColor = () => {
    setThemeColor(getRandomColor());
  };

  return (
    <>
      <Seo />
      <div className="container mx-auto card-container">
        <Component
          {...pageProps}
          isMobile={isMobile}
          themeColor={themeColor}
          onChangeColor={handleChangeColor}
        />
      </div>

      <style jsx global>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
          overflow: hidden;
          background-color: #22272e;
        }
      `}</style>
      <style jsx>{`
        .card-container {
          border: 1px solid #444c56;
          border-radius: 10px;
          background-color: #22272e;
        }
      `}</style>
    </>
  );
}

export default MyApp;
