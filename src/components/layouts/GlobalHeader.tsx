import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from "@mui/material/styles";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LoginModal from '../../features/auth/containers/LoginModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CircularIconButton from '../common/Buttons/CircularIconButton';
import MenuButton from '../common/Buttons/MenuButton';
import BgLetterAvatar from '../../features/user/components/BgLetterAvatar';


const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: "#0C172F",
    color: "white",
    padding: theme.spacing(0, 2),
}));


const GlobalHeader: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const userData = useSelector((state: RootState) => state.auth);
    const retriveLoginState = localStorage.getItem('isLoggedIn') 
    const isLoggedIn = userData.isLoggedIn || (
        retriveLoginState ? JSON.parse(retriveLoginState) : false
    )
    const navigate = useNavigate();

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
                        <MenuButton startIcon={<PlaceOutlinedIcon />}>
                            Events in Kolkata
                        </MenuButton>
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

                    <Link to={'/users/me/favourites'}>
                        <CircularIconButton color="inherit" aria-label="search">
                            <FavoriteBorderRoundedIcon />
                        </CircularIconButton>
                    </Link>

                    <Link to={'/buy/checkout'}>
                        <MenuButton startIcon={<ShoppingCartOutlinedIcon />}>
                            {'09:23'}
                        </MenuButton>
                    </Link>

                    <Link to={'/explore/kolkata'}>
                        <MenuButton
                            startIcon={<PlaceOutlinedIcon />}
                            endIcon={<KeyboardArrowDownRoundedIcon />}
                            sx={{ borderColor: '#31c0f0' }}
                        >
                            {`Kolkata`}
                        </MenuButton>
                    </Link>

                    {isLoggedIn ? (
                        <BgLetterAvatar
                            name={'Apurba Panja'}
                            onClick={() => { navigate('/users/me') }}
                        />
                    ) : (
                        <CircularIconButton
                            color="inherit"
                            aria-label="profile"
                            onClick={() => {setModalOpen(true)}}
                        >
                            <PersonOutlineRoundedIcon />
                        </CircularIconButton>
                    )}

                    <LoginModal open={modalOpen} onClose={() => setModalOpen(false)} />
                </Box>
            </Toolbar>
        </StyledAppBar >
    );
};

export default GlobalHeader;
