import TypeItAnime from "components/TypeIt";
import { getRandomColor } from "utils/randomColor";

const JSXStyles = `
  .title {
    font-size: 5rem;
    font-weight: bold;
  }
`;

const Header = () => {
  return (
    <>
      <TypeItAnime
        className="title"
        strings={["My TypeIt Test"]}
        options={{
          afterStep: function (instance: any) {
            instance.getElement().style.color = getRandomColor();
          },
        }}
        JSXStyles={JSXStyles}
      />
    </>
  );
};

export default Header;
