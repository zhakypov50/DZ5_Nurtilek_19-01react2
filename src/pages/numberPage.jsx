import React from "react";
import Input from "../components/Input";
import {useDispatch, useSelector} from "react-redux";
import Button from "../components/Button";
import {addNumberAction, changeNumberAction, clearNumberAction} from "../redux/action";

export default function NumberPage() {
    const dispatch = useDispatch()
    const {number, arrNumber} = useSelector(state => state)

    const handleChange = ({target}) => {
        dispatch(changeNumberAction(target.value))
    }

    const handleAdd = () => {
        dispatch(addNumberAction())
    }

    const handleClear = () => {
        dispatch(clearNumberAction())
    }

    return<>
        <Input value={number} onChange={handleChange}/>
        <Button onClick={handleAdd}>add</Button>
        <Button onClick={handleClear}>clear</Button>
        {arrNumber.map(item => <h1 key={item}>{item}</h1>)}
    </>
}