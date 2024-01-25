import TicketButtonWrapper from "./TicketButton.styles";

interface TicketButtonProps {
    disabled?: boolean;
    label: string;
    onClick?: () => void;
}

const TicketButton = ({
    disabled = false,
    label,
    onClick,
}: TicketButtonProps) => {
    return (
        <TicketButtonWrapper
            className={`btn btn-ticket ${disabled? 'btn-disabled': ''}`}
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </TicketButtonWrapper>
    )
};

export default TicketButton;