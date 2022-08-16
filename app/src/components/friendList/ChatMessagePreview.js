import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
const ChatMessagePreview = () => {
  function say() {
    console.log('helloooo')
  }

  function render() {
    return (
      [[...Array(10).keys()].map( () => {
        return (
          <React.Fragment>
            <ListItem alignItems="flex-start" onClick={say}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" />
              </ListItemAvatar>
              <ListItemText
                primary={
                  
                  <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body1"
                    color="text.primary"
                  >  
                  {"The other round"}
                  </Typography>
                </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body1"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        )
      })]
    )
  }
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {render()}
    </List>
  );
}

export default ChatMessagePreview;