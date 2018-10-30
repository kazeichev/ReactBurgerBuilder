import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredience from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(key => {
            return [...Array(props.ingredients[key])]
            .map( (_, i) => {
                return <BurgerIngredience key={key + i}  type={key}/>;
            })
        }).reduce((array, el) => {
            return array.concat(el);
        }, []);

    if  (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please, start adding ingredients!</p>;
    }
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredience type="bread-top" />
            {transformedIngredients}
            <BurgerIngredience type="bread-bottom" />
        </div>
    );
}

export default burger;