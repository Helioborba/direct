import {Box, Avatar} from "@mui/material";

const Image = (props) => {
    // <Box component='img'
    //     height={100}
    //     width={100}
    //     src={`${props.img}?w=248&fit=crop&auto=format`}
    //     srcSet={`${props.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
    //     sx={props.sx}
    //     alt={props.title}
    //     loading="lazy"
    // />
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