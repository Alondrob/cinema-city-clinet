import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Menu from './Menu';

import HomePage from './HomePage';
import '../../styling/Test.css'


const Test = () => {

    return (
        <div>
            <div class="star-wrapper">
                <a href="#" class="fas fa-star s1"></a>
                <a href="#" class="fas fa-star s2"></a>
                <a href="#" class="fas fa-star s3"></a>
                <a href="#" class="fas fa-star s4"></a>
                <a href="#" class="fas fa-star s5"></a>
            </div>
            <script src="https://kit.fontawesome.com/5ea815c1d0.js"></script>
            <div class="wraper">
                <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="gitlabBilal" data-color="#FFDD00" data-emoji="" data-font="Cookie" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff"></script>
            </div>
        </div>
    )
}

export default Test
