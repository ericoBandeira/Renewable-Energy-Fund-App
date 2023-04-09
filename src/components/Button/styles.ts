import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(16)}px ${RFValue(32)}px;
  margin: ${RFValue(15)}px ${RFValue(20)}px;
  gap: 10px;

  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${RFValue(4)}px;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;

  display: flex;
  align-items: center;
  text-align: center;

  color: ${({ theme }) => theme.colors.background};
`;
