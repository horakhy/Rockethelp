import React, { useState } from "react";
import { VStack, Heading, Icon, useTheme } from "native-base";
import Logo from "../assets/logo_primary.svg";
import Input from "./inputs/input";
import { Envelope, Key } from "phosphor-react-native";
import Button from "./buttons/Button";

export const SignIn = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { colors } = useTheme();

  console.log({name});
  console.log({password});

  const handleSignIn = () => {
    console.log("Sign in");
  }

  return (
    <VStack flex={1} alignItems="center" bg="gray.400" px={8} pt={12}>
      <Logo />
      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acessa sua conta {name}
      </Heading>
      <Input
        placeholder="Email"
        onChangeText={(text) => setName(text)}
        mb={4}
        InputLeftElement={
          <Icon as={<Envelope color={colors.gray[300]} />} ml={4} />
        }
      />
      <Input
        placeholder="Senha"
        mb={4}
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      <Button title="Entrar" w="full" onPress={handleSignIn} />
    </VStack>
  );
};
