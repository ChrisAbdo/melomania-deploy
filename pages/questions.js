import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Box,
} from "@chakra-ui/react";
import styles from "../styles/questions.module.css";
import Navbar from "../components/HomeNavbar";

function questions() {
  return (
    <div>
      <Navbar />
      <div className={styles.headerText}>
        {/* center div */}
        <div className="flex items-center justify-center">
          <Text className="mt-1 " fontSize="2xl">
            Frequently Asked Questions (FAQ)
          </Text>
        </div>
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Why is my post not showing up?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              I am aware of an issue with the contract and not being able to
              immediately update the page with your post. This is something I am
              aiming to fix ASAP. For now, please upload 2-3 posts , I have
              found that this forces the contract to update.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Where do my tips go?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              As noted in the developers section, the tip address is directly
              correlated with the uploader address. Melomania does not keep any
              of the tips/likes being transferred.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Why do I have to pay a gas fee to upload?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Gasless transactions are not yet enabled. I am waiting to see if
              this platform gains traction before fully yoloing a gasless
              transactions feature.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Can I view the source code of this project?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              yes! you can view the source code of this project in the stack
              section on the home screen.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  What are the platform goals?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Melomania seeks to tighten the bond between artist and listener.
              With Melomania, everyday listeners will have the opportunity to
              fund upcoming artists albums and give them a start in the
              expensive world of music.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default questions;
