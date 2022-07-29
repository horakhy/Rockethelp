import { Text, HStack } from 'native-base'
import React from 'react'

export interface OrderData {
  id: string,
  patrimony: string,
  date: string,
  status: 'open' | 'closed',
}

interface OrderProps {
  data: OrderData;
}

const Order = ({ data, ...rest }: OrderProps) => {
  return (
    <HStack>
      <Text color="white" fontSize="md">Patrimônio: {data.patrimony}</Text>
    </HStack>
  )
}

export default Order