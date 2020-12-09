
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';



const styles = (theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  });

class Todo extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     todoItems: [...props.items],
    // };
    console.log("props", this.props.items)
  }
  render(){
    return (
      <>
      <div key={this.props.items}>
        {/* <List style={{border: "1px solid red", width: '350px'}}> */}
        {/* <ul> */}
        { this.props.items.map((item, index) => {
            return (
            <>
            {/* <li key={index}>
              {item}
            </li>  */}
              <ListItem key={item}>  
                <ListItemText key={item} primary={item} />
              </ListItem>  
              <Divider />
            </>
            )
          })}
        {/* </ul> */}
         
          {/* </List>  */}
      </div>
      </>
    );
  }
}

export default Todo;
