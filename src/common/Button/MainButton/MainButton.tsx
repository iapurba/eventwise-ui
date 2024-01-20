import { ReactNode } from "react";
import MainButtonWrapper from "./MainButton.styles";

interface MainButtonProps {
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    label: string;
    children?: ReactNode;
    onClick?: () => void;
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