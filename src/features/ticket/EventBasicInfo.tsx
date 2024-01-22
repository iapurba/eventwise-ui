import React from "react";
import PageHeaderText from "../../components/common/Typography/PageHeaderText";
import Typography from "@mui/material/Typography";
import PageHeaderWrapper from "../../components/common/wrappers/PageHeaderWrapper";

interface EventBasicInfoProps {
    name: string;
    dateTimeDisplayString: string;
    locationDisplayString: string;
};

const EventBasicInfo: React.FC<EventBasicInfoProps> = ({
    name,
    dateTimeDisplayString,
    locationDisplayString,
}) => {
    return (
        <PageHeaderWrapper>
            <PageHeaderText >{name}</PageHeaderText>
            <Typography>
                {`${locationDisplayString} • ${dateTimeDisplayString}`}
            </Typography>
        </PageHeaderWrapper>
    );
};

export default EventBasicInfo;