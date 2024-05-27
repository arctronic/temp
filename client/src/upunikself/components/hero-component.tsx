import React from "react";
import {
  Stack,
  Button,
  Center,
  Text,
  Box,
  Card,
  CardBody,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { IoIosCheckboxOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { AboutUsComponent } from "./about-us.component";

interface HeroComponentProps {}

export const HeroComponent: React.FC<HeroComponentProps> = () => {
  const navigate = useNavigate();
  return (
    <Stack>
      <Stack direction={"row"} mt="4">
        <Stack width={["1%", "30%", "30%"]}></Stack>
        <Stack width={["98%", "40%", "40%"]}>
          {" "}
          <Center flexDirection={"column"}>
            <Text
              fontSize={["xl", "xx-large", "xxx-large"]}
              textAlign={"center"}
              fontFamily={"Montserrat"}
              fontWeight={"bold"}
              color={"#002060"}
            >
              Every Business Needs To Boost Their Sales
            </Text>
            <Button
              mt="6"
              width={["50%", "70%", "80%"]}
              colorScheme="custom"
              bg="#002060"
              color={"white"}
              borderRadius={["24", "36", "36"]}
              size={["lg", "lg", "lg"]}
              fontSize={["lg", "x-large", "x-large"]}
              p="8"
              boxShadow={"xl"}
              onClick={() => {
                navigate("/waitlist");
              }}
            >
              Join The Waitlist
            </Button>

            <Text
              fontSize={["xl", "xx-large", "xxx-large"]}
              textAlign={"center"}
              fontFamily={"Montserrat"}
              color={"#002060"}
              fontWeight={"semibold"}
              pt="10"
              pb="4"
            >
              The Harsh Reality
            </Text>
            <Stack gap="4" alignItems={"center"}>
              <Card
                direction={{ base: "row", sm: "row" }}
                overflow="hidden"
                variant="outline"
                border={"4px solid #002060"}
                borderRadius={"24"}
                w={{ base: "80%", lg: "80%" }}
                height={{ base: "130px", lg: "140px" }}
                boxShadow={"xl"}
              >
                <Image
                  objectFit="cover"
                  w={{ base: "30%", lg: "20%" }}
                  h={{ base: "100%", lg: "140px" }}
                  src="/images/card1.png"
                  alt="card image"
                />

                <CardBody>
                  <Text
                    fontFamily={"Montserrat"}
                    color={"#002060"}
                    fontSize={{ base: "md", lg: "2xl" }}
                    fontWeight={"semibold"}
                  >
                    80%+ of worldwide retailers do not yet have an online
                    presence.
                  </Text>
                </CardBody>
              </Card>
              <Card
                direction={{ base: "row", sm: "row" }}
                overflow="hidden"
                variant="outline"
                border={"4px solid #002060"}
                borderRadius={"24"}
                w={{ base: "80%", lg: "80%" }}
                height={{ base: "130px", lg: "150px" }}
                boxShadow={"xl"}
              >
                <Image
                  objectFit="contain"
                  w={{ base: "30%", lg: "20%" }}
                  h={{ base: "100%", lg: "140px" }}
                  src="/images/card2.png"
                  alt="card image"
                  height={"100%"}
                />

                <CardBody>
                  <Text
                    fontFamily={"Montserrat"}
                    color={"#002060"}
                    fontSize={{ base: "md", lg: "2xl" }}
                    fontWeight={"semibold"}
                  >
                    Transaction fees for online marketplaces can go as high as
                    45%.
                  </Text>
                </CardBody>
              </Card>
              <Card
                direction={{ base: "row", sm: "row" }}
                overflow="hidden"
                variant="outline"
                border={"4px solid #002060"}
                borderRadius={"24"}
                w={{ base: "80%", lg: "80%" }}
                height={{ base: "300px", lg: "300px" }}
                boxShadow={"xl"}
              >
                <Image
                  bg={"#002060"}
                  objectFit="cover"
                  w={{ base: "30%", lg: "20%" }}
                  h={{ base: "100%", lg: "300px" }}
                  src="/images/card3.png"
                  alt="card image"
                />

                <CardBody>
                  <Text
                    fontFamily={"Montserrat"}
                    color={"#002060"}
                    fontSize={{ base: "md", lg: "2xl" }}
                    fontWeight={"semibold"}
                  >
                    Every year, thousands of innovative software tools emerge
                    (the software tools market may grow at 18% in the next 7
                    years), yet many businesses remain unaware of their
                    existence.
                  </Text>
                </CardBody>
              </Card>
            </Stack>

            <Text
              fontSize={["xl", "xx-large", "xxx-large"]}
              textAlign={"center"}
              fontFamily={"Montserrat"}
              color={"#002060"}
              fontWeight={"semibold"}
              pt="10"
              pb="4"
            >
              How We Help
            </Text>

            <Stack gap="4" alignItems={"center"}>
              <Card
                direction={{ base: "row", sm: "row" }}
                overflow="hidden"
                variant="outline"
                border={"4px solid #002060"}
                borderRadius={"24"}
                w={{ base: "80%", lg: "80%" }}
                boxShadow={"xl"}
              >
                <Image
                  objectFit="cover"
                  w={{ base: "30%", lg: "20%" }}
                  h={{ base: "100%", lg: "100%" }}
                  src="/images/card4.png"
                  alt="card image"
                  bg="#002060"
                />

                <CardBody bg="#002060">
                  <Text
                    fontFamily={"Montserrat"}
                    color={"white"}
                    fontSize={{ base: "md", lg: "xl" }}
                    fontWeight={"semibold"}
                  >
                    Easily set up your online shop and access an instructional
                    support network to expand your business reach.
                  </Text>
                </CardBody>
              </Card>
              <Card
                direction={{ base: "row", sm: "row" }}
                overflow="hidden"
                variant="outline"
                border={"2px solid #002060"}
                borderRadius={"24"}
                w={{ base: "80%", lg: "80%" }}
                boxShadow={"xl"}
              >
                <Image
                  bg={"#002060"}
                  objectFit="contain"
                  src="/images/card5.png"
                  alt="card image"
                  w={{ base: "30%", lg: "20%" }}
                  height={{ base: "100%", lg: "100%" }}
                />

                <CardBody bg={"#002060"}>
                  <Text
                    fontFamily={"Montserrat"}
                    color={"white"}
                    fontSize={{ base: "md", lg: "xl" }}
                    fontWeight={"semibold"}
                  >
                    A low transaction fee marketplace where you only pay for
                    what you need.
                  </Text>
                </CardBody>
              </Card>
              <Card
                direction={{ base: "row", sm: "row" }}
                overflow="hidden"
                variant="outline"
                border={"2px solid #002060"}
                borderRadius={"24"}
                w={{ base: "80%", lg: "80%" }}
                boxShadow={"xl"}
              >
                <Image
                  objectFit="cover"
                  w={{ base: "30%", lg: "20%" }}
                  src="/images/card6.png"
                  alt="card image"
                  bg="#002060"
                />

                <CardBody bg={"#002060"}>
                  <Text
                    fontFamily={"Montserrat"}
                    color={"white"}
                    fontSize={{ base: "md", lg: "xl" }}
                    fontWeight={"semibold"}
                  >
                    Discover the tools that could reshape your success story
                    today!
                  </Text>
                </CardBody>
              </Card>
              <Button
                mt="2"
                width={{ base: "80%", lg: "80%" }}
                colorScheme="custom"
                bg="#002060"
                color="white"
                borderRadius="36"
                size="lg"
                fontSize={{ base: "30ox", lg: "30px" }}
                p="8"
                boxShadow="xl"
                leftIcon={<IoIosCheckboxOutline fontSize="56" />}
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
              >
                Streamline Operations
              </Button>

              <Button
                mt="2"
                width={{ base: "80%", lg: "80%" }}
                colorScheme="custom"
                bg="#002060"
                color="white"
                borderRadius="36"
                size="lg"
                fontSize={{ base: "30ox", lg: "30px" }}
                p="8"
                boxShadow="xl"
                leftIcon={<IoIosCheckboxOutline fontSize="56" />}
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
              >
                Decrease Costs
              </Button>
              <Button
                mt="2"
                width={{ base: "80%", lg: "80%" }}
                colorScheme="custom"
                bg="#002060"
                color="white"
                borderRadius="36"
                size="lg"
                fontSize={{ base: "30ox", lg: "30px" }}
                p="8"
                boxShadow="xl"
                leftIcon={<IoIosCheckboxOutline fontSize="56" />}
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
              >
                Supercharge Growth
              </Button>
            </Stack>

            <Text
              fontSize={"xxx-large"}
              textAlign={"center"}
              fontFamily={"Montserrat"}
              color={"#002060"}
              fontWeight={"semibold"}
              pt="10"
              pb="4"
            >
              FAQ
            </Text>
            <Stack alignItems={"center"}>
              <Accordion
                defaultIndex={[0, 1, 2, 3, 4, 5]}
                allowMultiple
                width={"80%"}
                fontFamily={"Montserrat"}
              >
                <AccordionItem
                  border={"4px solid #002060"}
                  borderRadius={"24"}
                  boxShadow={"xl"}
                >
                  <AccordionButton
                    _expanded={{ bg: "#002060", color: "white" }}
                    borderRadius={"16"}
                    bg="#002060"
                    color={"white"}
                    _hover={{ bg: "#002060" }}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={"bold"}
                      fontSize={"xl"}
                    >
                      When will we launch?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel
                    pb={4}
                    color={"#002060"}
                    fontSize={"xl"}
                    fontWeight={"semibold"}
                  >
                    We will be launching in beta soon. Join our waitlist now to
                    get exclusive access. Be the first to know when we go live!
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem
                  marginTop="10"
                  border={"4px solid #002060"}
                  borderRadius={"24"}
                  boxShadow={"xl"}
                >
                  <AccordionButton
                    _expanded={{ bg: "#002060", color: "white" }}
                    borderRadius={"16"}
                    bg="#002060"
                    color={"white"}
                    _hover={{ bg: "#002060" }}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={"bold"}
                      fontSize={"xl"}
                    >
                      What can you buy?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel
                    pb={4}
                    color={"#002060"}
                    fontSize={"xl"}
                    fontWeight={"semibold"}
                  >
                    Almost anything, customized or not. Design your environment
                    exactly the way you want it.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem
                  marginTop="10 "
                  border={"4px solid #002060"}
                  borderRadius={"24"}
                  boxShadow={"xl"}
                >
                  <AccordionButton
                    _expanded={{ bg: "#002060", color: "white" }}
                    borderRadius={"16"}
                    bg="#002060"
                    color={"white"}
                    _hover={{ bg: "#002060" }}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={"bold"}
                      fontSize={"xl"}
                    >
                      What can you use to customize?{" "}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel
                    pb={4}
                    color={"#002060"}
                    fontSize={"xl"}
                    fontWeight={"semibold"}
                  >
                    You can use text and image. Images can be artwork, minted or
                    unminted NFTs that you own or have permission to use.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem
                  marginTop="10 "
                  border={"4px solid #002060"}
                  borderRadius={"24"}
                  boxShadow={"xl"}
                >
                  <AccordionButton
                    _expanded={{ bg: "#002060", color: "white" }}
                    borderRadius={"16"}
                    bg="#002060"
                    color={"white"}
                    _hover={{ bg: "#002060" }}
                    border={"4px solid #002060"}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={"bold"}
                      fontSize={"xl"}
                    >
                      Do you need to make an account to buy?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel
                    pb={4}
                    color={"#002060"}
                    fontSize={"xl"}
                    fontWeight={"semibold"}
                  >
                    You can make purchases as a Guest, although when you make an
                    account you will have access to our social network and many
                    perks.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem
                  marginTop="10"
                  border={"4px solid #002060"}
                  borderRadius={"24"}
                  boxShadow={"xl"}
                >
                  <AccordionButton
                    _expanded={{ bg: "#002060", color: "white" }}
                    borderRadius={"16"}
                    bg="#002060"
                    color={"white"}
                    _hover={{ bg: "#002060" }}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={"bold"}
                      fontSize={"xl"}
                    >
                      Can you pay in crypto?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel
                    pb={4}
                    color={"#002060"}
                    fontSize={"xl"}
                    fontWeight={"semibold"}
                  >
                    You can pay with crypto or not. We allow shoppers, to use
                    their excess crypto, to pay 10% of the purchase price in
                    select cryptocurrencies.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem
                  marginTop="10"
                  border={"4px solid #002060"}
                  borderRadius={"24"}
                  boxShadow={"xl"}
                >
                  <AccordionButton
                    _expanded={{ bg: "#002060", color: "white" }}
                    borderRadius={"16"}
                    bg="#002060"
                    color={"white"}
                    _hover={{ bg: "#002060" }}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={"bold"}
                      fontSize={"xl"}
                    >
                      Can you buy solutions directly?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel
                    pb={4}
                    color={"#002060"}
                    fontSize={"xl"}
                    fontWeight={"semibold"}
                  >
                    Yes, with our APIs, the purcase makes an automatic account
                    in the software.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Stack>
            <Text
              fontSize={"xxx-large"}
              textAlign={"center"}
              fontFamily={"Montserrat"}
              color={"#002060"}
              fontWeight={"semibold"}
              pt="10"
              pb="4"
            >
              Team
            </Text>
            <Stack alignItems={"center"} gap="4">
              <Card
                width={{ base: "100%", sm: "200px", lg: "350px" }}
                bg="#002060"
                borderRadius={"36"}
                height={"fit-content"}
                boxShadow={"3xl"}
              >
                <CardBody
                  textAlign={"center"}
                  textColor={"white"}
                  fontFamily={"Montserrat"}
                  fontSize={"2xl"}
                  fontWeight={"semibold"}
                >
                  <Text>Snnow Rasbach</Text>
                  <Text>Co-Founder and CEO</Text>
                  <Center>
                    <Image
                      src="/images/team1.png"
                      alt="snnow rasbach"
                      borderRadius="lg"
                    />
                  </Center>
                </CardBody>
              </Card>

              <Card
                width={{ base: "100%", sm: "200px", lg: "350px" }}
                bg="#002060"
                borderRadius={"36"}
                height={"fit-content"}
                boxShadow={"xl"}
              >
                <CardBody
                  textAlign={"center"}
                  textColor={"white"}
                  fontFamily={"Montserrat"}
                  fontSize={"2xl"}
                  fontWeight={"semibold"}
                >
                  <Text>Teresa Simoes</Text>
                  <Text>Co-Founder and Advisor</Text>
                  <Center>
                    <Image
                      src="/images/team2.png"
                      alt="Teresa Simoes"
                      borderRadius="lg"
                    />
                  </Center>
                </CardBody>
              </Card>

              <Card
                width={{ base: "100%", sm: "200px", lg: "350px" }}
                bg="#002060"
                borderRadius={"36"}
                height={"fit-content"}
                boxShadow={"xl"}
              >
                <CardBody
                  textAlign={"center"}
                  textColor={"white"}
                  fontFamily={"Montserrat"}
                  fontSize={"2xl"}
                  fontWeight={"semibold"}
                >
                  <Text>Filipe Mota</Text>
                  <Text>Tech Head</Text>
                  <Center>
                    <Image
                      src="/images/team3.png"
                      alt="Filipe Mota"
                      borderRadius="lg"
                    />
                  </Center>
                </CardBody>
              </Card>
            </Stack>
            <Stack width={["80%", "70%", "80%"]}>
              <AboutUsComponent />
            </Stack>
          </Center>
        </Stack>
        <Stack width={["1%", "30%", "30%"]}></Stack>
      </Stack>
    </Stack>
  );
};
