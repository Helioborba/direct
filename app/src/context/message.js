
import React, {useState} from 'react';

/**
 * Context for the messages (JSX objects)
 * 
 */
const Message = React.createContext({
    messageProvider: [],
    messageCurrentHandler: () => {},
    userProvider: {},
    userHandler: () => {}
});

export const MessageContextProvider = (props) => {
    const [messageCurrent, messageCurrentHandler] = useState([]);
    const [user, userHandler] = useState({logged: false});
    return(
        <Message.Provider value={{
            messageProvider: messageCurrent,
            messageCurrentHandler: messageCurrentHandler,
            userProvider: user,
            userHandler: userHandler
        }}>
        {props.children}
        </Message.Provider>
    )
}

export default Message;
