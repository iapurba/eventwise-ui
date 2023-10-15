import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from "@mui/material/styles";
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: "#0C172F",
    color: "white",
    padding: theme.spacing(0, 2),
}));

const CustomMenuButton = styled(Button)(({ theme }) => ({
    borderRadius: '100px',
    color: 'white',
    padding: '7px 15px',
    border: '1px solid rgba(255,255,255,0.2)',
    fontWeight: '600',
    fontSize: '13px',
    marginLeft: '15px',
    textTransform: 'initial',
    '&:hover': {
        borderColor: 'white',
        backgroundColor: 'transparent',
    }
}));

const CircularIconButton = styled(IconButton)(({ theme }) => ({
    border: '1px solid rgba(255,255,255,0.2)',
    fontSize: '13px',
    padding: '7px',
    borderRadius: '100px',
    backgroundColor: 'transparent',
    color: 'white',
    marginLeft: '15px',
    '&:hover': {
        borderColor: 'white',
        backgroundColor: 'transparent',
    }
}));



const Header: React.FC = () => {

    return (

        <StyledAppBar position="static">
            <Toolbar>
                {/* Left side: Logo */}
                <Box style={{ display: 'flex', flexDirection: 'row' }}>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/eventwise.png`}
                        alt='logo'
                        style={{ height: '40px', width: 'auto' }}
                    />
                </Box>
                <Box style={{ display: 'flex', flexGrow: 1, flexDirection: 'row' }}>
                    <Link to={'/all-events/kolkata'}>
                        <CustomMenuButton startIcon={<PlaceOutlinedIcon />}>
                            Events in Kolkata
                        </CustomMenuButton>
                    </Link>
                </Box>

                {/* Right side: Menu items */}
                <Box style={{ display: 'flex', flexDirection: 'row' }}>
                    {/* Search Menu */}
                    <Link to={'/search'}>
                        <CircularIconButton
                            color="inherit"
                            aria-label="search"
                        >
                            <SearchIcon />
                        </CircularIconButton>
                    </Link>

                    <Link to={'/users/me'}>
                        <CircularIconButton color="inherit" aria-label="search">
                            <FavoriteBorderRoundedIcon />
                        </CircularIconButton>
                    </Link>

                    <Link to={'/buy/checkout'}>
                        <CustomMenuButton startIcon={<ShoppingCartOutlinedIcon />}>
                            {'09:23'}
                        </CustomMenuButton>
                    </Link>

                    <Link to={'/explore/kolkata'}>
                        <CustomMenuButton
                            startIcon={<PlaceOutlinedIcon />}
                            endIcon={<KeyboardArrowDownRoundedIcon />}
                            sx={{ borderColor: '#31c0f0' }}
                        >
                            {`Kolkata`}
                        </CustomMenuButton>
                    </Link>

                    <Link to={'/users/me'}>
                        <CircularIconButton color="inherit" aria-label="profile">
                            <PersonOutlineRoundedIcon />
                        </CircularIconButton>
                    </Link>

                </Box>
            </Toolbar>
        </StyledAppBar>
    );
};

export default Header;
