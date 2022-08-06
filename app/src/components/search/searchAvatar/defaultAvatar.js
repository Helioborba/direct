import { Avatar} from "@mui/material";
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

// Need to find a way to render the icon rather than the avatar
const DefaultSearchAvatar = (props) => {
    return (
        <Avatar
            src={''}
            sx={{...props.sx, height:100, width:100}}
            alt={props.title}
            loading="lazy"
        />
    )
}

export default DefaultSearchAvatar;