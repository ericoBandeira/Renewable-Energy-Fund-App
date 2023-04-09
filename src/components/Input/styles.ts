import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { Feather } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(TextInput)`
  width: 100%;
  padding: ${RFValue(15)}px ${RFValue(10)}px;

  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.text_dark};
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 5px;

  margin-bottom: 8px;
`;

export const Body = styled.View`
  padding: ${RFValue(10)}px ${RFValue(20)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 11px;
  line-height: 14px;
  letter-spacing: -0.02em;

  padding-bottom: ${RFValue(5)}px;

  color: ${({ theme }) => theme.colors.text}; ;
`;
