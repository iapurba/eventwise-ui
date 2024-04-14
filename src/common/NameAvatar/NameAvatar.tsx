import { NameAvatarWrapper } from "./NameAvatar.styles";

interface NameAvatarProps {
    name: string;
    onClick: () => void;
}

const NameAvatar: React.FC<NameAvatarProps> = ({ name, onClick }) => {

    const stringAvatar = (name: string) => {
        return {
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    return (<NameAvatarWrapper {...stringAvatar(name)} onClick={onClick}/>);
}

export default NameAvatar;