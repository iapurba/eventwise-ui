import { useState } from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {
    FilterOptionsWrapper,
    FilterPanelWrapper,
    ScrollableOptions
} from './EventFilterPanel.styles';
import FilterButton from '../../../../common/Button/FilterButton/FilterButton';
import { ArrowLeftIcon, ArrowRightIcon } from '../../../../common/StyledIcons/ArrowIcons';

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
        <FilterPanelWrapper className='event-filter-panel'>
            <Typography pb={2} sx={{
                fontSize: '26px',
                fontWeight: 'bold',
                color: '#00B9F5',
                fontVariant: 'h5',
            }}>
                {`All Event `}<span style={{ color: '#000000', fontWeight: '320' }}>{'(2)'}</span>
            </Typography>
            <FilterOptionsWrapper>
                <Typography sx={{ color: '#999999', fontSize: '14px' }}>TIME:</Typography>
                {timeOption.map((item) => (
                    <FilterButton
                        key={item}
                        label={item}
                        isActive={item === selectedDay ? true : false}
                        onClick={() => { setSelectedDay(item) }}
                    />
                ))}
            </FilterOptionsWrapper>
            <FilterOptionsWrapper>
                {scrollLeft > 0 &&
                    <IconButton disableRipple onClick={() => handleScroll('left')}>
                        <ArrowLeftIcon />
                    </IconButton>
                }
                <ScrollableOptions id="scrollable-options">
                    <Typography sx={{ color: '#999999', fontSize: '14px' }}>GENRE:</Typography>
                    {genreOption.map((item) => (
                        <FilterButton
                            key={item}
                            label={item}
                            isActive={item === selectedGenre ? true : false}
                            onClick={() => { setSelectedGenre(item) }}
                        />
                    ))}
                </ScrollableOptions>
                {!scrollEnd &&
                    <IconButton disableRipple onClick={() => handleScroll('right')}>
                        <ArrowRightIcon />
                    </IconButton>
                }
            </FilterOptionsWrapper>
        </FilterPanelWrapper>
    );
};

export default EventFilterPanel;