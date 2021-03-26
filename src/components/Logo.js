import React from 'react';
import {LogoWrapper, StyledLogo} from '../assets/styles/logo-style';
import logo from '../assets/logo.png';

const Logo = () => {
    return (
        <LogoWrapper>
            <a href="/">
                <StyledLogo src={logo}/>
            </a>
        </LogoWrapper>
    )
}
export default Logo;