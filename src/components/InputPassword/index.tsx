import React from "react";
import { TextInputProps } from "react-native";

import { InputText, Title, Body, Icon, BodyButton, Button } from "./styles";

interface InputProps extends TextInputProps {
  title: string;
  showPassword?: boolean | undefined;
  setShowPassword?: any;
}

export function InputPassword({
  title,
  showPassword = false,
  setShowPassword,
  ...rest
}: InputProps) {
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Body>
      <Title>{title}</Title>
      <BodyButton>
        <InputText secureTextEntry={showPassword} {...rest} />
        <Button onPress={toggleShowPassword}>
          <Icon name={showPassword ? "eye-off" : "eye"} size={24} />
        </Button>
      </BodyButton>
    </Body>
  );
}
