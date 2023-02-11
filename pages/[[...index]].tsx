import Head from "next/head";
import Router from "@/router";

export default function SPA() {
  return (
    <>
      <Head>
        <title>Next with React Router DOM</title>
        <meta name="description" content="Next with React Router DOM" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Router />
    </>
  );
}

export function getStaticProps() {
  return {
    props: {},
  };
}

export const getStaticPaths = async () => ({
  paths: [
    { params: { index: [] } },
    { params: { index: ["about"] } },
  ],
  fallback: false,
});
