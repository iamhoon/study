import React, { Component } from 'react';
import './App.css';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Nav_bar extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         state: 'false'
    //     }
        
    //     this.menuclasslist = this. menuclasslist.bind(this);

        
    //     }
    // }

    // menuclasslist(){
    //     this.Setstate({
    //         active = 'true'
    //     })
    // }

    render(){
        return(
            <body>
                <nav class="navbar">
                    <div class="navbar_logo">
                    <FontAwesomeIcon icon="smile" size="2x"/>
                        <a href="">DreamCoding</a>
                    </div>

                    <ul class="navber_menu">
                    <li><a href="">Home</a></li>
                    <li><a href="">Gallery</a></li>
                    <li><a href="">Weddings</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Bookings</a></li>
                    </ul>
                    <ul class="navbar_icons">
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-facebook-square"></i></li>
                    </ul>
                    <a href="#" class="navbar_toogleBtn">
                        <i class="fas fa-bars"></i>

                    </a>
                </nav>
            </body>
        )
    }
}

class  App extends Component {
  render(){
  return (
      <div className="App">
        <Nav_bar/>
      </div>
    );
  }
}

export default App;