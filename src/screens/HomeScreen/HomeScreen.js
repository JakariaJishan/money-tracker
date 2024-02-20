import { AddIcon, Box, Button, Center, CheckIcon, ChevronLeftIcon, ChevronRightIcon, Divider, HStack, NativeBaseProvider, PlayIcon, QuestionOutlineIcon, Select, Text } from 'native-base';
import React, { useState } from 'react';
import Expenses from '../../components/Expenses';
import Item from '../../components/Item';

const HomeScreen = () => {
    const [service, setService] = useState("");
    return (
      <NativeBaseProvider>
        <HStack justifyContent="start">
          <Center marginLeft={3}>
            <QuestionOutlineIcon size="xl" />
          </Center>
          <Center flex={1}>
            <Box maxW="300">
              <Select
                borderRadius="10"
                textAlign="center"
                placeholderTextColor="muted.400"
                fontSize="16"
                selectedValue={service}
                maxWidth="200"
                accessibilityLabel="Search"
                placeholder="Search"
                _selectedItem={{
                  bg: "muted.600",
                  endIcon: <CheckIcon size="xs" color="emerald.500" />,
                }}
                dropdownIcon={true}
                mt={1}
                onValueChange={(itemValue) => setService(itemValue)}
              >
                <Select.Item label="2023" value="2023" />
                <Select.Item label="2023" value="2023" />
                <Select.Item label="2023" value="2023" />
                <Select.Item label="2023" value="2023" />
              </Select>
            </Box>
          </Center>
          <Center style={{visibility: "hidden"}}>
            <QuestionOutlineIcon size="xl" />
          </Center>
        </HStack>
        <Box flex={1} backgroundColor="muted.400" mt={1}>
          <HStack justifyContent="center" my={2} space={6}>
            <ChevronLeftIcon size="md" color="white" />
            <ChevronRightIcon size="md" color="white" />
          </HStack>
          <Center>
            <Divider
              borderRadius="10"
              borderStyle="solid"
              borderColor="white"
              borderWidth={1}
              width="80%"
              bg="red.600"
              thickness={10}
            />
          </Center>
          <Expenses />
          <Box marginTop="auto" width="60%" mx="auto" mb="3" >
            <HStack direction="row" justifyContent="center" space={6}>
              <Button
                variant="outline"
                leftIcon={<AddIcon />}
                colorScheme="white"
                color="white"
                borderWidth={2}
                _text={{
                  color: "white",
                  fontWeight: "bold"
  
                }}
              >
                Expense
              </Button>
              <Button
                variant="outline"
                leftIcon={<AddIcon />}
                colorScheme="white"
                color="white"
                borderWidth={2}
                _text={{
                  color: "white",
                  fontWeight: "bold"
                }}
              >
                Income
              </Button>
            </HStack>
          </Box>
          <Box mb={2}>
            <Center>
              <Text color="gray.300" bold>** Rotate device to view reports **</Text>
            </Center>
          </Box>
        </Box>
        <HStack direction="row" space={8} justifyContent="center" p={4}>
          <Item icon={PlayIcon} text="Spending" />
          <Item icon={PlayIcon} text="Paused" />
          <Item icon={PlayIcon} text="Stopped" />
          <Item icon={PlayIcon} text="Stopped" />
        </HStack>
      </NativeBaseProvider>
    );
}

export default HomeScreen