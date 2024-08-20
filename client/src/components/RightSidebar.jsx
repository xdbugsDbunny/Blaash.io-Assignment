import {
  Box,
  VStack,
  Text,
  Heading,
  FormControl,
  FormLabel,
  RadioGroup,
  HStack,
  Radio,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { RepeatIcon } from "@chakra-ui/icons";

const RightSidebar = ({ postIds, name, description }) => {
  const [data, setData] = useState([]);
  const [selectedRadio, setSelectedRadio] = React.useState(null);

  const getData = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_PLAYLIST_URL}/getfeeds_v1`,
        {
          Index: 1,
          ContentType: [2],
          IsTagged: false,
          URL: "",
          PostIds: postIds,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": `${import.meta.env.VITE_X_API_KEY}`,
            "X-Tenant-Key": `${import.meta.env.VITE_TENANT_KEY}`,
          },
        }
      );

      const feedData = response.data.data?.Feeds?.filter((x) =>
        postIds.includes(x?.EngagementPostId)
      );

      setData(feedData || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (postIds && postIds.length > 0) {
      getData();
    }
  }, [postIds]);

  return (
    <Box
      as="aside"
      bg={"#27272F"}
      height={"100%"}
      width="25vw"
      borderRadius="16px"
      padding="1vw"
      color="rgba(255, 255, 255, 0.8)"
      fontFamily="Rubik"
      display="flex"
      flexDirection="column"
    >
      <VStack width="100%" alignItems="start" spacing="20px" flexShrink={0}>
        <Heading as="h1" fontSize="14px" textAlign="left" fontWeight="500">
          {name}
        </Heading>
        <Box
          width="100%"
          padding="10px"
          borderRadius="10px"
          border="1px solid #484851"
          fontWeight="400"
        >
          {description || "Not available"}
        </Box>

        <FormControl as="fieldset">
          <FormLabel as="legend">Video Status</FormLabel>
          <RadioGroup defaultValue="active">
            <HStack spacing="24px">
              <input
                class="form-check-input"
                type="radio"
                name="active"
                id="active"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Active
              </label>
              <input
                class="form-check-input"
                type="radio"
                name="inactive"
                id="inactive"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Inactive
              </label>
            </HStack>
          </RadioGroup>
        </FormControl>
      </VStack>

      <Heading
        as="h2"
        fontSize="14px"
        textAlign="left"
        fontWeight="500"
        mt="20px"
      >
        Product List
      </Heading>

      <Box
        width="100%"
        flex="1"
        overflowY="scroll"
        marginTop="10px"
        display="flex"
        gap="10px"
        flexDirection="column"
      >
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <Flex
              key={index}
              gap="10px"
              width="100%"
              alignItems="center"
              border="1px solid rgba(255, 255, 255, 0.1)"
              justifyContent="space-evenly"
              borderRadius="10px"
              padding="10px"
            >
              <Image
                src={item.Thumbnail_URL}
                alt={item.Thumbnail_Title}
                boxSize="45px"
                borderRadius="10px"
              />
              <VStack alignItems="flex-start" gap="0">
                <Text fontWeight="400" fontSize="14px" mb="2px">
                  {item.Thumbnail_Title}
                </Text>
                <Text
                  fontSize="11px"
                  padding="5px"
                  fontWeight="500"
                  mb="2px"
                  bg="rgba(53, 55, 59, 1)"
                  borderRadius="10px"
                >
                  {item.Video_duration} : 00 : 00
                </Text>
                <Text fontSize="12px" fontWeight="400" mb="2px">
                  Product Attached: {item.ProductCount || 5}
                </Text>
              </VStack>
            </Flex>
          ))
        ) : (
          <Text>No products available for this video.</Text>
        )}
      </Box>
      <Button
        bg={"#017EFA"}
        fontSize="14px"
        fontWeight={"500"}
        mt="5"
        alignSelf="center"
        padding="10px"
        borderRadius="10px"
        leftIcon={<RepeatIcon />}
      >
        Update Playlist
      </Button>
    </Box>
  );
};

export default RightSidebar;
