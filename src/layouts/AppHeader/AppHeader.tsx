import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LoginModal from '../../features/Authentication/containers/LoginModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import NameAvatar from '../../common/NameAvatar/NameAvatar';
import HeaderButton from '../../common/Button/HeaderButton/HeaderButton';
import { AppHeaderContentWrapper, AppHeaderWrapper } from './AppHeader.styles';


const AppHeader: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const userData = useSelector((state: RootState) => state.auth);
    const retriveLoginState = localStorage.getItem('isLoggedIn')
    const isLoggedIn = userData.isLoggedIn || (
        retriveLoginState ? JSON.parse(retriveLoginState) : false
    )
    const navigate = useNavigate();

    return (
        <AppHeaderWrapper className='app-header'>
            <Toolbar>
                {/* Left side: Logo */}
                <AppHeaderContentWrapper>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/eventwise.png`}
                        alt='logo'
                        style={{ height: '40px', width: 'auto' }}
                    />
                </AppHeaderContentWrapper>
                <AppHeaderContentWrapper style={{ flexGrow: 1}}>
                    <HeaderButton
                        label={`Events in Kolkata`}
                        startIcon={PlaceOutlinedIcon}
                        onClick={() => { navigate(`/all-events/kolkata`) }}
                    />
                </AppHeaderContentWrapper>

                {/* Right side: Menu items */}
                <AppHeaderContentWrapper>
                    {/* Search Menu  */}
                    <HeaderButton
                        startIcon={SearchIcon}
                        onClick={() => { navigate('search') }}
                    />
                    {/* Favourite Events Menu  */}
                    <HeaderButton
                        startIcon={FavoriteBorderRoundedIcon}
                        onClick={() => { navigate('/users/me/favourites') }}
                    />
                    {/* Cart Menu  */}
                    <HeaderButton
                        startIcon={ShoppingCartOutlinedIcon}
                        label={`09:23`}
                        onClick={() => { navigate('/buy/checkout') }}
                    />
                    {/* Explore City Dropdown  */}
                    <HeaderButton
                        startIcon={PlaceOutlinedIcon}
                        label={`Kolkata`}
                        endIcon={KeyboardArrowDownRoundedIcon}
                        active={true}
                        onClick={() => { navigate(`/explore/kolkata`) }}
                    />
                    {/* User Profile Menu  */}
                    {isLoggedIn ? (
                        <NameAvatar
                            name={'Apurba Panja'}
                            onClick={() => { navigate('/users/me') }}
                        />
                    ) : (
                        <HeaderButton
                            startIcon={PersonOutlineRoundedIcon}
                            onClick={() => { setModalOpen(true) }}
                        />
                    )}

                    <LoginModal open={modalOpen} onClose={() => setModalOpen(false)} />
                </AppHeaderContentWrapper>
            </Toolbar>
        </AppHeaderWrapper >
    );
};

export default AppHeader;
