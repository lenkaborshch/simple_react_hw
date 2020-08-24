import React from 'react';
import style from './Message.module.css';

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={style.wrapperMessage}>
            <img src={props.avatar} className={style.avatar}/>
            <div className={style.message}>
                <div className={style.fromUser}>{props.name}</div>
                <div>
                    <span className={style.messageText}>{props.message}</span>
                    <span className={style.time}>{props.time}</span>
                </div>
            </div>

        </div>
    );
}

export default Message;
