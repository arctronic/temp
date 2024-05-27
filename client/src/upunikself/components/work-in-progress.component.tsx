import {
  Button,
  Center,
  Image,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAddToWaitListMutation } from "../api";
import { CustomToast } from "./waitlist.component";

interface WorkInProgressComponentProps {}

export const WorkInProgressComponent: React.FC<
  WorkInProgressComponentProps
> = () => {
  const [addToWaitList, addToWaitListResult] = useAddToWaitListMutation();
  const [email, setEmail] = useState<string>();
  const toast = useToast();

  const onEnterPressed = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
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
  return (
    <Stack>
      <Stack direction={"row"} mt="4">
        <Stack width={["1%", "25%", "25%"]}></Stack>
        <Stack width={["98%", "50%", "50%"]}>
          <Center flexDirection={"column"}>
            <Text
              fontSize={["xl", "xx-large", "xxx-large"]}
              textAlign={"center"}
              fontFamily={"Montserrat"}
              fontWeight={"bold"}
              color={"#002060"}
              border={"4px solid #002060"}
              borderRadius={"48"}
              paddingX={"10"}
            >
              Work In Progress
            </Text>
            <Image
              src="/images/work-in-progress.png"
              alt="work in progress"
              width={{ base: "50%", lg: "50%" }}
            />

            <Text
              fontSize={["xl", "xx-large", "xxx-large"]}
              textAlign={"center"}
              fontFamily={"Montserrat"}
              fontWeight={"bold"}
              color={"#002060"}
            >
              Exciting News!
            </Text>

            <Text
              fontSize={["xl", "xx-large", "xx-large"]}
              textAlign={"center"}
              color={"#002060"}
              width={"70%"}
            >
              We are working diligently to build this platform for you. Up until
              we launch, you can check-in by joining the waitlist below.
            </Text>
            <Input
              mt="6"
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
        </Stack>
        <Stack width={["1%", "25%", "25%"]}></Stack>
      </Stack>
    </Stack>
  );
};
