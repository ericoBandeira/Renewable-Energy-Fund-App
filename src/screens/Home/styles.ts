import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";

interface TypeProps {
  type: "up" | "down";
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding-bottom: ${RFValue(20)}px;
`;

export const Header = styled.SafeAreaView`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.grey};

  background-color: ${({ theme }) => theme.colors.background};
`;

export const ProfileIcon = styled(Feather)``;

export const AccountAmount = styled.Text`
  font-family: "Sora_600SemiBold";
  font-size: 14px;
  align-items: center;

  color: ${({ theme }) => theme.colors.text_dark};
`;

export const IconDown = styled(AntDesign)`
  padding-left: ${RFValue(15)}px;
`;

export const NotificationIcon = styled(Ionicons)``;

export const FirstHeader = styled.View`
  padding: ${RFValue(10)}px ${RFValue(20)}px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
export const SecondHeader = styled.View`
  padding: ${RFValue(5)}px ${RFValue(20)}px ${RFValue(15)}px ${RFValue(20)}px;
`;

export const TitleSecondHeader = styled.Text`
  font-family: "Sora_400Regular";
  padding-bottom: ${RFValue(5)}px;
`;

export const SecondHeaderBody = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Amount = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TotalAmount = styled.Text`
  font-family: "Sora_600SemiBold";
  font-size: 24px;
  line-height: 30px;

  color: ${({ theme }) => theme.colors.text_dark};
`;

export const Percentage = styled.View`
  align-items: center;
  flex-direction: row;
  padding-top: ${RFValue(5)}px;
`;

export const EarnButton = styled(RectButton)`
  align-items: center;
  flex-direction: row;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 9px;

  background: #f7efff;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  font-family: "Sora_600SemiBold";
  font-size: 11px;
  padding-left: ${RFValue(5)}px;

  color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonIcon = styled(FontAwesome5)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const IncreaseIcon = styled(Feather)<TypeProps>`
  color: ${({ theme, type }) =>
    type === "up" ? theme.colors.secondary : "red"};
`;

export const PercentageText = styled.Text<TypeProps>`
  color: ${({ theme, type }) =>
    type === "up" ? theme.colors.secondary : "red"};
`;

export const Body = styled.ScrollView``;

export const BodyTitle = styled.Text`
  padding: ${RFValue(20)}px;
  font-family: "Sora_600SemiBold";
  font-size: 18px;
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.text_dark};
`;

export const ButtonsPainels = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})``;

export const Banner = styled.View`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: ${RFValue(19)}px;
`;
export const BannerTexts = styled.View`
  padding: ${RFValue(20)}px;
`;
export const BannerTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.mid};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.background};
`;
export const BannerText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
  padding-top: ${RFValue(10)}px;

  color: ${({ theme }) => theme.colors.background};
`;
export const BannerImg = styled.Image`
  margin-right: ${RFValue(20)}px;
`;

export const BlankCardsBody = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 ${RFValue(20)}px;
`;
