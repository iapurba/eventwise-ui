import { ReactNode } from "react";
import ButtonOneWrapper from "./ButtonOne.styles";

interface ButtonOneProps {
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    label: string;
    children?: ReactNode;
    onClick?: () => void;
}

const ButtonOne = ({
    primary = true,
    children,
    label,
    onClick,
    ...props
}: ButtonOneProps) => {
    return (
        <ButtonOneWrapper
            className={primary ? 'primary' : 'secondary'}
            onClick={onClick}
            {...props}
        >{label}
        </ButtonOneWrapper>
    );
};

export default ButtonOne;