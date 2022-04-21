import TypeItAnime from "components/TypeIt";
import { getRandomColor } from "utils/randomColor";

const JSXStyles = `
  .title {
    font-size: 3rem;
    font-weight: bold;
  }
`;

const Header = () => {
  const handleTypeItInstance = (typeit: any) => {
    typeit
      .options({ speed: 100 })
      .type("Hi, I'm wonseok-han")
      .pause(300)
      .options({ speed: 200 })
      .delete("Hi, I'm wonseok-han".length)
      .pause(100)
      .options({ speed: 100 })
      .type("This is My History")
      .go();
  };

  return (
    <>
      <TypeItAnime
        className="title"
        options={{
          afterStep: function (instance: any) {
            instance.getElement().style.color = getRandomColor();
          },
          cursor: true,
        }}
        JSXStyles={JSXStyles}
        handleTypeItInstance={handleTypeItInstance}
      />
    </>
  );
};

export default Header;
