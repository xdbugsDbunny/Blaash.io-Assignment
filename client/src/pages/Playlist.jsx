import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import {
  Box,
  Card,
  CardHeader,
  Flex,
  Text,
  Image,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import axios from "axios";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";

import more from "../assets/more.png";
import videoIcon from "../assets/videoIcon.png";
import RightSidebar from "../components/RightSidebar";

const Playlist = () => {
  const heading = "Product Playlist";
  const [data, setData] = useState([]);
  const [selectedCardData, setSelectedCardData] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const images = [image1, image2, image3, image4, image5, image6];

  const getData = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_PLAYLIST_URL}/getAllPlayList`,
        { Content_Type: 2 },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": `${import.meta.env.VITE_X_API_KEY}`,
            "X-Tenant-Key": `${import.meta.env.VITE_TENANT_KEY}`,
          },
        }
      );
      const responseData = response.data.data;

      const dataWithImages = responseData.map((item, index) => ({
        ...item,
        image: images[index % images.length],
      }));

      setData(dataWithImages);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleCardClick = (item) => {
    setSelectedCardData(item);
    setIsSidebarOpen(true);
  };

  return (
    <Layout heading={heading}>
      <Flex gap="5" h="100%">
        <Flex
          wrap="wrap"
          gap="4"
          rowGap="0"
          justifyContent="space-evenly"
          alignItems="start"
          bg={"#27272F"}
          padding="10px"
          borderRadius="16px"
          height="100%"
        >
          {data.map((item, index) => (
            <Card
              key={index}
              maxW="md"
              color="white"
              backgroundImage={`url(${item.image})`}
              w="250px"
              h="200px"
              borderRadius="25px"
              display="flex"
              justifyContent="space-between"
              overflow="hidden"
              backgroundSize="cover"
              backgroundPosition="center"
              onClick={() => handleCardClick(item)} // Handle card click
              cursor="pointer"
            >
              <CardHeader
                alignSelf="end"
                borderBottomLeftRadius="15px"
                width="35px"
                height="35px"
                bg="#35373B"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Image src={more} />
              </CardHeader>
              <CardBody display="flex" h="100%" alignItems="flex-end" mb="1">
                <Flex justifyContent="center" alignItems="center" gap="2">
                  <Box
                    w="26px"
                    h="21px"
                    borderTopRightRadius="30px"
                    borderBottomRightRadius="30px"
                    bg="#017EFA"
                  ></Box>
                  <Text fontFamily="Rubik" fontSize="14px">
                    {item.Name || `Playlist ${index + 1}`}
                  </Text>
                </Flex>
              </CardBody>
              <CardFooter
                w="full"
                bg="#1C1C23"
                h="50px"
                padding="10px"
                justifyContent="center"
                gap="5px"
                alignItems="center"
              >
                <Image src={videoIcon} />
                {item.Post_Ids.length} Videos
              </CardFooter>
            </Card>
          ))}
        </Flex>
        {isSidebarOpen && (
          <RightSidebar
            isOpen={isSidebarOpen}
            postIds={selectedCardData.Post_Ids}
            name={selectedCardData.Name}
            description={selectedCardData.Description}
            onClose={() => setIsSidebarOpen(false)}
          />
        )}
      </Flex>
    </Layout>
  );
};

export default Playlist;
