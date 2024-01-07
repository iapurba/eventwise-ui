import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';

const StyledAvatar = styled(Avatar)(() => ({
    border: '1px solid rgba(255,255,255,0.2)',
    fontSize: '14px',
    backgroundColor: 'transparent',
    color: 'white',
    marginLeft: '15px',
    '&:hover': {
        borderColor: 'white',
        backgroundColor: 'transparent',
    }
}))

interface BgLetterAvatarProps {
    name: string;
    onClick: () => void;
}

const BgLetterAvatar: React.FC<BgLetterAvatarProps> = ({ name, onClick }) => {

    const stringAvatar = (name: string) => {
        return {
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    return (<StyledAvatar {...stringAvatar(name)} onClick={onClick}/>);
}

export default BgLetterAvatar;