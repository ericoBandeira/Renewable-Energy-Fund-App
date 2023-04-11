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
  SecondHeaderBody,
  Amount,
  TotalAmount,
  Percentage,
  EarnButton,
  IncreaseIcon,
  PercentageText,
  ButtonIcon,
  ButtonText,
} from "./styles";

export function Home({ navigation }: any) {
  const [amount, setAmount] = useState("1,457.23");

  const icon = {
    up: "arrow-up-right",
    down: "arrow-down-right",
  };

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
          <SecondHeaderBody>
            <Amount>
              <TotalAmount>$1,245.23</TotalAmount>
              <Percentage>
                <IncreaseIcon name={icon["up"]} size={18} type="up" />
                <PercentageText type="up">31.82%</PercentageText>
              </Percentage>
            </Amount>
            <EarnButton>
              <ButtonIcon name="coins" size={18} />
              <ButtonText>Earn Rewards</ButtonText>
            </EarnButton>
          </SecondHeaderBody>
        </SecondHeader>
      </Header>
    </Container>
  );
}
