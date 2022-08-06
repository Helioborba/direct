import { Avatar} from "@mui/material";

const SearchAvatar = (props) => {
    return (
        <Avatar
            src={`${props.img}`}
            sx={{...props.sx, height:100, width:100}}
            alt={props.title}
            loading="lazy"
        />
    )
}

export default SearchAvatar;