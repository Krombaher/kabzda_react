import React, {useState} from 'react';
import {Select} from "./Select/Select";
import s from './App.module.css'

export type ValueType = {
    id:number
    value:number
}

const optionValue = [
    {id: 1, value: 1},
    {id: 2, value: 2},
    {id: 3, value: 3},
    {id: 4, value: 4},
    {id: 5, value: 5},
    {id: 6, value: 6}
]

function App() {
    return (
        <div className={s.app}>
            <Select optionValue={optionValue}/>
        </div>
    )
}

export default App;
