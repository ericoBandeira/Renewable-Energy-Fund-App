import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

interface TypeProps {
  color: "purple" | "green" | "outline";
  disabled?: boolean;
}

interface TypePropsIncrease {
  type: "up" | "down";
}

export const Container = styled(RectButton)`
  display: flex;
  align-items: flex-start;
  padding: ${RFValue(12)}px ${RFValue(12)}px;
  margin-right: ${RFValue(15)}px;
  gap: 10px;

  border-radius: ${RFValue(4)}px;
  border: ${({ theme }) => `1px solid ${theme.colors.grey}`};
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.mid};
  font-size: 12px;
  line-height: 15px;

  color: ${({ theme }) => theme.colors.text_dark};
`;

export const ButtonIconFeather = styled(Feather)``;

export const ButtonIconIonicons = styled(Ionicons)``;

export const Amount = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TotalAmount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.mid};
  font-size: 14px;
  line-height: 30px;

  color: ${({ theme }) => theme.colors.text_dark};
`;

export const Percentage = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  font-size: 14px;
`;

export const IncreaseIcon = styled(Feather)<TypePropsIncrease>`
  color: ${({ theme, type }) =>
    type === "up" ? theme.colors.secondary : "#EE8688"};
`;

export const PercentageText = styled.Text<TypePropsIncrease>`
  color: ${({ theme, type }) =>
    type === "up" ? theme.colors.secondary : "#EE8688"};
`;

export const ImageGraph = styled.Image``;
