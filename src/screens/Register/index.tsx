import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";
import { TextButton } from "../../components/TextButton";
import {
  Container,
  Header,
  SignUpButton,
  SignUpContainer,
  Title,
} from "./styles";

export function Register({ navigation }: any) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");

  return (
    <Container>
      <Header />
      <Title>Create your account</Title>
      <Input
        autoCapitalize="none"
        title="First Name"
        placeholder="First Name"
        value={fname}
        onChangeText={setFName}
      />
      <Input
        autoCapitalize="none"
        title="Last Name"
        placeholder="Last Name"
        value={lname}
        onChangeText={setLName}
      />
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
      <Button title="Create account" />
      <SignUpContainer>
        <SignUpButton>Already have an account? </SignUpButton>
        <TextButton
          title="Log in Here"
          color="dark"
          onPress={() => navigation.navigate("Login")}
        />
      </SignUpContainer>
    </Container>
  );
}
