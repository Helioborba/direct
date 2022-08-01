import { Avatar} from "@mui/material";

const Image = (props) => {
    return (
        <Avatar
            src={`${props.img}?w=248&fit=crop&auto=format`}
            sx={{...props.sx, height:100, width:100}}
            alt={props.title}
            loading="lazy"
        />
    )
}

export default Image;