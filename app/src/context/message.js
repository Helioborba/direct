
import React, {useState} from 'react';

/**
 * Holds the canvas context and the nodes of the current marches
 * 
 */
const Message = React.createContext({
    canvasProvider: undefined,
    CanvasCurrentHandler: () => {},
    marchNodes: [],
    marchNodesHandler: () => {},
    currentAtMarch: {},
    currentAtMarchHandler: () => {}
});

export const CanvasContextProvider = (props) => {
    const [canvasCurrent,canvasCurrentHandler] = useState(undefined);
    const [marchNodes,marchNodesHandler] = useState([]);
    const [currentAtMarch,currentAtMarchHandler] = useState({});

    return(
        <Message.Provider value={{
            canvasProvider: canvasCurrent,
            canvasCurrentHandler: canvasCurrentHandler,
            marchNodes: marchNodes,
            marchNodesHandler: marchNodesHandler,
            currentAtMarch: currentAtMarch,
            currentAtMarchHandler: currentAtMarchHandler
        }}>
        {props.children}
        </Message.Provider>
    )
}

export default Message;
