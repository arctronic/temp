import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  Link,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { useRegisterMutation } from "../api";

interface RegisterComponentProps {}

export const RegisterComponent: React.FC<RegisterComponentProps> = () => {
  const [registerUser, registerUserResult] = useRegisterMutation();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [name, setName] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();

  const handleSubmit = () => {
    // Check if passwords match
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (password !== confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Password and Confirm Password do not match",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      return;
    } else if (email && !emailRegex.test(email)) {
      toast({
        title: "Invalid Email Format",
        description: "Please enter a valid email address",
        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    // Add any other validation logic here

    // If all validations pass, proceed with registration
    else if (email && password && name) {
      registerUser({
        data: {
          user: {
            email: email,
            name: name,
            phoneNumber: phoneNumber || "",
            password: password,
          },
        },
      });
    }
  };

  const toast = useToast();

  useEffect(() => {
    if (registerUserResult.isSuccess) {
      toast({
        title: "Success",
        description: "You have been registered",
        status: "success",
        duration: 8000,
        isClosable: true,
        position: "top",
      });
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setName("");
      setPhoneNumber("");
    } else if (registerUserResult.isError) {
      toast({
        title: "Error",
        description: "An error occurred",
        status: "error",
        duration: 8000,
        isClosable: true,
        position: "top",
      });
    }
  }, [registerUserResult]);

  return (
    <Center minH="100vh">
      <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" p="5" borderRadius="lg">
        <Stack spacing={4} w="full" maxW="lg">
          <Center>
            <Image
              src="/images/round-logo.png"
              alt="logo"
              width={"30%"}
              height={"10%"}
              bg="#002060"
              objectFit={"contain"}
              borderRadius={"full"}
            />
          </Center>
          <Heading
            fontSize={"2xl"}
            textAlign="center"
            fontFamily={"Montserrat"}
          >
            UP Unik Self Inc.
          </Heading>
          <Heading fontSize={"xl"} textAlign="center" fontFamily={"Montserrat"}>
            Register
          </Heading>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="string"
              placeholder="john doe"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </FormControl>
          <FormControl id="phone">
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="string"
              placeholder="+91...."
              value={phoneNumber}
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="johndoe@gmail.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl
            id="password"
            isRequired
            isInvalid={!!password && password.length < 8}
          >
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                pr="4.5rem" // Add padding to accommodate the eye icon button
                placeholder="********"
                type={"password"}
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </InputGroup>
            <FormErrorMessage>
              Password must be of minimum 8 digits
            </FormErrorMessage>
          </FormControl>
          <FormControl
            id="confirm"
            isRequired
            isInvalid={!!confirmPassword && confirmPassword.length < 8}
          >
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
              <Input
                pr="4.5rem" // Add padding to accommodate the eye icon button
                placeholder="********"
                type={"password"}
                value={confirmPassword}
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                }}
              />
            </InputGroup>
            <FormErrorMessage>
              Password must be of minimum 8 digits
            </FormErrorMessage>
          </FormControl>
          <Button
            colorScheme="custom"
            bg="#002060"
            variant="solid"
            type="submit"
            isLoading={registerUserResult.isLoading}
            onClick={handleSubmit}
          >
            Register
          </Button>
          <Divider />
          <Text as="span">
            Already have an account?{"  "}
            <Link href="/admin/login" color="blue">
              Login
            </Link>
          </Text>
          <Text as="span">
            Return to{" "}
            <Link href="/" color="blue">
              Home
            </Link>
          </Text>
        </Stack>
      </Box>
    </Center>
  );
};
