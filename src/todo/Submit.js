import React from 'react'
import { TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Todo from './Todo'

function collectTodoItem(e) {
    //document.getElementById('todoItem').value
    //listOfTodoItems.push(document.getElementById('todoItem').value)
}

class Submit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfTodoItems: [],
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => ({
            ...this.state, 
            listOfTodoItems: [...prevState.listOfTodoItems, document.getElementById('todoItem').value]
        }))
    }
    render(){
        return(
            <>
                <Grid container component="main" style={{border: '1px solid black', width: '350px'}}>
                    <Grid item xs={8}>
                        <TextField 
                            style={{padding: 'none', width: '100%'}} 
                            label="Todo Items"
                            id="todoItem">
                        </TextField>              
                    </Grid>
                    <Grid item xs={4}>
                        <Button 
                            style={{height: '100%', width:'100%'}} 
                            variant="contained" color="primary"
                            onClick={this.handleClick}
                        >
                            Add Item
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        {console.log("State",this.state.listOfTodoItems)}
                        <Todo items={this.state.listOfTodoItems}/>
                    </Grid>
                </Grid>
            </>
            );
    }
}


export default Submit;