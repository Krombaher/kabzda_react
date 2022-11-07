import React, {useState, KeyboardEvent} from "react";
import arrow from "../img/chevron-down.svg";
import s from './Selec.module.css'
import {ValueType} from "../App";

export type SelectPropsType = {
    optionValue: ValueType[]
}

export const Select = (props: SelectPropsType) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [value, setValue] = useState(0)

    let hoveredItem = props.optionValue.find(i => i.value === value)

    const openBlockHandler = () => {
        setIsOpen(!isOpen)
    }
    const selectValueHandler = (value: number) => {
        setValue(value)
        setIsOpen(false)
    }

    const mappedOptionValue = props.optionValue.map(el => {
        return (
            <div
                key={el.id}
                className={s.optionItem + ' ' + (hoveredItem === el ? s.selected : '')}
                onClick={() => selectValueHandler(el.value)}
            >
                {el.value}
            </div>
        )
    })

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.optionValue.length; i++) {
                if (props.optionValue[i] === hoveredItem) {
                    const nextElement = e.key === 'ArrowDown'
                        ? props.optionValue[i + 1]
                        : props.optionValue[i - 1]

                    if (nextElement) {
                        setValue(nextElement.value)
                        return;
                    }
                }
            }

            if (!value) setValue(props.optionValue[0].value)

        }

        if (e.key === 'Enter' || e.key === 'Escape') setIsOpen(false)

        if (e.key === 'Enter') openBlockHandler()

    }

    return (
        <div className={s.selectBlock}>
            <div className={s.select} onClick={openBlockHandler} onKeyUp={onKeyUp} tabIndex={0}>
                {value}
                <img className={isOpen ? (s.arrow + ' ' + s.rotate) : s.arrow} src={arrow} alt={'arrow'}/>
            </div>
            <div className={s.option}>
                {
                    isOpen && mappedOptionValue
                }
            </div>
        </div>
    );
}