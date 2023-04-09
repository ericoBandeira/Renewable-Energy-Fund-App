import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";
import { Container, Header, Title } from "./styles";

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Container>
      <Header />
      <Title>Login</Title>
      <Input
        autoCapitalize="none"
        title="E-mail"
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <InputPassword
        autoCapitalize="none"
        title="Password"
        placeholder="Minimum 8 characters"
        secureTextEntry={showPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" />
    </Container>
  );
}
