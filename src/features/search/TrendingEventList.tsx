import { Box, Divider, Typography } from '@mui/material';
import { TrendingIcon } from '../../common/StyledIcons/StyledIcons';


const TrendingEventList = () => {
    return (
        <Box>
            <Box display="flex" alignItems="center" mb={1}>
                <Typography
                    variant='body1'
                    sx={{ fontWeight: 'bold', fontSize: '18px' }}
                    mr={1}
                >
                    {`Trending events`}
                </Typography>
                <TrendingIcon />
            </Box>

            <Typography variant='subtitle1' padding={'8px 8px 8px 0'}>Shreya Ghoshal I All Hearts Tour I Kolkata</Typography>
            <Divider />
            <Typography variant='subtitle1' padding={'8px 8px 8px 0'}>The Final Lap Tour 2023 ft. 50 Cent | Mumbai</Typography>
            <Divider />
        </Box>
    );
};

export default TrendingEventList;