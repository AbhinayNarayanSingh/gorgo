import Head from "next/head";

const Header = ({ title }) => {
  return (
    <>
      <Head>
        <title>{`${title && title + " " + "-"} Gorgo`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </>
  );
};

export default Header;
