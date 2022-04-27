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
  const verticalColor = getRandomColor();

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
                height: "89%",
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
                  backgroundColor: verticalColor,
                  position: "fixed",
                  borderRadius: "10px",
                }}
              />
              <Anime
                config={{
                  targets: "#vertical-arrow",
                  top: "98.5%",
                  easing: "easeInOutQuad",
                  duration: 3000,
                }}
                style={{
                  position: "fixed",
                  zIndex: 999,
                }}
              >
                <div
                  id="vertical-arrow"
                  style={{
                    top: "9%",
                    left: "49.5%",
                    height: "0px",
                    position: "fixed",
                    borderTop: `20px solid ${verticalColor}`,
                    borderLeft: "5px solid transparent",
                    borderRight: "5px solid transparent",
                    zIndex: 999,
                  }}
                />
              </Anime>

              <div>
                {HISTORY_DATA.map((item, index) => {
                  const guid = makeGuid();

                  return (
                    <div key={index}>
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
                          <div className="history-box-divider">
                            <p
                              style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                            >
                              {item.name}
                            </p>
                          </div>
                          <div className="history-box-divider">
                            <p>{item.term}</p>
                            <p>{item.role}</p>
                            <p>{item.skill}</p>
                          </div>
                        </div>
                      </Anime>
                    </div>
                  );
                })}
              </div>

              <div>
                {HISTORY_DATA.map((item, index) => {
                  const guid = makeGuid();

                  return (
                    <div key={index}>
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
                          <div className="history-box-divider">
                            <p
                              style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                            >
                              {item.name}
                            </p>
                          </div>
                          <div className="history-box-divider">
                            <p>{item.term}</p>
                            <p>{item.role}</p>
                            <p>{item.skill}</p>
                          </div>
                        </div>
                      </Anime>
                    </div>
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
          background-color: #E6E6E6;
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
          cursor: pointer;
          opacity: 0;
          width: 99%;
          height: 100%;
          border: 2px solid black;
          margin-bottom: 3rem;
          box-shadow: 5px 5px 10px black;
          background-color: white;
          transform: scale(0.9);
        }
        .history-box:hover {
          transform: scale(1);
          transition: .5s;
          overflow: hidden;
        }
        .history-box-divider {
          border: 1px solid black;
          width: 100%;
          padding-left: 1rem;
        }
        `}
      </style>
    </>
  );
};

export default Home;
