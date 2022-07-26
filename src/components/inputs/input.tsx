import { Input as NativeBaseInput, IInputProps } from "native-base";
import React from "react";

const Input = ({ ...rest }: IInputProps) => {
  return (
    <NativeBaseInput
      bg="gray.700"
      h={14}
      size="md"
      borderWidth={0}
      fontSize="md"
      fontFamily="body"
      color="white"
      placeholderTextColor="gray.300"
      placeholder="Email"
      _focus={{
        borderWidth: 1,
        borderColor: "green.500",
        borderRadius: 4,
      }}
      {...rest}
    />
  );
};

export default Input;
