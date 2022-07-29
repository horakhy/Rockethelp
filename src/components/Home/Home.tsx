import React, { useState } from "react";
import { SignOut } from "phosphor-react-native";
import {
  Heading,
  HStack,
  IconButton,
  Text,
  useTheme,
  FlatList,
  VStack,
} from "native-base";

import Logo from "../../assets/logo_secondary.svg";
import Filter from "../Filter/Filter";
import Order, { OrderData } from "../Order/Order";

const Home = () => {
  const { colors } = useTheme();
  const [statusSelected, setStatusSelected] = useState<"open" | "closed">("open");
  const [orders, setOrders] = useState<OrderData[]>([{
    id: '1',
    patrimony: '1234',
    date: '2020-01-01',
    status: 'open',
  }]);

  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />
        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack
          w="full"
          mt={8}
          mb={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading color="gray.100" fontSize="xl" mb={4}>
            Meus chamados
          </Heading>
          <Text color="gray.200">5</Text>
        </HStack>
        <HStack w="full" space={2} mb={8}>
          <Filter
            title="Em Andamento"
            type="open"
            onPress={() => setStatusSelected("open")}
            isActive={statusSelected === "open"}
          />
          <Filter
            title="Finalizado"
            type="closed"
            onPress={() => setStatusSelected("closed")}
            isActive={statusSelected === "closed"}
          />
        </HStack>
        <FlatList data={orders} keyExtractor={item => item.id} renderItem={({ item }) => <Order data={item} />} />
      </VStack>
    </VStack>
  );
};

export default Home;
