import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden'> 
        <Image src={imageSrc} />  
        <VStack
          color="black"
          backgroundColor="white"
          alignItems="flex-start"
          spacing={4}
          padding={4}>          
            <Heading as="h4" size='md'>{title}</Heading>
            <Text>{description}</Text>
            <p>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></p>
        </VStack>
    </Box>
  );
};

export default Card;
