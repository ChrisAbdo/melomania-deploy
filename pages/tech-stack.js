import React from "react";
import Image from "next/image";
import { SiSolidity } from "react-icons/si";
import { FaMap } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";
import { BsCalendarEventFill } from "react-icons/bs";
import { BiCodeCurly } from "react-icons/bi";
import { AiOutlineFunction } from "react-icons/ai";
import { HiCode } from "react-icons/hi";
import Navbar from "../components/HomeNavbar";
import {
  Text,
  UnorderedList,
  OrderedList,
  Heading,
  ListItem,
  Code,
} from "@chakra-ui/react";
import styles from "../styles/techstack.module.css";
import { CopyBlock, a11yDark } from "react-code-blocks";

function techStack() {
  return (
    <div className={styles.headerText}>
      <Navbar />
      <div className="flex">
        <div class=" flex flex-col justify-between h-screen  border-r">
          <div class="fixed h-screen  py-6">
            <Text fontSize="2xl" fontWeight="extrabold">
              Contents
            </Text>

            <nav class="flex flex-col mt-6 space-y-1">
              <a class="cursor-pointer flex items-center px-4 py-2 hover:bg-gray-200  rounded-lg">
                <SiSolidity />

                <span
                  onClick={() => {
                    if (document.getElementById("web3-stuff")) {
                      document
                        .getElementById("web3-stuff")
                        .classList.remove(
                          "bg-indigo-500",
                          "duration-1",
                          "transition",
                          "ease-in-out",
                          "delay-150"
                        );
                    }
                    if (document.getElementById("testing")) {
                      document
                        .getElementById("testing")
                        .classList.remove(
                          "bg-indigo-500",
                          "duration-1",
                          "transition",
                          "ease-in-out",
                          "delay-150"
                        );
                    }
                    document
                      .getElementById("front-end")
                      .classList.add(
                        "bg-indigo-500",
                        "duration-1",
                        "transition",
                        "ease-in-out",
                        "delay-150"
                      );

                    document.getElementById;
                  }}
                  class="ml-3 text-sm font-medium focus:outline-none "
                >
                  {" "}
                  front end{" "}
                </span>
              </a>
              <a>
                <summary class="flex items-center px-4 py-2  rounded-lg cursor-pointer hover:bg-gray-200 hover:text-gray-700">
                  <FaMap />

                  <span
                    onClick={() => {
                      //  id=introduction add to class hover:bg-indigo-500 duration-300 transition ease-in-out delay-150
                      // remove the highlight from the other sections
                      if (document.getElementById("front-end")) {
                        document
                          .getElementById("front-end")
                          .classList.remove(
                            "bg-indigo-500",
                            "duration-1",
                            "transition",
                            "ease-in-out",
                            "delay-150"
                          );
                      }
                      if (document.getElementById("testing")) {
                        document
                          .getElementById("testing")
                          .classList.remove(
                            "bg-indigo-500",
                            "duration-1",
                            "transition",
                            "ease-in-out",
                            "delay-150"
                          );
                      }
                      document
                        .getElementById("web3-stuff")
                        .classList.add(
                          "bg-indigo-500",
                          "duration-1",
                          "transition",
                          "ease-in-out",
                          "delay-150"
                        );
                    }}
                    class="ml-3 text-sm font-medium"
                  >
                    {" "}
                    web3 stuff
                  </span>
                </summary>
              </a>

              <nav class="mt-1.5 ml-8 flex flex-col"></nav>

              <a class="cursor-pointer flex items-center px-4 py-2  rounded-lg hover:bg-gray-100 hover:text-gray-700">
                <MdConstruction />

                <span
                  onClick={() => {
                    //  id=introduction add to class hover:bg-indigo-500 duration-300 transition ease-in-out delay-150
                    // remove the highlight from the other sections
                    if (document.getElementById("front-end")) {
                      document
                        .getElementById("front-end")
                        .classList.remove(
                          "bg-indigo-500",
                          "duration-1",
                          "transition",
                          "ease-in-out",
                          "delay-150"
                        );
                    }
                    if (document.getElementById("web3-stuff")) {
                      document
                        .getElementById("web3-stuff")
                        .classList.remove(
                          "bg-indigo-500",
                          "duration-1",
                          "transition",
                          "ease-in-out",
                          "delay-150"
                        );
                    }
                    document
                      .getElementById("testing")
                      .classList.add(
                        "bg-indigo-500",
                        "duration-1",
                        "transition",
                        "ease-in-out",
                        "delay-150"
                      );
                  }}
                  class="ml-3 text-sm font-medium"
                >
                  testing{" "}
                </span>
              </a>
            </nav>
          </div>

          <div class="text-transparent  inset-x-0 bottom-0 border-t border-gray-100">
            <a href="" class="flex items-center p-4 cursor-default  shrink-0">
              <div class="ml-1.5">
                <p class="text-xs">
                  <span> ~~~~~~~~~~~~~~~~~ </span>
                </p>
              </div>
            </a>
          </div>
        </div>
        {/* CODE SNIPPETS ARE HERE */}
        <div class="flex-1 flex flex-col">
          {/* do not allow Code shadow to extend past last character */}
          <div class="flex-1 overflow-y-auto">
            <Text className="ml-2 border-b border-gray-500" fontSize="4xl">
              tech stack used
            </Text>
            <UnorderedList>
              <Heading className="ml-1 mb-1" as="h2" size="xl" id="front-end">
                front end
              </Heading>
              <ListItem className="ml-4">
                <Text className="mt-1 " fontSize="2xl">
                  built on Next.js, melomania utilizes the following libraries:
                  TailwindCSS, ChakraUI, DaisyUI, and TW-elements
                </Text>
                <Image
                  src="/nextjs.svg"
                  width="100"
                  height="75"
                  className="mr-2"
                />
                <Image
                  src="/daisy.svg"
                  width="200"
                  height="100"
                  className=" mt-2"
                />
                <Image
                  src="/tailwind.svg"
                  width="150"
                  height="100"
                  className=" mt-2"
                />
                <Image src="/chakra.svg" width="100" height="75" className="" />
              </ListItem>
              <Heading className="ml-1 mb-1" as="h2" size="xl" id="web3-stuff">
                smart contract development / web3 providers
              </Heading>
              <ListItem className="ml-4">
                <Text className="mt-1 " fontSize="2xl">
                  melomania utilizes the following smart contract development
                  environments and web3 providers: Truffle, Ganache, Ethers.js,
                  RainbowKitProvider, and various testnet faucets
                </Text>
                <Image
                  src="/truffle.svg"
                  width="100"
                  height="75"
                  className=""
                />
                <Image
                  src="/ganache.svg"
                  width="100"
                  height="75"
                  className=""
                />
                <Image src="/ethers.svg" width="100" height="75" className="" />
              </ListItem>
              <Heading className="ml-1 mb-1" as="h2" size="xl" id="testing">
                testing
              </Heading>
              <ListItem className="ml-4">
                <Text className="mt-1 " fontSize="2xl">
                  testing was done using the following tools: Mocha and Chai.
                  these files were compiled using Truffle
                </Text>
                <Image src="/mocha.svg" width="100" height="75" className="" />
                <Image src="/chai.svg" width="100" height="75" className="" />
              </ListItem>
            </UnorderedList>
          </div>
        </div>
      </div>
    </div>
  );
}

export default techStack;
