import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface FormHeaderProps {
    title: string;
    subtitle?: string;
};

const FormHeader = ({ title, subtitle }: FormHeaderProps) => {

    const titleStyle = {
        fontWeight: 'bold',
        color: '#45474D',
        fontSize: '15px',
    };

    return (
        <Box component="div">
            <Typography variant="subtitle1" sx={titleStyle}>
                {title}
            </Typography>

            {subtitle &&
                <Typography variant="subtitle2" sx={{
                    color: '#7A7C82',
                }}>
                    {subtitle}
                </Typography>
            }
        </Box>
    );
};

export default FormHeader;