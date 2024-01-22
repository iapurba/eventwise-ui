import TextField, { StandardTextFieldProps } from '@mui/material/TextField';
import {
    TextFieldWithBorderAndLabel,
    TextFieldWithBorderOnly,
    TextFieldWithBottomBorderAndLabel
} from './CustomTextField.styles';

interface CustomTextFieldProps extends StandardTextFieldProps {
    styleType: 'borderOnly' | 'borderAndLabel' | 'bottomBorderAndLabel';
    required?: boolean;
    placeholder?: string;
    label?: string;
    size?: 'small' | 'medium';
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
    styleType = 'borderOnly',
    required = false,
    placeholder = '',
    label,
    ...rest
}) => {
    switch (styleType) {
        case 'borderOnly':
            return (
                <TextFieldWithBorderOnly
                    required={required}
                    label={null}
                    placeholder={required ? `${placeholder}*` : placeholder}
                    {...rest}
                />
            );
        case 'borderAndLabel':
            return (
                <TextFieldWithBorderAndLabel
                    required={required}
                    label={label}
                    {...rest}
                />
            );
        case 'bottomBorderAndLabel':
            return (
                <TextFieldWithBottomBorderAndLabel
                    required={required}
                    label={label}
                    variant='standard'
                    {...rest}
                />
            );
        default:
            return <TextField {...rest} />;
    };
};

export default CustomTextField;