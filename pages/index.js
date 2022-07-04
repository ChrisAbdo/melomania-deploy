import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/HomeNavbar";
import { Text, Button } from "@chakra-ui/react";
import { Component, useState } from "react";
import styles from "../styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Web3 from "web3";
import Melomania from "../build/contracts/Melomania.json";
import { ethers } from "ethers";

function Home() {
  const [walletAddress, setWalletAddress] = useState("");

  return (
    <div>
      <Head>
        <title>melomania</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comforter&family=Poppins:wght@300&family=Supermercado+One&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <div className={styles.welcomeText}>
          <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center h-screen">
              <Text
                fontSize="6xl"
                fontWeight="extrabold"
                className={styles.welcomeText}
              >
                welcome to melomania
              </Text>
              <Text
                fontSize="3xl"
                fontWeight="extrabold"
                className={styles.welcomeText}
              >
                a multi-chain music marketplace and crowdsourcing platform
              </Text>
              <Text
                fontSize="3xl"
                fontWeight="extrabold"
                className={styles.welcomeText}
              >
                get started by connecting your wallet{" "}
              </Text>
              <div className="mt-6 ">
                <div className="flex flex-col items-center justify-center mb-6">
                  {/* if user is logged in, make button id='revealMe' not hidden*/}

                  <ConnectButton />

                  <div id="connectedButton" className=" mt-6 mb-6">
                    <Link href="/marketplace">
                      <Button>Marketplace</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
