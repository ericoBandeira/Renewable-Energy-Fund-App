import React from "react";

import { Title, Container } from "./styles";

interface CardProps {
  title?: string;
}

export function BlankCard({ title }: CardProps) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}
