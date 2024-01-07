import React from "react";
import Typography from "@mui/material/Typography";
import ContentBoxWrapper from "../../../components/common/wrappers/ContentBoxWrapper"
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import CustomAgeIcon from "../../../components/common/Icons/CustomAgeIcon";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '28px'
}));

const StyledTypography1 = styled(Typography)(() => ({
    color: '#7A7C82',
    fontSize: '14px'
}));

const StyledTypography2 = styled(Typography)(() => ({
    fontSize: '16px'
}));
interface ExtraInfo {
    _id: string;
    title: string;
    text: string;
    imageUrl: string;
}
interface EventGuideProps {
    extraInfo: ExtraInfo[]
};

const EventGuide: React.FC<EventGuideProps> = ({ extraInfo }) => {
    return (
        <ContentBoxWrapper mt={3}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }} mb={1}>
                Event Guide
            </Typography>
            <Divider />
            {extraInfo.map((item, index) => (
                <StyledBox marginTop={index === 0 ? '18px' : 0}>
                    <CustomAgeIcon />
                    <Box ml={3}>
                        <StyledTypography1>{item.title}</StyledTypography1>
                        <StyledTypography2>{item.text}</StyledTypography2>
                    </Box>
                </StyledBox>
            ))}
        </ContentBoxWrapper>
    );
};

export default EventGuide;