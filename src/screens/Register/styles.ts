import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { AntDesign } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(95)}px;
  margin-bottom: ${RFValue(20)}px;
  border: 1px solid ${({ theme }) => theme.colors.grey};

  background-color: ${({ theme }) => theme.colors.background};

  padding-top: ${RFValue(60)}px;
  padding-left: ${RFValue(16)}px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`;

export const BackButton = styled.TouchableOpacity`
  align-items: center;
`;

export const BackIcon = styled(AntDesign)``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 18px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;

  padding-bottom: ${RFValue(24)}px;

  color: ${({ theme }) => theme.colors.text_dark};
`;

export const SignUpContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SignUpButton = styled.Text`
  font-family: "Sora_400Regular";
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};
`;

export const CheckBoxBody = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 ${RFValue(5)}px;
`;

export const CheckBoxText = styled.Text`
  font-family: "Sora_400Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text};
`;

export const CheckBoxTextDark = styled.Text`
  font-family: "Sora_400Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const CheckBoxInput = styled(CheckBox)`
  padding: 0;
  margin: 0 !important;
`;
