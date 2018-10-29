import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredience from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerIngredience type="bread-top" />
            <BurgerIngredience type="cheese" />
            <BurgerIngredience type="meat" />
            <BurgerIngredience type="bread-bottom" />
        </div>
    );
}

export default burger;