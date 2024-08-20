import {
  BellIcon,
  ChevronDownIcon,
  Search2Icon,
  SearchIcon,
} from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import support from "../assets/support.png";
import traced from "../assets/traced.png";

const Navbar = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems="center"
      h="100%"
      color="white"
      padding={"10px"}
      w="100%"
      bg={"#27272F"}
      borderRadius="16px"
    >
      <Text
        fontFamily="Rubik"
        fontWeight="700"
        fontSize="16px"
        fontStyle="normal"
        width="25%"
        mb="0"
      >
        Design Studio
      </Text>
      <HStack gap="3">
        <Button
          leftIcon={<Image src={support} />}
          colorScheme="#017EFA"
          variant="outline"
          borderRadius="10px"
          border="2px solid #017EFA"
          padding="5px 15px"
          fontSize="14px"
        >
          Support Request
        </Button>
        <Button
          leftIcon={<Image src={traced} />}
          colorScheme="#017EFA"
          variant="outline"
          borderRadius="10px"
          border="2px solid #017EFA"
          width="100%"
          padding="5px 15px"
          fontSize="14px"
        >
          Product Tour
        </Button>
        <InputGroup>
          <Input
            placeholder="Search Project ..."
            borderRadius="10px"
            bg="#27272f"
            color="rgba(192, 192, 214, 0.5)"
            padding="5px"
            border="2px solid rgba(72, 72, 81, 1)"
            pr="2.5rem"
          />
          <InputRightElement
            width="2rem"
            h="1.75rem"
            border="2px solid #484851"
            borderRadius="10px"
            cursor="pointer"
            top="5px"
            right="5px"
          >
            <SearchIcon />
          </InputRightElement>
        </InputGroup>
        <Flex
          w="35px"
          h="35px"
          borderRadius="10px"
          border="2px solid #484851"
          justifyContent="center"
          alignItems="center"
          padding="10px"
        >
          <BellIcon />
        </Flex>
        <Avatar
          w="40px"
          size="md"
          name="Ryan Florence"
          src="https://bit.ly/ryan-florence"
        />
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Suraj
          </MenuButton>
          <MenuList zIndex="10" bg={"#27272F"} padding="10px" borderRadius="10px">
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Security</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};

export default Navbar;
