import Container from '@mui/material/Container';
import EventTicketsContainer from '../containers/EventTicketsContainer';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PageTitleTypogapgy from '../components/common/Typography/PageTitlteTypography';
import { useParams } from 'react-router-dom';
import { useGetEventByIdQuery } from '../services/apis/eventApi';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { formatDate } from '../utils/dateTimeFormatter';


const TicketsPage = () => {
    const { eventId } = useParams();
    const { data, isLoading } = useGetEventByIdQuery(eventId ?? skipToken);
    const event = data;

    return (
        isLoading
            ? <>Loading ...</>
            : <Container>
                <Grid
                    container
                    display="flex"
                    alignItems="center"
                >
                    <Grid
                        item
                        sx={{
                            margin: '32px auto',
                            textAlign: 'center'
                        }}
                    >
                        <PageTitleTypogapgy gutterBottom >
                            {event?.title}
                        </PageTitleTypogapgy>
                        <Typography>
                            {`${event?.location?.venue}, ${event?.location?.address?.city}`}
                            &nbsp; •  &nbsp;
                            {`${formatDate(event?.startDate)} | ${event.startTime}`}
                        </Typography>
                    </Grid>
                </Grid>
                <EventTicketsContainer eventId={eventId ? eventId : ''} />
            </Container>

    );
};

export default TicketsPage;