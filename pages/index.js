import Head from "next/head";
import Login from "../components/login/Login";

export default function Home() {
  return (
    <>
      <Head>
        <title>Enfermería</title>
        <meta name="description" content="Asistencia de enfermería" />
        <script src="https://kit.fontawesome.com/0d9050c441.js" crossorigin="anonymous"></script>
      </Head>

      <Login />
    </>
  );
}
