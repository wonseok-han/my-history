import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>my-history</main>
    </div>
  );
};

export default Home;
