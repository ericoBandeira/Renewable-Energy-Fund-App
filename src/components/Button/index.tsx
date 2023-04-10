import React from "react";
import { RectButtonProperties } from "react-native-gesture-handler";

import { ButtonText, Container } from "./styles";

interface InputProps extends RectButtonProperties {
  title: string;
  color?: "purple" | "green" | "outline";
}

export function Button({ title, color = "purple", ...rest }: InputProps) {
  return (
    <Container {...rest} color={color}>
      <ButtonText color={color}>{title}</ButtonText>
    </Container>
  );
}
