import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Greeting.module.css';

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error === 'Error!' ? s.error : s.notError; // need to fix with (?:)

    const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            addUser();
        }
    }

    return (
        <div className={s.group}>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onEnterPress}/>
            {error && <span className={s.errorText}>{error}</span>}
            <div>
                <button className={s.button} onClick={addUser}>Add</button>
                <span>{totalUsers}</span>
            </div>
        </div>
    );
}

export default Greeting;
