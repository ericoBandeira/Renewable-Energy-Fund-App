import React, { useState } from "react";
import { BlankCard } from "../../components/BlankCard";
import { ChartButton } from "../../components/ChartButton";
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
  Body,
  BodyTitle,
  ButtonsPainels,
  Banner,
  BannerTexts,
  BannerTitle,
  BannerText,
  BannerImg,
  BlankCardsBody,
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

      <Body>
        <BodyTitle>Funds</BodyTitle>
        <ButtonsPainels>
          <ChartButton
            amount="$1032.23"
            title="Wind Fund"
            icon="wind"
            type="up"
            percentage="3.51%"
          />
          <ChartButton
            amount="$986.61"
            title="Solar Fund"
            icon="sun"
            type="down"
            percentage="0.13%"
          />
          <ChartButton
            amount="$1122.95"
            title="Natural Fund"
            icon="natural"
            type="up"
            percentage="1.23%"
          />
        </ButtonsPainels>

        <Banner>
          <BannerTexts>
            <BannerTitle>Learn more about {"\n"}carbon credits</BannerTitle>
            <BannerText>Check out our top tips!</BannerText>
          </BannerTexts>
          <BannerImg source={require("../../utils/img/business.png")} />
        </Banner>
        <BlankCardsBody>
          <BlankCard title="Why should you invest here?" />
          <BlankCard />
        </BlankCardsBody>
      </Body>
    </Container>
  );
}
