import Head from "next/head";

export function Layout(props) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>{props.children}</>
    </div>
  );
}
