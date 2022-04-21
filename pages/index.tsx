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
            <div className="flexContent">
              <Anime
                style={{
                  backgroundColor: getRandomColor(),
                  width: "100px",
                  height: "100%",
                  textAlign: "left",
                }}
                config={{
                  translateY: [0, 20],
                  scale: [0.8, 1],
                  loop: true,
                  duration: 1500,
                }}
              >
                <div>Find</div>
              </Anime>
            </div>
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
          min-height: 100vh;
          // height: 100%;
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
        .flexContent {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        `}
      </style>
    </>
  );
};

export default Home;
