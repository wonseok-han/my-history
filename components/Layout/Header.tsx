import { useEffect, useState } from "react";

import TypeItAnime from "components/TypeIt";
import { getRandomColor } from "utils/randomColor";

interface HeaderProps {
  color?: string;
}

const Header = ({ color }: HeaderProps) => {
  const [typeIt, setTypeIt] = useState<any>();

  const JSXStyles = `
  .title {
    font-size: 4rem;
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
    typeIt && typeIt.reset().go();
  };

  return (
    <>
      <TypeItAnime
        className="title"
        options={{
          // afterStep: (instance: any) => {
          //   instance.getElement().style.color = getRandomColor();
          // },
          afterComplete: (instance: any) => {
            instance.destroy();
          },
          cursor: true,
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
