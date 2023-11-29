import React from "react";
import Typography from "@mui/material/Typography";
import ContentBoxWrapper from "../common/ContentBoxWrapper"
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import CustomAgeIcon from "../common/Icons/CustomAgeIcon";
import { styled } from "@mui/material/styles";
import { LanguageIcon, MicIcon } from "../common/Icons/StyledIcons";

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

interface EventGuideProps {
    ageRequirment: string;
    languages: [string];
    livePerformance?: boolean;
};

const EventGuide: React.FC<EventGuideProps> = (props) => {
    const { ageRequirment, languages, livePerformance } = props;

    const joinedLanguages: string = languages.join(", ");

    return (
        <ContentBoxWrapper mt={3}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }} mb={1}>
                Event Guide
            </Typography>
            <Divider />
            <StyledBox marginTop={'18px'}>
                <CustomAgeIcon />
                <Box ml={3}>
                    <StyledTypography1>{'For Age (s)'}</StyledTypography1>
                    <StyledTypography2>{ageRequirment}</StyledTypography2>
                </Box>
            </StyledBox>
            <StyledBox>
                <LanguageIcon />
                <Box ml={3}>
                    <StyledTypography1>{'Language'}</StyledTypography1>
                    <StyledTypography2>{joinedLanguages}</StyledTypography2>
                </Box>
            </StyledBox>
            {livePerformance &&
                <StyledBox>
                    <MicIcon />
                    <Box ml={3}>
                        <StyledTypography1>{'Live Performance'}</StyledTypography1>
                        <StyledTypography2>{'Enjoy a unique experice'}</StyledTypography2>
                    </Box>
                </StyledBox>
            }
        </ContentBoxWrapper>
    );
};

export default EventGuide;