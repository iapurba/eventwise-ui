import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '../common/Icons/ArrowIcons';
import IconButton from '@mui/material/IconButton';
import PageTitle from '../common/Typography/PageTitleTypography';

const FilterPanelWrapper = styled(Box)(() => ({
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2.5vw 0 0',
}));

const FilterOptions = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '80%',
}));

const FilterMenuButton = styled(Button)(() => ({
    borderRadius: '100px',
    color: '#000000',
    padding: '7px 15px',
    border: '1px solid rgb(153, 153, 153)',
    fontSize: '14px',
    marginLeft: '12px',
    textTransform: 'initial',
    backgroundColor: 'transparent',
    '&:hover': {
        borderColor: '1px solid rgb(153, 153, 153)',
        backgroundColor: 'transparent',
    }
}));

const styleActive = {
    color: '#FFFFFF',
    border: '1px solid #C20000',
    backgroundColor: '#C20000',
    '&:hover': {
        borderColor: '1px solid #C20000',
        backgroundColor: '#C20000',
    }
}

const ScrollableOptions = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    overflowX: 'auto',
    scrollbarWidth: 'none', // Firefox
    msOverflowStyle: 'none', // IE
    '&::-webkit-scrollbar': {
        display: 'none', // Chrome, Safari, Edge
    },
    '& > button': {
        whiteSpace: 'nowrap',
        flexShrink: 0,
    },
    overflow: 'hidden', // Disable keyboard and touchpad scroll
    WebkitOverflowScrolling: 'touch', // For iOS devices
});


const timeOption = ['All', 'Today', 'Tomorrow', 'Weekend'];
const genreOption = [
    'All Events',
    'Music (23)',
    'New Year Weekend Parties (22)',
    'Food and Drink (14)',
    'Festival (7)',
    'Other (6)',
    'Parties (4)',
    'Comedy (3)',
    'Experiences (3)',
    'Free Events (3)',
    'Self Improvement (3)',
    'Adventure (2)',
    'Dance (2)',
    'Learn (2)',
    'Open Mic (2)',
    'Shopping (2)',
    'Brunch (1)',
    'Creativity (1)',
    'Dance and Music (1)',
    'Exhibition (1)',
    'Food (1)',
    'Food and Music Festival (1)',
    'Kids & Family Festival (1)',
    'Live Event (1)',
    'Storytelling (1)',
    'Theatre (1)',
    'Workshops (1)',
];

const EventFilterPanel = () => {
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollEnd, setScrollEnd] = useState(false);
    const [selectedDay, setSelectedDay] = useState('All');
    const [selectedGenre, setSelectedGenre] = useState('All Events');

    const handleScroll = (direction: 'left' | 'right') => {
        const scrollContainer = document.getElementById('scrollable-options');
        if (!scrollContainer) return;
        const scrollAmount = 120;
        const maxScroll = scrollContainer?.scrollWidth - scrollContainer?.clientWidth;
        const newScrollLeft =
            direction === 'left'
                ? Math.max(0, scrollLeft - scrollAmount)
                : Math.min(maxScroll, scrollLeft + scrollAmount);

        maxScroll === newScrollLeft ? setScrollEnd(true) : setScrollEnd(false);
        setScrollLeft(newScrollLeft);

        if (scrollContainer) {
            scrollContainer.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
        }
    };

    return (
        <FilterPanelWrapper>
            <PageTitle pb={2}>
                {`All Event `}<span style={{ color: '#000000', fontWeight: '320' }}>{'(2)'}</span>
            </PageTitle>
            <FilterOptions>
                <Typography sx={{ color: '#999999', fontSize: '14px' }}>TIME:</Typography>
                {timeOption.map((item) => (
                    <FilterMenuButton
                        key={item}
                        sx={item === selectedDay ? styleActive : null}
                        onClick={() => { setSelectedDay(item) }}
                    >
                        {item}
                    </FilterMenuButton>
                ))}
            </FilterOptions>
            <FilterOptions>
                {scrollLeft > 0 && <IconButton disableRipple onClick={() => handleScroll('left')}><ArrowLeftIcon /></IconButton>}
                <ScrollableOptions id="scrollable-options">
                    <Typography sx={{ color: '#999999', fontSize: '14px' }}>GENRE:</Typography>
                    {genreOption.map((item) => (
                        <FilterMenuButton
                            key={item}
                            sx={item === selectedGenre ? styleActive : null}
                            onClick={() => { setSelectedGenre(item) }}
                        >
                            {item}
                        </FilterMenuButton>
                    ))}
                </ScrollableOptions>
                {!scrollEnd && <IconButton disableRipple onClick={() => handleScroll('right')}><ArrowRightIcon /></IconButton>}
            </FilterOptions>
        </FilterPanelWrapper>
    );
};

export default EventFilterPanel;