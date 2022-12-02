import {FC} from "react";
import {CssButtonWrapper} from "./Button.styled";
import {Typography} from "../Typography";

interface ButtonProps {
    onClick: () => void,
    label: string
}
export const Button: FC<ButtonProps> = ({onClick, label}) => {
    return <CssButtonWrapper onClick={onClick}>
        <Typography variant={"body1"} label={label}/>
    </CssButtonWrapper>
}