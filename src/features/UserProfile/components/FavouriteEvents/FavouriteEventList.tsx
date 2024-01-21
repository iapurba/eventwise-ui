import React from 'react';
import FavouriteEventCard from './FavouriteEventCard';
import Grid from '@mui/material/Grid';

interface FavouriteEventListProps {
    eventList: any[];
}

const FavouriteEventList: React.FC<FavouriteEventListProps> = ({ eventList }) => {
    return (
        <Grid container spacing={4}>
            {eventList.map((item, i) => (
                <Grid item sm={12} md={6} key={i+1}>
                    <FavouriteEventCard
                        name={item.name}
                        dateTimeString={item.dateTimeString}
                        priceDisplayString={item.priceDisplayString}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default FavouriteEventList;