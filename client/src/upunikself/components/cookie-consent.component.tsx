import { useState, useEffect } from "react";
import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleCookie = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Box
      position="fixed"
      bottom="0"
      width="100%"
      // bg="gray.900"
      bg="#020540"
      color="white"
      p={4}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      zIndex="1000"
    >
      <Text fontSize={{ base: "md", lg: "xl" }} width={"50%"}>
        We use essential cookies to make our site work. With your consent, we
        may also use non-essential cookies to improve user experience and
        analyze website traffic. By clicking “Accept,” you agree to our
        website's cookie use as described in our Cookie Policy.
      </Text>
      <ButtonGroup>
        <Button colorScheme="red" onClick={handleCookie} variant={"outline"}>
          Reject All
        </Button>
        <Button colorScheme="blue" onClick={handleCookie}>
          Accept All
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default CookieConsent;
