import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(70)

    const onChangeRange = (values: number | number[]) => {
        if (Array.isArray(values)) {
            setValue1(values[0])
            setValue2(values[1])
        }
    }
    const values = [value1, value2]

    return (
        <div>
            <hr/>
            homeworks 11

            <div>
                <span>{value1}</span>
                <SuperRange onChangeRange={setValue1} value={value1}/>
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange onChangeRange={onChangeRange} values={values}/>
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
