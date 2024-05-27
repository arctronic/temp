import React from "react";
import {
  Stack,
  Image,
  Text,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import { RiSearchFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
interface AdminPageHeaderComponentProps {}

export const AdminPageHeaderComponent: React.FC<
  AdminPageHeaderComponentProps
> = () => {
  return (
    <Stack>
      <Stack bg="#002060" maxH="10%">
        <Stack direction={"row"}>
          <Stack width={{ base: "30", md: "20%" }}>
            <Image
              src={"/images/rocket.png"}
              width={["80%", "90%", "50%"]}
              alt={"logo"}
              objectFit={"contain"}
            />
          </Stack>
          <Stack width={{ base: "50", md: "60%" }}>
            <Stack>
              <Image
                align={"center"}
                src={"/images/upunikself.png"}
                width={["70%", "30%", "30%"]}
                alt={"logo"}
              />
            </Stack>
            <Stack>
              <Stack
                ml={["4", "0", "8"]}
                mb={["2", "4", "4"]}
                bg="white"
                width={"fit-content"}
                height={"fit-content"}
                borderRadius={"24"}
                paddingY={"2"}
                paddingX={"4"}
              >
                <Stack direction={"row"} gap="2">
                  <RiSearchFill
                    color="#CC96F6"
                    size={useBreakpointValue({
                      base: "20",
                      sm: "20",
                      md: "24",
                      lg: "36",
                      xl: "36",
                    })}
                  />
                  <Text color="#CC96F6" fontSize={["sm", "md", "2xl"]}>
                    Shop Search
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            width={"20%"}
            align={"end"}
            mr="10"
            gap={["2", "10", "16", "24"]}
          >
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
              fontSize={["36", "48", "48"]}
              color={"#CC96F6"}
              background={"transparent"}
              _hover={{ background: "transparent" }}
              aria-label="menu"
              icon={<FaShoppingCart />}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
