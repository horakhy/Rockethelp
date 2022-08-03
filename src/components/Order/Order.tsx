import { Text, HStack, Box, useTheme, VStack, Circle, IPressableProps } from "native-base";
import {
  CircleWavyCheck,
  ClockAfternoon,
  Database,
  Hourglass,
} from "phosphor-react-native";
import React from "react";
import { Pressable } from "native-base";

export interface OrderData {
  id: string;
  patrimony: string;
  date: string;
  status: "open" | "closed";
}

interface OrderProps extends IPressableProps {
  data: OrderData;
}

const Order = ({ data, ...rest }: OrderProps) => {
  const { colors } = useTheme();
  const statusColor =
    data.status === "open" ? colors.secondary[700] : colors.green[300];

  return (
    <Pressable {...rest}>
    <HStack
      bg="gray.600"
      mb={4}
      alignItems="center"
      justifyContent="space-between"
      rounded="sm"
      overflow="hidden"
    >
      <Box h="full" w={2} bg={statusColor} />

      <VStack flex={1} my={5} ml={5}>
        <Text color="white" fontSize="md">
          Patrimônio: {data.patrimony}
        </Text>
        <HStack alignItems="center">
          <ClockAfternoon size={15} color={colors.gray[300]} />
          <Text color="gray.200" fontSize="xs" ml={1}>
            {data.date}
          </Text>
        </HStack>
      </VStack>

      <Circle bg="gray.500" h={12} w={12} mr={5}>
        {data.status === "open" ? (
          <CircleWavyCheck size={24} color={statusColor} />
        ) : (
          <Hourglass size={24} color={statusColor} />
        )}
      </Circle>
    </HStack>
    </Pressable>
  );
};

export default Order;
