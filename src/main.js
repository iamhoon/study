import React from 'react';
import './main.css';
import Main2 from './main2';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text:'김정훈'
        }
        this.click = this.click.bind(this);
        this.mouseon = this.mouseon.bind(this);
        this.mouseout = this.mouseout.bind(this);
    }
    
    click(){
        if(this.state.text === '김정훈'){
            this.setState({
                text:'정휘제'
            })
        }
       else if(this.state.text === '정휘제'){
            this.setState({
                text:'김정훈'
            })
        }
    }
    mouseon(){
        this.setState({
            text: "올라갔음"
        })
    }
    mouseout(){
        this.setState({
            text: "나갔음"
        })
    }
    render(){
        return(
            <div className="aa">
                <Main2 mm={this.state.text}/>
            </div>
        )
    }
}

export default Main;