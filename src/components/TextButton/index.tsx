import React from "react";
import { RectButtonProperties } from "react-native-gesture-handler";

import { ButtonText, Container } from "./styles";

interface InputProps extends RectButtonProperties {
  title: string;
  color?: "grey" | "dark";
}

export function TextButton({ title, color = "grey", ...rest }: InputProps) {
  return (
    <Container {...rest} color={color}>
      <ButtonText color={color}>{title}</ButtonText>
    </Container>
  );
}
