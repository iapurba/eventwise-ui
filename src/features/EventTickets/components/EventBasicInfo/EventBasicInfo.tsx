import React from 'react';
import Typography from '@mui/material/Typography';
import { BulletMark, EventBasicInfoWrapper, EventTitleText } from './EventBasicInfo.styles';

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
        <EventBasicInfoWrapper className='event-basic-info'>
            <EventTitleText >{name}</EventTitleText>
            <Typography>
                {`${locationDisplayString}`}
                <BulletMark />
                {` ${dateTimeDisplayString}`}
            </Typography>
        </EventBasicInfoWrapper>
    );
};

export default EventBasicInfo;