import React from 'react'
import {Slider} from '@material-ui/core'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    values?: number[]
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({onChangeRange, values}) => {

    const handleChange = (event: any, newValue: number | number[]) => {
        if (onChangeRange && Array.isArray(newValue)) {
            onChangeRange(newValue)
        }
    }

    return (
        <Slider
            value={values}
            onChange={handleChange}
            valueLabelDisplay='auto'
            aria-labelledby='range-slider'
        />
    )
}

export default SuperDoubleRange
