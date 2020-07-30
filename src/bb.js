import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './App.css';


class BB extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            anchEl: null
        }
        this.clickon = this.clickon.bind(this);
        this.clickoff = this.clickoff.bind(this);
    }

    clickon(e){
        this.setState({
            anchEl: e.currentTarget
        })
    }

    clickoff(){
        this.setState({
            anchEl: null
        })
    }
    render(){
        return(
            <div>
                <Button aria-describedby={Boolean(this.state.anchEl) ? 'simple-popover' : undefined} variant="contained" color="primary" onClick={this.clickon}>
                    Open Popover
                </Button>
                <Popover
                    id={Boolean(this.state.anchEl) ? 'simple-popover' : undefined}
                    open={Boolean(this.state.anchEl)}
                    anchorEl={this.state.anchEl}
                    onClose={this.clickoff}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}
                    className = "bb"
                >
                    <Typography>The content of the Popover.</Typography>
                </Popover>
            </div>

        )
    }
}

export default BB;