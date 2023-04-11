import React from "react";
import { RectButtonProperties } from "react-native-gesture-handler";
// import { LineGraph } from "react-native-graph";
// import gaussian from "gaussian";

import {
  Amount,
  ButtonIconFeather,
  ButtonIconIonicons,
  ButtonText,
  Container,
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

// interface GraphPoint {
//   value: number;
//   date: Date;
// }

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

const increaseIcon = {
  up: "arrow-up-right",
  down: "arrow-down-right",
};

// function weightedRandom(mean: number, variance: number): number {
//   var distribution = gaussian(mean, variance);
//   return distribution.ppf(Math.random());
// }

// export function generateRandomGraphData(length: number): GraphPoint[] {
//   return Array<number>(length)
//     .fill(0)
//     .map((_, index) => ({
//       date: new Date(
//         new Date(2000, 0, 1).getTime() + 1000 * 60 * 60 * 24 * index
//       ),
//       value: weightedRandom(10, Math.pow(index + 1, 2)),
//     }));
// }

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
      {/* <LineGraph
        points={generateRandomGraphData(9)}
        animated={true}
        style={{
          width: 40,
          height: 35,
          marginLeft: 5,
        }}
        color={type === "up" ? "#0FDF8F" : "#EE8688"}
      /> */}
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
