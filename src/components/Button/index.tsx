import React from "react";
import { RectButtonProperties } from "react-native-gesture-handler";

import { ButtonText, Container } from "./styles";

interface InputProps extends RectButtonProperties {
  title: string;
}

export function Button({ title, ...rest }: InputProps) {
  return (
    <Container {...rest}>
      <ButtonText>{title}</ButtonText>
    </Container>
  );
}
