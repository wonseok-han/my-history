import TypeIt from "typeit";
import styles from "styles/Home.module.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const title = new (TypeIt as any)("#myElement", {
      strings: ["my-typeit-test"],
    });

    return () => {
      title.go();
    };
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 id="myElement"></h1>
      </main>
    </div>
  );
};

export default Home;
