import {FC} from "react";
import {CssSpan} from "./Typography.styled";

export type TypographyVariant = "h1" | "h2" | "body1" | "body2" | "caption"
interface TypographyProps {
    variant: TypographyVariant
    label: string
}
export const Typography: FC<TypographyProps> = ({variant, label}) => {
    return <CssSpan variant={variant}>{label}</CssSpan>
}