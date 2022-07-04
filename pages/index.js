import Head from "next/head";
import Navbar from "../components/HomeNavbar";
import styles from "../styles/index.module.css";
import { GiMusicalNotes } from "react-icons/gi";
import { BiStore } from "react-icons/bi";
import { SiEthereum } from "react-icons/si";

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
              <h2 class="text-3xl font-bold sm:text-4xl">melomania🎶</h2>

              <p class="mt-4 ">
                decentralized music marketplace and crowdsourcing platform
              </p>
            </div>

            <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
              <div
                class="cursor-pointer block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-gray-500/10 hover:border-gray-500/10"
                href="/services/digital-campaigns"
              >
                <GiMusicalNotes className="h-7 w-7" />

                <h3 class="mt-4  text-xl font-bold border-b border-gray-500 ">
                  explore new music
                </h3>

                <p class="mt-1 text-sm  ">
                  with no genre filter, melomania encourages you to explore new
                  music through community favorites. you never know, you might
                  find something you like ;)
                </p>
              </div>

              <div
                class="cursor-pointer block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-gray-500/10 hover:border-gray-500/10"
                href="/services/digital-campaigns"
              >
                <BiStore className="h-7 w-7" />

                <h3 class="mt-4  text-xl font-bold border-b border-gray-500 ">
                  marketplace
                </h3>

                <p class="mt-1 text-sm ">
                  to view and like/tip songs, head over to the marketplace. this
                  is where you'll be able to upload your own songs as well
                </p>
              </div>

              <div
                class="cursor-pointer block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-gray-500/10 hover:border-gray-500/10"
                href="/services/digital-campaigns"
              >
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

              <a
                class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-gray-500/10 hover:border-gray-500/10"
                href="/services/digital-campaigns"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-10 h-10 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h3 class="mt-4 text-xl font-bold ">Digital campaigns</h3>

                <p class="mt-1 text-sm ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                  quo possimus adipisci distinctio alias voluptatum blanditiis
                  laudantium.
                </p>
              </a>

              <a
                class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-gray-500/10 hover:border-gray-500/10"
                href="/services/digital-campaigns"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-10 h-10 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h3 class="mt-4 text-xl font-bold ">Digital campaigns</h3>

                <p class="mt-1 text-sm ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                  quo possimus adipisci distinctio alias voluptatum blanditiis
                  laudantium.
                </p>
              </a>

              <a
                class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-gray-500/10 hover:border-gray-500/10"
                href="/services/digital-campaigns"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-10 h-10 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h3 class="mt-4 text-xl font-bold ">Digital campaigns</h3>

                <p class="mt-1 text-sm ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                  quo possimus adipisci distinctio alias voluptatum blanditiis
                  laudantium.
                </p>
              </a>
            </div>

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
