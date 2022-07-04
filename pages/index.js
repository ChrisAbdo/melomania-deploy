import Head from "next/head";
import Navbar from "../components/HomeNavbar";
import styles from "../styles/index.module.css";
import { GiMusicalNotes } from "react-icons/gi";
import { BiStore } from "react-icons/bi";
import { SiEthereum, SiSolidity } from "react-icons/si";
import { FiHelpCircle } from "react-icons/fi";
import { Divider, Link } from "@chakra-ui/react";
import { BsStack } from "react-icons/bs";
import { IoStorefront } from "react-icons/io";

function Home() {
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

      {/* <main>
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
      </main> */}
      <Navbar />
      <div className={styles.headerText}>
        <section
          class="h-screen
      flex flex-col items-center justify-center"
        >
          <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div class="max-w-lg mx-auto text-center">
              {/* <h2 class="text-3xl font-bold sm:text-4xl">melomania🎶</h2> */}
              <h1 class="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                melomania
              </h1>

              <p class="mt-4 ">
                decentralized music marketplace and crowdsourcing platform
              </p>
            </div>

            <>
              <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
                <div class="cursor-default block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-gray-500/10 hover:border-gray-500/10">
                  <GiMusicalNotes className="h-7 w-7" />

                  <h3 class="mt-4  text-xl font-bold border-b border-gray-500 ">
                    explore new music
                  </h3>

                  <p class="mt-1 text-sm  ">
                    with no genre filter, melomania encourages you to explore
                    new music through community favorites. you never know, you
                    might find something you like ;)
                  </p>
                </div>

                <div class="cursor-default block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-gray-500/10 hover:border-gray-500/10">
                  <BiStore className="h-7 w-7" />

                  <h3 class="mt-4  text-xl font-bold border-b border-gray-500 ">
                    marketplace
                  </h3>

                  <p class="mt-1 text-sm ">
                    to view and like/tip songs, head over to the marketplace.
                    this is where you'll be able to upload your own songs as
                    well
                  </p>
                </div>

                <div class="cursor-default block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-gray-500/10 hover:border-gray-500/10">
                  <SiEthereum className="h-7 w-7" />

                  <h3 class="mt-4  text-xl font-bold border-b border-gray-500 ">
                    crowdsourcing
                  </h3>

                  <p class="mt-1 text-sm ">
                    we all know its hard being an artist. but the community can
                    help. post a couple of your songs and potentially get the
                    funding for your next hit album.
                  </p>
                </div>
              </div>
              <Divider className="mt-8" />
              <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
                <div
                  class="cursor-pointer block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-gray-500/10 hover:border-gray-500/10"
                  // on click, redirect to questions page
                  onClick={() => {
                    window.location.href = "/questions";
                  }}
                >
                  <FiHelpCircle className="h-7 w-7" />

                  <h3 class="mt-4  text-xl font-bold border-b border-gray-500 ">
                    questions?
                  </h3>

                  <p class="mt-1 text-sm ">
                    view this page for any questions you may have questions
                    about melomania. contact me through this page!
                  </p>
                </div>

                <div
                  class="cursor-pointer block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-gray-500/10 hover:border-gray-500/10"
                  onClick={() => {
                    window.location.href = "/smart-contract";
                  }}
                >
                  <SiSolidity className="h-7 w-7" />

                  <h3 class="mt-4  text-xl font-bold border-b border-gray-500 ">
                    developers / smart contract
                  </h3>

                  <p class="mt-1 text-sm ">
                    for any devs out there who want to view the smart contract,
                    heres the place :)
                  </p>
                </div>

                <div
                  onClick={() => {
                    window.location.href = "/tech-stack";
                  }}
                  class="cursor-pointer block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-gray-500/10 hover:border-gray-500/10"
                >
                  <BsStack className="h-7 w-7" />

                  <h3 class="mt-4  text-xl font-bold border-b border-gray-500 ">
                    view the stack
                  </h3>

                  <p class="mt-1 text-sm ">
                    find out how melomania was created and how everything
                    connects
                  </p>
                </div>
              </div>
            </>
            <div class="mt-12 text-center">
              <a
                class="inline-flex items-center px-8 py-3 mt-8   border border-pink-600 rounded hover:bg-transparent active:text-pink-500 focus:outline-none focus:ring"
                href="/get-started"
              >
                <span class="text-sm font-medium"> Get Started </span>

                <svg
                  class="w-5 h-5 ml-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
