import React from "react";
import { RectButtonProperties } from "react-native-gesture-handler";

import { ButtonText, Container } from "./styles";

interface InputProps extends RectButtonProperties {
  title: string;
  color?: "purple" | "green" | "outline";
  disabled?: boolean;
}

export function Button({
  title,
  color = "purple",
  disabled,
  ...rest
}: InputProps) {
  return (
    <Container {...rest} disabled={disabled} color={color}>
      <ButtonText color={color}>{title}</ButtonText>
    </Container>
  );
}
