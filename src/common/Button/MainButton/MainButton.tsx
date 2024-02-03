import { ReactNode } from "react";
import MainButtonWrapper from "./MainButton.styles";
import { ButtonProps } from "@mui/material";

interface MainButtonProps extends ButtonProps {
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    label: string;
    children?: ReactNode;
    onClick?: any;
}

const MainButton = ({
    primary = true,
    children,
    label,
    onClick,
    ...props
}: MainButtonProps) => {
    return (
        <MainButtonWrapper
            className={primary ? 'primary' : 'secondary'}
            onClick={onClick}
            {...props}
        >{label}
        </MainButtonWrapper>
    );
};

export default MainButton;