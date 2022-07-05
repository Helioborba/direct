import { forwardRef } from "react";
const Input = forwardRef((props, ref) => {
    return (
        <input type={props.type} onChange={props.onChange} ref={ref} id={props.id} style={{display:'none', ...props.sx}}/>
    )
});

export default Input;