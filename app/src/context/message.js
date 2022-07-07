
import React, {useState} from 'react';

/**
 * Context for the messages (JSX objects)
 * 
 */
const Message = React.createContext({
    messageProvider: [],
    messageCurrentHandler: () => {},
    marchNodes: [],
    marchNodesHandler: () => {},
    currentAtMarch: {},
    currentAtMarchHandler: () => {}
});

export const MessageContextProvider = (props) => {
    const [messageCurrent, messageCurrentHandler] = useState([]);
    const [marchNodes, marchNodesHandler] = useState([]);
    const [currentAtMarch, currentAtMarchHandler] = useState({});

    return(
        <Message.Provider value={{
            messageProvider: messageCurrent,
            messageCurrentHandler: messageCurrentHandler,
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
