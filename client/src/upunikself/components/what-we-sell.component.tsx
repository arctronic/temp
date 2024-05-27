import React from "react";
import {
  Box,
  Center,
  IconButton,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import Marquee from "react-fast-marquee";

interface WhatWeSellComponentProps {}

export const WhatWeSellComponent: React.FC<WhatWeSellComponentProps> = () => {
  const items = [
    { title: "Objects", src: "/images/object.png", alt: "object1" },
    { title: "Machines", src: "/images/machine.png", alt: "object2" },
    { title: "Packaging", src: "/images/package.png", alt: "object3" },
    { title: "General Solutions", src: "/images/gs.png", alt: "object4" },
    { title: "License NFTs", src: "/images/nft.png", alt: "object5" },
    { title: "AI Solutions", src: "/images/ai.png", alt: "object6" },
  ];
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Stack>
      <Stack direction={"row"} mt="4">
        <Stack width={["1%", "20%", "20%"]}></Stack>
        <Stack width={["98%", "60%", "60%"]}>
          <Text
            fontSize={["2xl", "xx-large", "xxx-large"]}
            textAlign={"center"}
            fontFamily={"Montserrat"}
            fontWeight={"bold"}
            color={"#002060"}
          >
            What We Sell
          </Text>
          {isMobile ? (
            <Marquee gradient={false} speed={50}>
              <SimpleGrid columns={6} spacing="2px">
                {[...items].map((item, index) => (
                  <Box key={index} textAlign="center">
                    <Stack align="center">
                      <Text fontSize="lg" fontWeight="bold" color={"#002060"}>
                        {item.title}
                      </Text>
                      <Image
                        border={"4px solid #002060"}
                        borderRadius={"28"}
                        src={item.src}
                        alt={item.alt}
                        width={{ base: "100px", lg: "150px" }}
                        height={{ base: "100px", lg: "150px" }}
                        objectFit="cover"
                      />
                    </Stack>
                  </Box>
                ))}
              </SimpleGrid>
            </Marquee>
          ) : (
            <SimpleGrid columns={{ base: 6, md: 6, lg: 6 }} spacing="40px">
              {items.map((item, index) => (
                <Box key={index} textAlign="center">
                  <Stack align="center">
                    <Text fontSize="lg" fontWeight="bold" color={"#002060"}>
                      {item.title}
                    </Text>
                    <Image
                      border={"4px solid #002060"}
                      borderRadius={"28"}
                      src={item.src}
                      alt={item.alt}
                      width={{ base: "100px", lg: "150px" }}
                      height={{ base: "100px", lg: "150px" }}
                      objectFit="cover"
                    />
                  </Stack>
                </Box>
              ))}
            </SimpleGrid>
          )}
          <Text
            fontSize={["2xl", "xx-large", "xxx-large"]}
            textAlign={"center"}
            fontFamily={"Montserrat"}
            fontWeight={"bold"}
            color={"#002060"}
            mt="10"
          >
            Marketplace Facilitator Pricing
          </Text>
          <Stack mt="4" gap={"4"}>
            <Stack direction={"row"} align={"center"} ml={["0", "250px"]}>
              <IconButton
                aria-label="Search database"
                icon={<FaCheck />}
                background={"transparent"}
                _hover={{ background: "transparent" }}
                fontSize={{ base: "24", lg: "36" }}
                color={"#002060"}
              />
              <Text
                fontFamily={"Montserrat"}
                fontSize={{ base: "xl", lg: "3xl" }}
                fontWeight={"bold"}
                color={"#002060"}
              >
                No subscription required
              </Text>
            </Stack>
            <Stack direction={"row"} align={"center"} ml={["0", "250px"]}>
              <IconButton
                aria-label="Search database"
                icon={<FaCheck />}
                background={"transparent"}
                _hover={{ background: "transparent" }}
                fontSize={{ base: "24", lg: "36" }}
                color={"#002060"}
              />
              <Text
                fontFamily={"Montserrat"}
                fontSize={{ base: "xl", lg: "3xl" }}
                fontWeight={"bold"}
                color={"#002060"}
              >
                We are aiming at fees as low as 2.5%
              </Text>
            </Stack>
            <Stack direction={"row"} align={"center"} ml={["0", "250px"]}>
              <IconButton
                aria-label="Search database"
                icon={<FaCheck />}
                background={"transparent"}
                _hover={{ background: "transparent" }}
                fontSize={{ base: "24", lg: "36" }}
                color={"#002060"}
              />
              <Text
                fontFamily={"Montserrat"}
                fontSize={{ base: "xl", lg: "3xl" }}
                fontWeight={"bold"}
                color={"#002060"}
              >
                Pay for additional solutions as you need
              </Text>
            </Stack>
          </Stack>
          <Text
            fontSize={["2xl", "xx-large", "xxx-large"]}
            textAlign={"center"}
            fontFamily={"Montserrat"}
            fontWeight={"bold"}
            color={"#002060"}
            mt="10"
          >
            A Shop that is Easy to Set Up
          </Text>
          <Stack>
            <Center>
              <Image
                src="/images/header.png"
                alt="header"
                width={"100%"}
                height={"90%"}
              />
            </Center>
          </Stack>
          <Stack gap={"10"}>
            <Text
              fontSize={["2xl", "xx-large", "xxx-large"]}
              textAlign={"center"}
              fontFamily={"Montserrat"}
              fontWeight={"bold"}
              color={"#002060"}
            >
              <Text>[Name],</Text>
              Welcome To Vendor's Dashboard
            </Text>

            <Stack width={"100%"} gap="2px">
              <Stack direction={"row"} gap="2px">
                <Stack
                  width={"50%"}
                  border={"4px solid #002060"}
                  borderRadius={"8"}
                >
                  <Text
                    fontSize={{ base: "2xl", lg: "4xl" }}
                    fontFamily={"Montserrat"}
                    color={"#002060"}
                    textAlign={"center"}
                    fontWeight={"bold"}
                  >
                    {" "}
                    Show Window
                  </Text>
                </Stack>
                <Stack
                  width={"50%"}
                  border={"4px solid #002060"}
                  borderRadius={"8"}
                >
                  <Text
                    fontSize={{ base: "2xl", lg: "4xl" }}
                    fontFamily={"Montserrat"}
                    color={"#002060"}
                    textAlign={"center"}
                    fontWeight={"bold"}
                  >
                    Show Orders
                  </Text>
                </Stack>
              </Stack>
              <Stack direction={"row"} gap="2px">
                <Stack
                  width={"50%"}
                  height={{ base: "250px", lg: "300px" }}
                  gap={{ base: "5", lg: "10" }}
                  padding={"4"}
                  border={"4px solid #002060"}
                  borderRadius={"8"}
                >
                  <Stack direction={"row"} align={"center"}>
                    <Box
                      width={{ base: "15px", lg: "40px" }}
                      height={{ base: "24px ", lg: "60px" }}
                      bg="#002060"
                      borderRadius="50%"
                    ></Box>
                    <Text
                      fontSize={{ base: "lg", lg: "3xl" }}
                      fontFamily={"Montserrat"}
                      color={"#002060"}
                      fontWeight={"bold"}
                    >
                      Input 10 Offerings
                    </Text>
                  </Stack>
                  <Stack direction={"row"} align={"center"}>
                    <Box
                      width={{ base: "15px", lg: "40px" }}
                      height={{ base: "24px ", lg: "60px" }}
                      bg="#002060"
                      borderRadius="50%"
                    ></Box>
                    <Text
                      fontSize={{ base: "lg", lg: "3xl" }}
                      fontFamily={"Montserrat"}
                      color={"#002060"}
                      fontWeight={"bold"}
                    >
                      Input Offering Features
                    </Text>
                  </Stack>
                  <Stack direction={"row"} align={"center"}>
                    <Box
                      width={{ base: "15px", lg: "40px" }}
                      height={{ base: "24px ", lg: "60px" }}
                      bg="#002060"
                      borderRadius="50%"
                    ></Box>
                    <Text
                      fontSize={{ base: "lg", lg: "3xl" }}
                      fontFamily={"Montserrat"}
                      color={"#002060"}
                      fontWeight={"bold"}
                    >
                      Edit Window Decor
                    </Text>
                  </Stack>
                </Stack>

                <Stack
                  width={"50%"}
                  height={{ base: "250px", lg: "300px" }}
                  gap={{ base: "5", lg: "10" }}
                  padding={"4"}
                  border={"4px solid #002060"}
                  borderRadius={"8"}
                >
                  <Stack direction={"row"} align={"center"}>
                    <Box
                      width={{ base: "15px", lg: "40px" }}
                      height={{ base: "24px ", lg: "60px" }}
                      bg="#002060"
                      borderRadius="50%"
                    ></Box>
                    <Text
                      fontSize={{ base: "lg", lg: "3xl" }}
                      fontFamily={"Montserrat"}
                      color={"#002060"}
                      fontWeight={"bold"}
                    >
                      Order Set Up
                      {/* <br /> */}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Text>
                  </Stack>
                  <Stack direction={"row"} align={"center"}>
                    <Box
                      width={{ base: "15px", lg: "40px" }}
                      height={{ base: "24px ", lg: "60px" }}
                      bg="#002060"
                      borderRadius="50%"
                    ></Box>
                    <Text
                      fontSize={{ base: "lg", lg: "3xl" }}
                      fontFamily={"Montserrat"}
                      color={"#002060"}
                      fontWeight={"bold"}
                    >
                      Order Follow Up
                    </Text>
                  </Stack>
                  <Stack direction={"row"} align={"center"}>
                    <Box
                      width={{ base: "15px", lg: "40px" }}
                      height={{ base: "24px ", lg: "60px" }}
                      bg="#002060"
                      borderRadius="50%"
                    ></Box>
                    <Text
                      fontSize={{ base: "lg", lg: "3xl" }}
                      fontFamily={"Montserrat"}
                      color={"#002060"}
                      fontWeight={"bold"}
                    >
                      Manage Returns
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>

            <Stack width={"100%"} gap="2px">
              <Stack direction={"row"} gap="2px">
                <Stack
                  width={"50%"}
                  border={"4px solid #002060"}
                  borderRadius={"8"}
                >
                  <Text
                    fontSize={{ base: "2xl", lg: "4xl" }}
                    fontFamily={"Montserrat"}
                    color={"#002060"}
                    textAlign={"center"}
                    fontWeight={"bold"}
                  >
                    Shop Control
                  </Text>
                </Stack>
                <Stack
                  width={"50%"}
                  border={"4px solid #002060"}
                  borderRadius={"8"}
                >
                  <Text
                    fontSize={{ base: "2xl", lg: "4xl" }}
                    fontFamily={"Montserrat"}
                    color={"#002060"}
                    textAlign={"center"}
                    fontWeight={"bold"}
                  >
                    Shop Accounts
                  </Text>
                </Stack>
              </Stack>
              <Stack direction={"row"} gap="2px">
                <Stack
                  width={"50%"}
                  height={{ base: "150px", lg: "200px" }}
                  gap={{ base: "5", lg: "10" }}
                  padding={"4"}
                  border={"4px solid #002060"}
                  borderRadius={"8"}
                >
                  <Stack direction={"row"} align={"center"}>
                    <Box
                      width={{ base: "15px", lg: "40px" }}
                      height={{ base: "24px ", lg: "60px" }}
                      bg="#002060"
                      borderRadius="50%"
                    ></Box>
                    <Text
                      fontSize={{ base: "lg", lg: "3xl" }}
                      fontFamily={"Montserrat"}
                      color={"#002060"}
                      fontWeight={"bold"}
                    >
                      Payment
                    </Text>
                  </Stack>
                  <Stack direction={"row"} align={"center"}>
                    <Box
                      width={{ base: "15px", lg: "40px" }}
                      height={{ base: "24px ", lg: "60px" }}
                      bg="#002060"
                      borderRadius="50%"
                    ></Box>
                    <Text
                      fontSize={{ base: "lg", lg: "3xl" }}
                      fontFamily={"Montserrat"}
                      color={"#002060"}
                      fontWeight={"bold"}
                    >
                      Logistics and APIs
                    </Text>
                  </Stack>
                </Stack>

                <Stack
                  width={"50%"}
                  height={{ base: "150px", lg: "200px" }}
                  gap={{ base: "5", lg: "10" }}
                  padding={"4"}
                  border={"4px solid #002060"}
                  borderRadius={"8"}
                >
                  <Stack direction={"row"} align={"center"}>
                    <Box
                      width={{ base: "15px", lg: "40px" }}
                      height={{ base: "24px ", lg: "60px" }}
                      bg="#002060"
                      borderRadius="50%"
                    ></Box>
                    <Text
                      fontSize={{ base: "lg", lg: "3xl" }}
                      fontFamily={"Montserrat"}
                      color={"#002060"}
                      fontWeight={"bold"}
                    >
                      Account
                    </Text>
                  </Stack>
                  <Stack direction={"row"} align={"center"}>
                    <Box
                      width={{ base: "15px", lg: "40px" }}
                      height={{ base: "24px ", lg: "60px" }}
                      bg="#002060"
                      borderRadius="50%"
                    ></Box>
                    <Text
                      fontSize={{ base: "lg", lg: "3xl" }}
                      fontFamily={"Montserrat"}
                      color={"#002060"}
                      fontWeight={"bold"}
                    >
                      Statistics
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>

            <Stack width={"100%"} gap="2px">
              <Stack direction={"row"} gap="2px">
                <Stack
                  width={"50%"}
                  border={"4px solid #002060"}
                  borderRadius={"8"}
                >
                  <Text
                    fontSize={{ base: "2xl", lg: "4xl" }}
                    fontFamily={"Montserrat"}
                    color={"#002060"}
                    textAlign={"center"}
                    fontWeight={"bold"}
                  >
                    Ad Attacks
                  </Text>
                </Stack>
                <Stack
                  width={"50%"}
                  border={"4px solid #002060"}
                  borderRadius={"8"}
                >
                  <Text
                    fontSize={{ base: "2xl", lg: "4xl" }}
                    fontFamily={"Montserrat"}
                    color={"#002060"}
                    textAlign={"center"}
                    fontWeight={"bold"}
                  >
                    Vendor Window
                  </Text>
                </Stack>
              </Stack>
              <Stack direction={"row"} gap="2px">
                <Stack
                  width={"50%"}
                  height={"120px"}
                  gap={{ base: "5", lg: "10" }}
                  padding={"4"}
                  border={"4px solid #002060"}
                  borderRadius={"8"}
                >
                  <Stack direction={"row"} align={"center"} pt="4">
                    <Box
                      width={{ base: "15px", lg: "40px" }}
                      height={{ base: "24px ", lg: "60px" }}
                      bg="#002060"
                      borderRadius="50%"
                    ></Box>
                    <Text
                      fontSize={{ base: "lg", lg: "3xl" }}
                      fontFamily={"Montserrat"}
                      color={"#002060"}
                      fontWeight={"bold"}
                    >
                      Buy Ad Attacks
                    </Text>
                  </Stack>
                </Stack>

                <Stack
                  width={"50%"}
                  height={"120px"}
                  gap={{ base: "5", lg: "10" }}
                  padding={"4"}
                  border={"4px solid #002060"}
                  borderRadius={"8"}
                >
                  <Stack direction={"row"} align={"center"}>
                    <Box
                      width={{ base: "30px", lg: "40px" }}
                      height={{ base: "24px ", lg: "60px" }}
                      bg="#002060"
                      borderRadius="50%"
                    ></Box>
                    <Text
                      fontSize={{ base: "lg", lg: "3xl" }}
                      fontFamily={"Montserrat"}
                      color={"#002060"}
                      fontWeight={"bold"}
                    >
                      Set Up and Edit Vendor Window
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack width={["1%", "20%", "20%"]}></Stack>
      </Stack>
    </Stack>
  );
};
