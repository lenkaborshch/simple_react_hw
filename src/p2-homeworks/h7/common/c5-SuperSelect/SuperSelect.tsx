import React, {SelectHTMLAttributes, DetailedHTMLProps} from 'react'
import {OptionsType} from '../../HW7'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options: OptionsType
    onChangeOption: (option: string) => void
}

export const SuperSelect: React.FC<SuperSelectPropsType> = ({
                                                                options,
                                                                onChange, onChangeOption,
                                                                ...restProps
                                                            }) => {
    const mappedOptions = options.map((o, i) => {
        return <MenuItem key={o + '-' + i} value={o}>{o}</MenuItem>
    }) // map options with key

    const onChangeCallback = (e: any) => {
        onChangeOption(e.currentTarget.textContent)
        //onChangeOption(e.target.value as string) for type ChangeEvent<{ value: unknown }>
        // onChange, onChangeOption
    }

    return (
        <>
            <FormControl>
                <InputLabel id="selectLabelFruits">Fruits</InputLabel>
                <Select
                    labelId='selectLabelFruits'
                    id='selectLabelFruits'
                    value={restProps.value}
                    onChange={onChangeCallback}
                >
                    {mappedOptions}
                </Select>
            </FormControl>
        </>
    )
}
