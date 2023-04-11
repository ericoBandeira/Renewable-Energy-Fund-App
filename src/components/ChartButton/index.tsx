import React from "react";
import { Image } from "react-native-elements/dist/image/Image";
import { RectButtonProperties } from "react-native-gesture-handler";

import {
  Amount,
  ButtonIconFeather,
  ButtonIconIonicons,
  ButtonText,
  Container,
  ImageGraph,
  IncreaseIcon,
  Percentage,
  PercentageText,
  TotalAmount,
} from "./styles";

interface InputProps extends RectButtonProperties {
  title: string;
  icon: "wind" | "sun" | "natural";
  type: "up" | "down";
  amount: string;
  percentage: string;
}

const buttonIcon = {
  wind: "wind",
  sun: "sun",
  natural: "leaf-outline",
};

const colorIcon = {
  wind: "#4A88D0",
  sun: "#F0A719",
  natural: "#0FDF8F",
};

const imageGraph = {
  wind: "../../utils/img/windGraph.png",
  sun: "../../utils/img/sunGraph.png",
  natural: "../../utils/img/naturalGraph.png",
};

const increaseIcon = {
  up: "arrow-up-right",
  down: "arrow-down-right",
};

export function ChartButton({
  title,
  icon = "wind",
  type = "up",
  amount,
  percentage,
  ...rest
}: InputProps) {
  return (
    <Container {...rest}>
      {icon !== "natural" ? (
        <ButtonIconFeather
          name={buttonIcon[icon]}
          color={colorIcon[icon]}
          size={18}
        />
      ) : (
        <ButtonIconIonicons
          name={buttonIcon[icon]}
          color={colorIcon[icon]}
          size={18}
        />
      )}

      <ButtonText>{title}</ButtonText>
      {icon === "wind" ? (
        <ImageGraph source={require("../../utils/img/windGraph.png")} />
      ) : icon === "sun" ? (
        <ImageGraph source={require("../../utils/img/sunGraph.png")} />
      ) : (
        <ImageGraph source={require("../../utils/img/naturalGraph.png")} />
      )}
      <Amount>
        <TotalAmount>{amount}</TotalAmount>
        <Percentage>
          <IncreaseIcon name={increaseIcon[type]} size={18} type={type} />
          <PercentageText type={type}>{percentage}</PercentageText>
        </Percentage>
      </Amount>
    </Container>
  );
}
