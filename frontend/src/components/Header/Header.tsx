import {FC} from "react";
import {CssHeaderWrapper} from "./Header.styled";
import {Typography} from "../Typography";
import {Button} from "../Button";

export const Header: FC = () => {
    return <CssHeaderWrapper>
        <Typography variant={"h1"} label={"NFT Creator"}/>
        <Button onClick={() => console.log("xd")}  label={"Connect Wallet"}/>
    </CssHeaderWrapper>
}