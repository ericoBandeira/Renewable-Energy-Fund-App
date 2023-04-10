import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
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
  BackButton,
  BackIcon,
  CheckBoxBody,
  CheckBoxInput,
  CheckBoxText,
  CheckBoxTextDark,
  SuccessContainer,
  SuccessIcon,
  SuccessText,
} from "./styles";

export function Register({ navigation }: any) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [check, setCheck] = useState(false);
  const [success, setSuccess] = useState(true);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  async function successAccount() {
    setSuccess(!success);
    await delay(2000);
    navigation.navigate("Login");
  }

  return success ? (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.navigate("Login")}>
          <BackIcon name="arrowleft" size={24} />
        </BackButton>
      </Header>
      <Title>Create your account</Title>
      <ScrollView>
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
        <CheckBoxBody>
          <CheckBoxInput checked={check} onIconPress={() => setCheck(!check)} />
          <CheckBoxText>
            I am over 18 years of age and I have read and agree{"\n"} to the{" "}
            <CheckBoxTextDark>Terms of Service</CheckBoxTextDark> and{" "}
            <CheckBoxTextDark>Privacy policy</CheckBoxTextDark>.
          </CheckBoxText>
        </CheckBoxBody>
        <Button
          title="Create account"
          disabled={
            !(
              email !== "" &&
              fname !== "" &&
              lname !== "" &&
              password.length >= 8 &&
              check
            )
          }
          onPress={() =>
            email !== "" &&
            fname !== "" &&
            lname !== "" &&
            password.length >= 8 &&
            check &&
            successAccount()
          }
        />
        <SignUpContainer>
          <SignUpButton>Already have an account? </SignUpButton>
          <TextButton
            title="Log in Here"
            color="dark"
            onPress={() => navigation.navigate("Login")}
          />
        </SignUpContainer>
      </ScrollView>
    </Container>
  ) : (
    <SuccessContainer>
      <SuccessIcon name="checkcircleo" size={150} color="#0FDF8F" />
      <SuccessText>Account created {"\n"}successfully</SuccessText>
    </SuccessContainer>
  );
}
