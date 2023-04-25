import Head from "next/head";
import Main from "../components/Main";
import Map from "../components/Map";
import Karaoke from "../components/Karaoke";
import Photo from "../components/Photo";

export default function Home() {
  return (
    <>
      <Head>
        <title>JebtzParty 🎉</title>
        <meta name="description" content="Birthday party information website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Main />
        <Map />
        <Karaoke />
        <Photo />
      </main>
    </>
  );
}
