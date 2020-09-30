import React from 'react';
import {NavLink} from 'react-router-dom'
import style from './../../../p1-main/m1-ui/u1-app/App.module.css'

export function Error404() {
    return (
        <div className={style.siteContainer}>
            <h2>404 Page not found!</h2>
            <NavLink to="/pre-junior" className={style.link}>
                <p>ฅ/ᐠ. ̫ .ᐟ\ฅ back to homepage</p>
            </NavLink>
            <div>
                <img
                    src="https://cs9.pikabu.ru/post_img/big/2016/09/28/7/147505714417231160.jpg"
                    className={style.imageNotFound} alt='imageNotFound'/>
            </div>
        </div>
    );
}
