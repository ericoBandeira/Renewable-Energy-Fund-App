import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(113)}px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

    background-color: ${({ theme }) => theme.colors.background};

    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
`;


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
`