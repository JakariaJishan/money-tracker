import { Box, Center, Text } from 'native-base'
import React from 'react'

const Item = ({icon: Icon, text}) => {
  return (
    <Center>
    <Box alignItems="center">
      <Icon size="xl" />
      <Text color="light.600">{text}</Text>
    </Box>
  </Center>
  )
}

export default Item