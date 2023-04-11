import React, { useState } from "react";
import {
  Container,
  Header,
  ProfileIcon,
  AccountAmount,
  IconDown,
  NotificationIcon,
  FirstHeader,
  SecondHeader,
  TitleSecondHeader,
} from "./styles";

export function Portfolio() {
  const [amount, setAmount] = useState("1,457.23");
  return (
    <Container>
      <Header>
        <FirstHeader>
          <ProfileIcon name="user" size={24} />
          <AccountAmount>
            Account: ${amount}
            <IconDown name="down" size={12} />
          </AccountAmount>
          <NotificationIcon name="ios-notifications-outline" size={24} />
        </FirstHeader>
        <SecondHeader>
          <TitleSecondHeader>Portfolio</TitleSecondHeader>
        </SecondHeader>
      </Header>
    </Container>
  );
}
