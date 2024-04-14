import { IconOnlyButtonWrapper, IconTextButtonWrapper } from './HeaderButton.styles';

interface HeaderButtonProps {
    startIcon: React.ComponentType;
    label?: string;
    endIcon?: React.ComponentType | null;
    onClick?: () => void;
    active?: boolean;
}

const HeaderButton = ({
    startIcon: StartIcon,
    label,
    endIcon: EndIcon,
    onClick,
    active,
    ...props
}: HeaderButtonProps) => {
    return (
        <>{label ? (
            <IconTextButtonWrapper
                className={`btn btn-header btn-icon-text 
                ${active ? 'btn-active' : ''}`}
                startIcon={<StartIcon />}
                endIcon={EndIcon ? <EndIcon /> : null}
                onClick={onClick}
                {...props}
            >
                {label}
            </IconTextButtonWrapper>
        ) : (
            <IconOnlyButtonWrapper
                className='btn btn-header btn-icon-only'
                onClick={onClick}
                {...props}
            >
                <StartIcon />
            </IconOnlyButtonWrapper>
        )}
        </>
    );
};

export default HeaderButton;