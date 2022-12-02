import styled, {css} from "styled-components";
import {TypographyVariant} from "./Typography";
import {theme, Typography} from "../../theme";

const getTypographyByVariant = (variant: TypographyVariant): Typography => {
    return theme.typographies[variant]
}

export const CssSpan = styled.span<{variant: TypographyVariant}>(({variant}) => css`
    font-size: ${getTypographyByVariant(variant).fontSize};
  font-weight: ${getTypographyByVariant(variant).fontWeight};
  color: ${getTypographyByVariant(variant).color};
`)