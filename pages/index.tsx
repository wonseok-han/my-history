import Content from "components/Layout/Content";
import { HISTORY_DATA } from "historyData";
import Header from "components/Layout/Header";
import { anime } from "components/Anime";
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
              style={{
                width: "100%",
                height: "100%",
                textAlign: "left",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2em",
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
                  left: "49.5%",
                  width: "10px",
                  height: "100px",
                  backgroundColor: getRandomColor(),
                  position: "fixed",
                  borderRadius: "10px",
                }}
              />

              <div>
                {HISTORY_DATA.map((item, index) => {
                  const guid = makeGuid();
                  const x = [-110, 15];
                  const tansX = x[index % 2];

                  return (
                    <div key={item.key} className="history-items">
                      <Anime
                        config={{
                          targets: `#${guid}`,
                          opacity: 1,
                          easing: "easeInOutQuad",
                          delay: () => index * 300,
                        }}
                      >
                        <div
                          id={guid}
                          style={{
                            visibility: index % 2 === 0 ? "visible" : "hidden",
                            opacity: 0,
                            height: "100%",
                            border: "2px solid black",
                            marginBottom: "4rem",
                            paddingLeft: "1rem",
                            borderRadius: "10px",
                          }}
                        >
                          <p>{item.name}</p>
                          <p>{item.term}</p>
                          <p>{item.role}</p>
                          <p>{item.skill}</p>
                        </div>
                      </Anime>
                    </div>
                  );
                })}
              </div>

              <div>
                {HISTORY_DATA.map((item, index) => {
                  const guid = makeGuid();
                  const x = [-110, 15];
                  const tansX = x[index % 2];

                  return (
                    <div key={item.key} className="history-items">
                      <Anime
                        config={{
                          targets: `#${guid}`,
                          opacity: 1,
                          easing: "easeInOutQuad",
                          delay: () => index * 300,
                        }}
                      >
                        <div
                          id={guid}
                          style={{
                            visibility: index % 2 !== 0 ? "visible" : "hidden",
                            opacity: 0,
                            height: "100%",
                            border: "2px solid black",
                            marginBottom: "4rem",
                            paddingLeft: "1rem",
                            borderRadius: "10px",
                          }}
                        >
                          <p>{item.name}</p>
                          <p>{item.term}</p>
                          <p>{item.role}</p>
                          <p>{item.skill}</p>
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
        .history-items {
          // width: 50%;
        }
        `}
      </style>
    </>
  );
};

export default Home;
