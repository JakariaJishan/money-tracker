import {
  Box,
  Center,
  Container,
  Heading,
  NativeBaseProvider,
  Text,
  ZStack,
} from "native-base";
import React from "react";

const HomeScreen = () => {
  return (
    <NativeBaseProvider>
      <Box>
        <Box
          alignSelf="center"
          _text={{
            fontSize: "md",
            fontWeight: "medium",
            color: "warmGray.50",
            letterSpacing: "lg",
          }}
          bg={["red.400", "blue.400"]}
        >
          This is a Box
        </Box>
      </Box>
      <Center>
        <Center
          bg="primary.400"
          _text={{
            color: "white",
            fontWeight: "bold",
          }}
          height={200}
          width={{
            base: 200,
            lg: 250,
          }}
        >
          This is the Center
        </Center>
      </Center>
      {/* Container */}
      <Center>
        <Container>
          <Heading>
            A component library for the
            <Text color="emerald.500"> React Ecosystem</Text>
          </Heading>
          <Text mt="3" fontWeight="medium">
            NativeBase is a simple, modular and accessible component library
            that gives you building blocks to build you React applications.
          </Text>
        </Container>
      </Center>

      {/* Zstack */}

      <Center h="40">
        <Box mt="-32">
          <ZStack mt="3" ml={-50}>
            <Box bg="red.700" size="40" rounded="lg" shadow={3} />
            <Box
              bg="green.500"
              mt="5"
              ml="5"
              size="40"
              rounded="lg"
              shadow={5}
            />
            <Box
              bg="yellow.300"
              mt="10"
              ml="10"
              size="40"
              rounded="lg"
              shadow={7}
            />
          </ZStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default HomeScreen;
