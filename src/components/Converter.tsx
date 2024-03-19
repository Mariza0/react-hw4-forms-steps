import React from "react";
import { useState, ChangeEvent } from "react";
import { HexToRgba } from './HexToRgba';
import { ValidInput } from "./ValidInput";

export function Converter() {

    const[form, setForm]=useState({
        name: "",
    });
  
    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setForm((prevForm) => ({...prevForm,[name]: value}));
    };

    return (

    <div className="container" style={ {backgroundColor: ((ValidInput({name: form.name}) && form.name.length === 7) ? form.name : "rgb(251, 237, 220)")}}>
        <form className="form">
            <input type="text" id="name" name="name" value={ form.name } className="input-color" onChange={handleNameChange}/>
            <input type="text" className="input-color" value={
                form.name.length >= 7 ? ( ValidInput({ name: form.name }) ? HexToRgba({ hex: form.name }) : 'ошибка!') : ''
                } readOnly/>
        </form>
    </div>
)
}
