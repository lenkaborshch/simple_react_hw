import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import {OptionsType} from '../../HW7'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: OptionsType
    onChangeOption?: (option: string) => void
}

export const SuperRadio: React.FC<SuperRadioPropsType> = ({
                                                              type, name,
                                                              options, value,
                                                              onChange, onChangeOption,
                                                              ...restProps
                                                          }) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }// onChange, onChangeOption
    }

    const mappedOptions = options ? options.map((o, i) => ( // map options with key
        <FormControlLabel key={name + '-' + i} value={o} control={<Radio/>} label={o} checked={value === o}/>
    )) : []

    return (
        <>
            <FormControl>
                <RadioGroup name={name} value={value} onChange={onChangeCallback}>
                    {mappedOptions}
                </RadioGroup>
            </FormControl>
        </>
    )
}

