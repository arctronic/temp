import React from "react";
import {
  Stack,
  Image,
  IconButton,
  useBreakpointValue,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import { RiSearchFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { DecorationImageComponent } from "./decoration-image.component";

interface PageHeaderComponentProps {}

export const PageHeaderComponent: React.FC<PageHeaderComponentProps> = () => {
  const navigate = useNavigate();

  const buttons = [
    { label: "Home", onClick: () => navigate("/") },
    { label: "What We Sell", onClick: () => navigate("/what-we-sell") },
    { label: "Waitlist", onClick: () => navigate("/waitlist") },
    { label: "Explore", onClick: () => navigate("/explore") },
  ];

  const duplicatedButtons = Array.from({ length: 100 }, () => buttons).flat();

  return (
    <Stack>
      <Stack bg="#002060" maxH="10%">
        <Stack direction={"row"}>
          <Stack width={{ base: "30", md: "10%" }}>
            <Image
              mt="2"
              src={"/images/rocket.png"}
              width={["80%", "90%", "100%"]}
              height={["100%", "90%", "90%"]}
              alt={"logo"}
              objectFit={"cover"}
            />
          </Stack>
          <Stack width={{ base: "50", md: "70%" }}>
            <Stack>
              <Image
                align={"center"}
                src={"/images/cropped_upunik.png"}
                width={["70%", "30%", "30%"]}
                height={["70%", "30%", "90%"]}
                alt={"logo"}
                mt="4"
              />
            </Stack>
            <Stack>
              <Button
                ml={["0", "2", "2"]}
                color="#CC96F6"
                fontSize={["md", "md", "3xl"]}
                size={useBreakpointValue({
                  base: "sm",
                  sm: "sm",
                  md: "md",
                  lg: "lg",
                  xl: "lg",
                })}
                width={["80%", "25%", "30%"]}
                leftIcon={<RiSearchFill />}
                justifyContent={"flex-start"}
                borderRadius={["12", "48", "48"]}
              >
                Shop Search
              </Button>
            </Stack>
          </Stack>
          <Stack width={"20%"} align={"end"} mr="10" gap={["2", "15", "4"]}>
            <IconButton
              pt={["2", "4", "4"]}
              left={["1", "0", "0"]}
              width={"fit-content"}
              color={"#CC96F6"}
              background={"transparent"}
              _hover={{ background: "transparent" }}
              aria-label="menu"
              icon={<IoMenu />}
              style={{ fontSize: "48px" }}
            />
            <IconButton
              width={"fit-content"}
              fontSize={["28", "48", "48"]}
              color={"white"}
              background={"transparent"}
              _hover={{ background: "transparent" }}
              aria-label="menu"
              icon={<DecorationImageComponent />}
              onClick={() => {
                navigate("/in-progress");
              }}
            />
            <Text
              color={"white"}
              fontFamily={"Montserrat"}
              fontWeight={"bold"}
              fontSize={"3xl"}
            >
              $0
            </Text>
          </Stack>
        </Stack>
      </Stack>

      <Stack direction={"row"} justify={"space-evenly"} align={"center"}>
        <Stack direction={"row"} align={"center"}>
          <Box width="18px" height="28px" bg="#002060" borderRadius="50%">
            {" "}
          </Box>
          <Text
            fontWeight={"bold"}
            fontFamily={"Montserrat"}
            color={"#002060"}
            fontSize={{ base: "20", lg: "28" }}
            onClick={() => navigate(-1)}
            _hover={{ cursor: "pointer" }}
          >
            Go Back{" "}
          </Text>
        </Stack>
        <Stack direction={"row"} align={"center"}>
          <Box width="18px" height="28px" bg="#002060" borderRadius="50%">
            {" "}
          </Box>
          <Text
            fontWeight={"bold"}
            fontFamily={"Montserrat"}
            color={"#002060"}
            fontSize={{ base: "20", lg: "28" }}
            _hover={{ cursor: "pointer" }}
          >
            Search
          </Text>
        </Stack>
        <Stack direction={"row"} align={"center"}>
          <Box width="18px" height="28px" bg="#002060" borderRadius="50%">
            {" "}
          </Box>
          <Text
            fontWeight={"bold"}
            fontFamily={"Montserrat"}
            color={"#002060"}
            fontSize={{ base: "20", lg: "28" }}
            _hover={{ cursor: "pointer" }}
          >
            Log In
          </Text>
        </Stack>
      </Stack>

      <Marquee direction="left" pauseOnHover={true}>
        <Stack direction={"row"} w="100%">
          {duplicatedButtons.map((button, index) => (
            <Button
              width={{ base: "140px", lg: "386px" }}
              key={index}
              size={["sm", "md", "lg"]}
              variant={"outline"}
              border={"3px solid #002060"}
              borderRadius={["12", "48", "48"]}
              boxShadow={"2xl"}
              onClick={button.onClick}
              _hover={{ bg: "#002060", color: "white" }}
            >
              {button.label}
            </Button>
          ))}
        </Stack>
      </Marquee>
    </Stack>
  );
};
