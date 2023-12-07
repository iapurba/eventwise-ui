import PageTitleTypography from "../common/Typography/PageTitleTypography";
import Typography from "@mui/material/Typography";
import { formatDate } from "../../utils/dateTimeFormatter";
import { EventType } from "../../types/EventType";
import React from "react";
import PageTitleWrapper from "../common/Wrappers/PageTitleWapper";


interface EventBasicInfoProps {
    event: EventType;
};

const EventBasicInfo: React.FC<EventBasicInfoProps> = ({ event }) => {
    return (
        <PageTitleWrapper>
            <PageTitleTypography gutterBottom >{event?.title}</PageTitleTypography>
            <Typography>
                {`${event?.location?.venue}, ${event?.location?.address?.city}`}
                &nbsp; •  &nbsp;
                {`${formatDate(event?.startDate)} | ${event.startTime}`}
            </Typography>
        </PageTitleWrapper>
    );
};

export default EventBasicInfo;