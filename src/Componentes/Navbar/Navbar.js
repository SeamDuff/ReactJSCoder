import React, { Component } from 'react';
import { MenuItems } from './MenuItems'
import { Button } from '../Button'
import './Navbar.css'

class Navbar extends Component {

    state = { on: false }

    handleClick = () => {
        this.setState({on: !this.state.clicked})
    }

    render() {
        return(
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>React<i className='fab fa-react'></i></h1>
                <div className='menu-icon' onClick={this.handClick}>
                    <i className={this.state.on ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.on ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index)=> {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button></Button>
            </nav>
        )
    }
}

export default Navbar