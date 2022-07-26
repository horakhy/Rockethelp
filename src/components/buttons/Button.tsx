import { Button as NativeBaseButton, Heading, IButtonProps } from "native-base";
import React from "react";

interface ButtonProps extends IButtonProps {
  title: string;
}

// Another way of writing the same code
// type ButtonProps = IButtonProps & {
//   title: string;
// }

const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <NativeBaseButton
      bg="green.700"
      h={14}
      fontSize="sm"
      rounded="sm"
      _pressed={{ bg: "green.600" }}
      {...rest}
    >
      <Heading fontSize="sm" color="white">{title}</Heading>
    </NativeBaseButton>
  );
};

export default Button;
