import React from "react";
import Head from "next/head";
import { MountMicroFrontend } from "../components/MountMicroFrontend";
import Link from "next/link";
import { useUsername } from "user-provider";

const Reception = () => {
  const currentUsername = useUsername();
  return (
    <>
      <Head>
        <title>Chat</title>
      </Head>
      <h1>Host page</h1>
      <Link shallow href="/">
        home
      </Link>
      <MountMicroFrontend
        url="http://localhost:8888/remoteEntry.js"
        name="chat"
      />
    </>
  );
};

export default Reception;