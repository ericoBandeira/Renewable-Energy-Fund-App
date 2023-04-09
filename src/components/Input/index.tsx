import React from "react";
import { TextInputProps } from "react-native";

import { Container, Title, Body } from "./styles";

interface InputProps extends TextInputProps {
  title: string;
}

export function Input({ title, ...rest }: InputProps) {
  return (
    <Body>
      <Title>{title}</Title>
      <Container {...rest} />
    </Body>
  );
}
