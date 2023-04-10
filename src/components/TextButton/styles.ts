import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

interface TypeProps {
  color?: "grey" | "dark";
}

export const Container = styled(RectButton)<TypeProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: ${RFValue(4)}px;
  border: none;
`;

export const ButtonText = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};

  display: flex;
  align-items: center;
  text-align: center;
  text-decoration: underline;
`;
