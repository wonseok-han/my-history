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
            <p>test</p>
            <Anime
              style={{
                backgroundColor: getRandomColor(),
                width: "50px",
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
          </Content>
        </div>
      </div>

      <style>
        {`
        .background {
          background-color: #2D333B;
        }
        .container {
          min-height: 100vh;
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
