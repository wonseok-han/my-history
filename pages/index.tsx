import Content from "components/Layout/Content";
import Header from "components/Layout/Header";
import dynamic from "next/dynamic";
import { getRandomColor } from "utils/randomColor";

const Anime = dynamic(() => import("components/Anime"), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <div className="background">
        <div className="container">
          <Header />
          <Content>
            <Anime
              style={{
                height: "1000px",
                textAlign: "left",
                overflow: "auto",
              }}
              config={{
                targets: "#vertical-bar",
                height: "100%",
                easing: "easeInOutQuad",
                duration: 3000,
              }}
            >
              <div
                id="vertical-bar"
                style={{
                  width: "10px",
                  height: "100px",
                  backgroundColor: getRandomColor(),
                }}
              ></div>
            </Anime>
          </Content>
        </div>
      </div>

      <style>
        {`
        .background {
          background-color: #2D333B;
          height: 100%;
        }
        .container {
          // min-height: 100vh;
          height: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 4rem;
          margin-right: 4rem;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          background-color: white;
        }
        `}
      </style>
    </>
  );
};

export default Home;
