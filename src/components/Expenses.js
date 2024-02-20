import { Box, Center, Divider, FlatList, HStack, Spacer, Text } from 'native-base';
import React from 'react';

const Expenses = () => {
    const data = [
        {
          itemName: "Income",
          amount: "2000",
        },
        {
          itemName: "Expense",
          amount: "1000",
        },
        {
          itemName: "others",
          amount: "2000",
        },
        {
          itemName: "others",
          amount: "2000",
        },
      ];
      return (
        <Box my={5}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Center>
                <Box py="2" w="80%">
                  <HStack space={2} justifyContent="space-between">
                    <Text color="white" fontSize="xl" bold>
                      {item.itemName}
                    </Text>
                    <Spacer />
                    <Text
                      fontSize="md"
                      bold
                      color={
                        item.itemName == "Income"
                          ? "green.700"
                          : item.itemName == "Expense"
                          ? "red.500"
                          : "white"
                      }
                      alignSelf="center"
                    >
                      {item.amount}
                    </Text>
                  </HStack>
                </Box>
              </Center>
            )}
            keyExtractor={(item, idx) => idx}
          />
          <Box>
            <Center>
              <Divider
                borderRadius="10"
                borderStyle="dashed"
                borderWidth={1}
                borderColor="white"
                width="80%"
              />
            </Center>
          </Box>
          <Center>
            <Box py="2" w="80%">
              <HStack space={2} justifyContent="space-between">
                <Text color="white" fontSize="xl" bold>
                  Balance
                </Text>
                <Spacer />
                <Text fontSize="md" bold color="cyan.300" alignSelf="center">
                  500
                </Text>
              </HStack>
            </Box>
          </Center>
        </Box>
      );
}

export default Expenses