import Header from "components/Layout/Header";

const Home = () => {
  return (
    <>
      <div className="background">
        <div className="container">
          <Header />
          <p>test</p>
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
