import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

interface TypeProps {
  color: "purple" | "green" | "outline";
  disabled?: boolean;
}

export const Container = styled(RectButton)<TypeProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(16)}px ${RFValue(32)}px;
  margin: ${RFValue(15)}px ${RFValue(20)}px;
  gap: 10px;

  background: ${({ theme, color, disabled }) =>
    disabled
      ? theme.colors.text
      : color === "green"
      ? theme.colors.secondary
      : color === "purple"
      ? theme.colors.primary
      : theme.colors.background};
  border-radius: ${RFValue(4)}px;
  border: ${({ theme, color }) =>
    color === "outline" ? `1px solid ${theme.colors.grey}` : "none"};
`;

export const ButtonText = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;

  display: flex;
  align-items: center;
  text-align: center;

  color: ${({ theme, color }) =>
    color === "outline" ? theme.colors.primary : theme.colors.background};
`;
