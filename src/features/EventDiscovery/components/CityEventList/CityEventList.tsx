import Grid from '@mui/material/Grid';
import { Event } from '../../types/event.type';
import PrimaryEventCard from '../PrimaryEventCard/PrimaryEventCard';

interface CityEventListProps {
    events: Event[];
    onEventCardClick: (slug: string) => void;
}

const CityEventList: React.FC<CityEventListProps> = ({
    events,
    onEventCardClick
}) => {
    return (
        <Grid container spacing={4} pt={3}>
            {events.map((event: Event, index: number) => (
                <Grid item xs={12} sm={4} md={4} key={index}>
                    <div onClick={() => onEventCardClick(event?.slug)}>
                        <PrimaryEventCard
                            name={event.name}
                            dateTimeStr={event.dateTimeString}
                            eventType={event.eventType}
                            venue={event.venue.name}
                            city={event.city}
                            priceDisplayStr={event.priceDisplayString}
                        />
                    </div>
                </Grid>
            ))}
        </Grid>
    );
};

export default CityEventList;