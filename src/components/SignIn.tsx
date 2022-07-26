import React from "react";
import { VStack, Heading, Icon, useTheme } from "native-base";
import Logo from "../assets/logo_primary.svg";
import Input from "./inputs/input";
import { Envelope, Key } from "phosphor-react-native";
import Button from "./buttons/Button";

export const SignIn = () => {
  const { colors } = useTheme();
  
  return (
    <VStack flex={1} alignItems="center" bg="gray.400" px={8} pt={12}>
      <Logo />
      <Heading color="gray.100" fontSize="xl">
        Acessa ae
      </Heading>
      <Input
        placeholder="Email"
        mb={4}
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
      />
      <Input placeholder="Senha"
        mb={4}
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        secureTextEntry
      />

      <Button title="Yoooo" w="full"/>
    </VStack>
  );
};
