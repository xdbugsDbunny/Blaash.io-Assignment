import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";

const Layout = ({ children, heading }) => {
  return (
    <Flex h="100vh" w="100%" bg="black" padding="1vw" gap={"1.5vw"}>
      <Sidebar />
      <Flex
        flexDirection="column"
        justifyContent="space-evenly"
        w="80vw"
        h="100%"
        gap="1.5vw"
        overflow="hidden"
      >
        <Box h="10vh">
          <Navbar />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          h="3vh"
        >
          <Heading
            fontFamily="Rubik"
            fontSize="20px"
            fontWeight="500"
            lineHeight="18.96px"
            color="white"
            mb="0"
          >
            {heading}
          </Heading>
          <Button
            bg={"#017EFA"}
            fontSize="14px"
            fontWeight={"500"}
            // mt="5"
            alignSelf="center"
            padding="10px"
            borderRadius="10px"
            leftIcon={<LinkIcon />}
            fontFamily="Rubik"
            color="white"
          >
            Generate Code
          </Button>
        </Box>
        <Box h="78vh">{children}</Box>
      </Flex>
    </Flex>
  );
};

export default Layout;
