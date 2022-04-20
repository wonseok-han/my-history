import TypeIt from "typeit";
import { useEffect } from "react";

const titleColors = [
  "#ff0000",
  "#ffa500",
  "#ffff00",
  "#008000",
  "#0000ff",
  "#4b0082",
  "#ee82ee",
];

const getRandomColor = () =>
  titleColors[Math.floor(Math.random() * titleColors.length)];

const Header = () => {
  useEffect(() => {
    const title = new (TypeIt as any)("#header-title", {
      strings: ["My TypeIt Test"],
      afterStep: function (instance: any) {
        instance.getElement().style.color = getRandomColor();
      },
    });

    return () => {
      title.go();
    };
  }, []);

  return (
    <>
      <span className="title" id="header-title"></span>

      <style jsx>
        {`
          .title {
            font-size: 5rem;
            font-weight: bold;
          }
        `}
      </style>
    </>
  );
};

export default Header;
