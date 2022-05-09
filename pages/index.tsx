import Content from "components/Layout/Content";
import { HISTORY_DATA } from "historyData";

import dynamic from "next/dynamic";
import { getRandomColor } from "utils/randomColor";
import { makeGuid } from "utils/functions";
import Header from "components/Layout/Header";

const Anime = dynamic(() => import("components/Anime"), {
  ssr: false,
});
interface HomeProps {
  isMobile?: boolean;
  themeColor?: string;
  onChangeColor?: () => void;
}

const Home = ({ isMobile, themeColor, onChangeColor }: HomeProps) => {
  return (
    <div className="page-container">
      <div
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        <Header
          color={themeColor}
          isMobile={isMobile}
          onChangeColor={onChangeColor}
        />
      </div>
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
              height: "0%",
              backgroundColor: themeColor,
              position: "fixed",
              borderRadius: "10px",
            }}
          />
          <div
            className="history-area"
            style={{
              gridTemplateColumns: `${isMobile ? "1fr" : "1fr 1fr"}`,
            }}
          >
            {[...HISTORY_DATA].reverse().map((item, index) => {
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
                        marginTop: `${
                          !isMobile
                            ? index % 2 === 0
                              ? "0"
                              : "30%"
                            : index !== 0
                            ? "10%"
                            : "0"
                        }`,
                      }}
                    >
                      <div className="history-box-divider">
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: "1.5rem",
                            color: "rgba(205, 217, 229, 0.7)",
                          }}
                        >
                          {item.name}
                        </p>
                      </div>
                      <div className="history-box-divider">
                        <p>{item.term}</p>
                        <p>{item.role}</p>
                        <div style={{ display: "flex" }}>
                          {item.skills.split(",").map((skill) => (
                            <span
                              key={skill}
                              className="badge"
                              style={{
                                backgroundColor: getRandomColor("badge"),
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                        <p></p>
                      </div>
                    </div>
                  </Anime>
                </div>
              );
            })}
          </div>
        </Anime>
      </Content>

      <style jsx>{`
        .page-container {
          display: grid;
          height: 100%;
          grid-template-rows: auto auto;
          background-color: #22272e;
        }
        .anime-container {
          width: 100%;
          height: 100%;
          text-align: left;
          overflow: auto;
        }
        .history-area {
          height: 100%;
          display: grid;
        }
        .history-box {
          cursor: pointer;
          opacity: 0;
          width: 99%;
          height: 100%;
          border: 2px solid;
          box-shadow: 5px 5px 8px ${themeColor};
          background-color: #2d333b;
          transform: scale(0.9);
          border-color: ${themeColor};
          border-radius: 5px;
        }
        .history-box:hover {
          transform: scale(1);
          transition: 0.5s;
          overflow: hidden;
        }
        .history-box-divider {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
          border: 1px solid;
          width: 100%;
          padding-left: 1rem;
          padding-top: 1rem;
          padding-bottom: 1rem;
          border-color: ${themeColor};
          color: #768390;
        }
        .history-box-divider > p {
          font-weight: bold;
        }
        .badge {
          padding: 6px;
          border-radius: 10px;
          margin-right: 2px;
          font-weight: bold;
          color: black;
        }
      `}</style>
    </div>
  );
};

export default Home;
