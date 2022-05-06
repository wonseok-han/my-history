import { useEffect, useState } from "react";

import TypeItAnime from "components/TypeIt";

interface HeaderProps {
  color?: string;
  isMobile?: boolean;
  onChangeColor?: () => void;
}

const Header = ({ color, isMobile, onChangeColor }: HeaderProps) => {
  const [typeIt, setTypeIt] = useState<any>();
  const [fontSize, setFontSize] = useState("");

  useEffect(() => {
    setFontSize(!isMobile ? "4rem" : "3rem");
  }, [isMobile]);

  const JSXStyles = `
  .title {
    font-size: ${fontSize};
    font-weight: 900;
    font-family: "Arial" fantasy;
    color: ${color};
  }
`;

  const handleTypeItInstance = (typeit: any) => {
    color && typeit && setTypeIt(typeit);
  };

  useEffect(() => {
    typeIt &&
      typeIt
        .options({ speed: 100 })
        .type("Hi, I'm wonseok-han")
        .pause(300)
        .options({ speed: 200 })
        .delete("Hi, I'm wonseok-han".length)
        .pause(100)
        .options({ speed: 100 })
        .type("This is My History")
        .go();
  }, [typeIt]);

  const handleClick = () => {
    onChangeColor?.();
    typeIt && typeIt.reset().go();
  };

  return (
    <>
      <TypeItAnime
        className="title"
        options={{
          afterComplete: (instance: any) => {
            instance.destroy();
          },
          cursor: false,
          waitUntilVisible: true,
        }}
        JSXStyles={JSXStyles}
        handleTypeItInstance={handleTypeItInstance}
        onClick={handleClick}
      />
    </>
  );
};

export default Header;
