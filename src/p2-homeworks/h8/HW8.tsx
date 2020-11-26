import React, {useState} from 'react'
import {homeWorkReducer, sortPeople, UserType, checkPeople} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople)

    const finalPeople = people.map(p => (
        <div key={p._id}>
            {p.name}, {p.age}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortPeople('up')))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortPeople('down')))
    const check = () => setPeople(homeWorkReducer(initialPeople, checkPeople(18)))

    return (
        <div>
            <hr/>
            homeworks 8

            <em>{finalPeople}</em>
            <span><SuperButton onClick={sortUp}>sort up</SuperButton></span>
            <span><SuperButton onClick={sortDown}>sort down</SuperButton></span>
            <span><SuperButton onClick={check}>check 18</SuperButton></span>
            <hr/>
            <hr/>
        </div>
    )
}

export default HW8
