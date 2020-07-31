import React from 'react';
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from "@fortawesome/free-solid-svg-icons"

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
                        <FontAwesomeIcon icon={faCamera} size="2x" />
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
                        <li><FontAwesomeIcon icon={faCamera} size="2x" /></li>
                        <li><FontAwesomeIcon icon={faCamera} size="2x" /></li>
                    </ul>
                    <a href="#" class="navbar_toogleBtn">
                        <FontAwesomeIcon icon={faCamera} size="2x" />
                    </a>
                </nav>
            </body>
        )
    }
}

export default Nav_bar;