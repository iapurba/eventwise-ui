import PageTitle from "../common/Typography/PageTitleTypography";
import Typography from "@mui/material/Typography";
import { formatDate } from "../../utils/dateTimeFormatter";
import Box from "@mui/material/Box";
import { EventType } from "../../types/EventType";
import React from "react";


interface EventBasicInfoProps {
    event: EventType;
};

const EventBasicInfo: React.FC<EventBasicInfoProps> = ({ event }) => {
    return (
        <Box
            display="flex"
            flexDirection={'column'}
            alignItems="center"
            sx={{
                margin: '32px auto',
                textAlign: 'center'
            }}
        >
            <PageTitle gutterBottom >{event?.title}</PageTitle>
            <Typography>
                {`${event?.location?.venue}, ${event?.location?.address?.city}`}
                &nbsp; •  &nbsp;
                {`${formatDate(event?.startDate)} | ${event.startTime}`}
            </Typography>
        </Box>
    );
};

export default EventBasicInfo;