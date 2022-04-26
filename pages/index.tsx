import Content from "components/Layout/Content";
import { HISTORY_DATA } from "historyData";
import Header from "components/Layout/Header";

import dynamic from "next/dynamic";
import { getRandomColor } from "utils/randomColor";
import { makeGuid } from "utils/functions";

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
              className="anime-container"
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
                  left: "49.5%",
                  width: "10px",
                  height: "0px",
                  backgroundColor: getRandomColor(),
                  position: "fixed",
                  borderRadius: "10px",
                }}
              />

              <div>
                {HISTORY_DATA.map((item, index) => {
                  const guid = makeGuid();

                  return (
                    <>
                      <Anime
                        config={{
                          targets: `#${guid}`,
                          opacity: 1,
                          easing: "easeInOutQuad",
                          delay: () => index * 500,
                        }}
                      >
                        <div
                          id={guid}
                          className="history-box"
                          style={{
                            visibility: index % 2 === 0 ? "visible" : "hidden",
                          }}
                        >
                          <p>{item.name}</p>
                          <p>{item.term}</p>
                          <p>{item.role}</p>
                          <p>{item.skill}</p>
                        </div>
                      </Anime>
                    </>
                  );
                })}
              </div>

              <div>
                {HISTORY_DATA.map((item, index) => {
                  const guid = makeGuid();

                  return (
                    <>
                      <Anime
                        config={{
                          targets: `#${guid}`,
                          opacity: 1,
                          easing: "easeInOutQuad",
                          delay: () => index * 500,
                        }}
                      >
                        <div
                          id={guid}
                          className="history-box"
                          style={{
                            visibility: index % 2 !== 0 ? "visible" : "hidden",
                          }}
                        >
                          <p>{item.name}</p>
                          <p>{item.term}</p>
                          <p>{item.role}</p>
                          <p>{item.skill}</p>
                        </div>
                      </Anime>
                    </>
                  );
                })}
              </div>
            </Anime>
          </Content>
        </div>
      </div>

      <style>
        {`
        .background {
          background-color: #2D333B;
          height: 100%;
          overflow: auto;
        }
        .container {
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
        .anime-container {
          width: 100%;
          height: 100%;
          text-align: left;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2em;
        }
        .history-box {
          opacity: 0;
          height: 100%;
          border: 2px solid black;
          margin-bottom: 4rem;
          padding-left: 1rem;
          border-radius: 10px;
        }
        `}
      </style>
    </>
  );
};

export default Home;
