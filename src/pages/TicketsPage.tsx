import Container from '@mui/material/Container';
import EventTicketsContainer from '../containers/EventTicketsContainer';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PageTitleTypogapgy from '../components/common/PageTitlteTypography';

const TicketsPage = () => {

    return (
        <Container>
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
                        {`Anupraas Alankaar by Aditya Jain`}
                    </PageTitleTypogapgy>
                    <Typography>{`Ministry Of Comedy, Bengaluru `} &nbsp; •  &nbsp; {`December 2 | 6PM`}</Typography>
                </Grid>
            </Grid>
            <EventTicketsContainer />
        </Container>

    );
};

export default TicketsPage;