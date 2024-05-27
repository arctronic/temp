import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useAddToWaitListMutation } from "../api";
import { FaCheckCircle } from "react-icons/fa";
interface CustomToastProps {
  title: string;
  description: string;
}

export const CustomToast: React.FC<CustomToastProps> = ({
  title,
  description,
}) => (
  <Box color="white" p={3} bg="#FF00FF" borderRadius="md" boxShadow="md">
    <Flex align="center">
      <FaCheckCircle style={{ marginRight: "8px" }} />
      <Box>
        <Box fontWeight="bold">{title}</Box>
        <Box>{description}</Box>
      </Box>
    </Flex>
  </Box>
);

interface WaitlistComponentProps {}

export const WaitlistComponent: React.FC<WaitlistComponentProps> = () => {
  const [addToWaitList, addToWaitListResult] = useAddToWaitListMutation();
  const [email, setEmail] = useState<string>();
  const toast = useToast();

  const onEnterPressed = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email && !emailRegex.test(email)) {
      toast({
        title: "Invalid Email Format",
        description: "Please enter a valid email address",
        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      return;
    } else if (email && emailRegex.test(email)) {
      addToWaitList({
        data: {
          email: email,
          createdAt: new Date().toISOString(),
        },
      });
    }
  };

  useEffect(() => {
    if (addToWaitListResult.isSuccess) {
      // toast({
      //   title: "Success",
      //   description: "You have been added to the waitlist",
      //   status: "success",
      //   duration: 8000,
      //   isClosable: true,
      //   position: "top",
      // });
      toast({
        render: () => (
          <CustomToast
            title="Success"
            description="You have been added to the waitlist"
          />
        ),
        duration: 8000,
        isClosable: true,
        position: "top",
      });
      setEmail("");
    } else if (addToWaitListResult.isError) {
      toast({
        title: "Error",
        description: "An error occurred. Please try again later",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    }
  }, [addToWaitListResult]);

  return (
    <Stack>
      <Stack direction={"row"}>
        <Stack width={["1%", "30%", "30%"]}></Stack>
        <Stack width={["98%", "40%", "40%"]}>
          {" "}
          <Center>
            <Text
              mt="8"
              fontSize={"xxx-large"}
              textAlign={"center"}
              fontFamily={"Montserrat"}
              fontWeight={"bold"}
              color={"#002060"}
            >
              Join The Waitlist
            </Text>
          </Center>
          <Center>
            <FormControl w="100%">
              <Center flexDirection={"column"}>
                <Input
                  mt="2"
                  width={"70%"}
                  border={"2px solid #002060"}
                  borderRadius={"36"}
                  textAlign={"center"}
                  placeholder="Email Address"
                  boxShadow={"xl"}
                  size={"lg"}
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  onKeyDown={onEnterPressed}
                />
                <Button
                  mt="8"
                  width={"70%"}
                  colorScheme="custom"
                  bg="#002060"
                  borderRadius={"48"}
                  size={"lg"}
                  boxShadow={"xl"}
                  onClick={handleSubmit}
                  isLoading={addToWaitListResult.isLoading}
                >
                  Submit
                </Button>
              </Center>
            </FormControl>
          </Center>
          <Center flexDirection={"column"}>
            <Text
              mt="8"
              fontSize={"2xl"}
              textAlign={"center"}
              fontFamily={"Montserrat"}
              color={"#002060"}
              fontWeight="semibold"
            >
              Increase the global awareness of your products and solutions with
              no up-front costs.
            </Text>

            <Text
              mt="2"
              fontSize={"2xl"}
              textAlign={"center"}
              fontFamily={"Montserrat"}
              color={"#002060"}
              fontWeight={"semibold"}
            >
              Vendors only pay after they sell or when they use additional
              solutions.
            </Text>
          </Center>
        </Stack>
        <Stack width={["1%", "30%", "30%"]}></Stack>
      </Stack>
    </Stack>
  );
};
