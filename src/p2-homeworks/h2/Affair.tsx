import React from 'react';
import {AffairType} from './HW2';
import style from './Affairs.module.css';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };// need to fix

    return (
        <li>
            {props.affair.name} - {props.affair.priority}
            <button onClick={deleteCallback} className={style.buttonTask}>X</button>
        </li>
    );
}

export default Affair;
