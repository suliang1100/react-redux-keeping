/*
* Create by suliang on 2018.01.02
* */
import React from 'react';

import App from './containers/Index';
import Menu from './common/menu.js';
import './style/app.css';

export default ()=>{
    return(
        <div className="app-container">
            <Menu/>
            <App/>
        </div>
    )
};