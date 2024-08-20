import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import revenue from "../assets/revenue.svg";
import image from "../assets/image.svg";
import calender from "../assets/calender.svg";
import clickOnePost from "../assets/clickOnePost.svg";
import settings from "../assets/settings.svg";
import logo from "../assets/logo.png";
import arrow from "../assets/arrow.svg";

const Sidebar = () => {
  const sidebarLinks = [
    { name: "Revenue", icon: revenue, url: "/revenue" },
    { name: "Shoppable Video", icon: image, url: "/shoppable-video" },
    { name: "Story", icon: image, url: "/story" },
    { name: "Live Commerce", icon: image, url: "/live-commerce" },
    { name: "Playlist Manager", icon: image, url: "/playlist-manager" },
    { name: "One Click Post", icon: clickOnePost, url: "/one-click-post" },
    { name: "Calendar", icon: calender, url: "/calendar" },
    { name: "Hire Influencer", icon: settings, url: "/hire-influencer" },
  ];

  return (
    <Box
      as="aside"
      bg={"#27272F"}
      height={"96vh"}
      width="18vw"
      borderRadius="16px"
      padding="1vw"
    >
      <Flex w="100%" flexDirection="column" gap="50px">
        <Box position="relative">
          <Image src={logo} ml="5" />
          <Box
            position="absolute"
            top="0"
            left="100%"
            width="30px"
            height="30px"
            borderRadius="50%"
            bg="#27272F"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image src={arrow} width="20px" h="20px" />
          </Box>
        </Box>
        <VStack width="100%">
          {sidebarLinks.map((item, index) => (
            <NavLink
              key={index}
              to={item.url}
              style={({ isActive }) => ({
                textDecoration: "none",
                width: "100%",
                background: isActive ? "#1A1A1F" : "transparent",
                borderRadius: "8px",
                padding: "1vw",
              })}
            >
              {({ isActive }) => (
                <>
                  <Box
                    width="100%"
                    h={isActive ? "50px" : "25px"}
                    display="flex"
                    flexDirection={"column"}
                    justifyContent="center"
                  >
                    <HStack gap="2vw">
                      <Image src={item.icon} alt={item.name} />
                      <Text
                        fontFamily="Rubik"
                        fontWeight="500"
                        fontSize="16px"
                        color={isActive ? "#FFFFFF" : "#828293"}
                      >
                        {item.name}
                      </Text>
                    </HStack>
                  </Box>
                  {isActive && (
                    <Text
                      p="10px"
                      fontFamily="Rubik"
                      fontWeight="500"
                      fontSize="14px"
                      color={isActive ? "#FFFFFF" : "#828293"}
                      borderRadius="5px"
                      bg="#5A5A68"
                    >
                      Product Playlist
                    </Text>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </VStack>
      </Flex>
    </Box>
  );
};

export default Sidebar;
