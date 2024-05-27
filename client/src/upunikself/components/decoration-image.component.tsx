import { Box, Center, Image } from "@chakra-ui/react";

export const DecorationImageComponent = () => {
  return (
    <Center>
      <Box>
        <Image src="/images/cart.png" alt="cart" objectFit="cover" />
      </Box>
    </Center>
  );
};
