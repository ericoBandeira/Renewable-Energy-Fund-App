import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

interface TypeProps {
  color: "purple" | "green" | "outline";
  disabled?: boolean;
}

export const Container = styled.View`
  width: ${RFValue(130)}px;
  height: ${RFValue(210)}px;
  background: #f4f4f4;
  border-radius: 10px;
`;
export const Title = styled.Text`
  padding: ${RFValue(15)}px ${RFValue(12)}px;
`;
