import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  useToast,
  FormLabel,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLoginMutation } from "../api";
import { useNavigate } from "react-router-dom";

interface LogInComponentProps {}

export const LogInComponent: React.FC<LogInComponentProps> = () => {
  const [login, loginResult] = useLoginMutation();
  const toast = useToast();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleLogin = () => {
    if (email && password) {
      login({
        data: {
          user: {
            email: email,
            password: password,
          },
        },
      });
    }
  };

  useEffect(() => {
    if (loginResult.isSuccess) {
      toast({
        title: "Success",
        description: "You have been logged in",
        status: "success",
        duration: 8000,
        isClosable: true,
        position: "top",
      });
      window.localStorage.setItem("accessToken", loginResult.data.accessToken);
      navigate("/admin/dashboard");
    } else if (loginResult.isError) {
      toast({
        title: "Error",
        description: "Invalid email or password",
        status: "error",
        duration: 8000,
        isClosable: true,
        position: "top",
      });
    }
  });
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
            Login
          </Heading>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="string"
              placeholder="johndoe@gmail.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </FormControl>
          <FormControl
            id="password"
            isRequired
            isInvalid={!!password && password.length < 8}
          >
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                pr="4.5rem"
                placeholder="********"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <InputRightElement width="4.5rem">
                <IconButton
                  bg="transparent"
                  _hover={{ bg: "transparent" }}
                  size="lg"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  icon={showPassword ? <FaEye /> : <FaEyeSlash />}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button
            colorScheme="blue"
            variant="solid"
            type="submit"
            isLoading={loginResult.isLoading}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Divider />
          <Text as="span">
            Don't have an account?{"  "}
            <Link href="/admin/register" color="blue">
              Register
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
