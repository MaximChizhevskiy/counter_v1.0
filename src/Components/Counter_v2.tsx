import React, {ChangeEvent, FC, useState} from 'react';
import s from './Counter.module.css'
import sButton from './button/Button.module.css'
import sInput from './input/Input.module.css'

import {Button} from "./button/Button";
import {Input} from "./input/Input";


export const CounterVerTwo: FC = () => {
    let messageForEnterValues = 'Enter values and press "set"'
    const errorMessage = "Incorrect value"

    const initialMinValue = localStorage.getItem("counterMinValue") || "0"
    const initialMaxValue = localStorage.getItem("counterMaxValue") || "5"

    //const initialCurrentValue = (!localStorage.getItem("counterMinValue")) ? messageForEnterValues : initialMinValue

    const [counterBlock, setCounterBlock] = useState(true)
    const [currentValue, setCurrentValue] = useState<string | number>(initialMinValue)
    const [minValue, setMinValue] = useState(initialMinValue)
    const [maxValue, setMaxValue] = useState(initialMaxValue)

    messageForEnterValues = minValue !== '-1' || minValue !== maxValue
        ? 'Enter values and press "set"'
        : errorMessage


    const currentValueStyle: string = `${s.currentValue} ${
        minValue === '-1' || minValue === maxValue || currentValue == maxValue
            ? s.errorValue
            : ''
    }`

    const buttonClassName = `${sButton.buttonStyles}`
    const inputClassName = `${sInput.inputStyles} ${
        minValue === "-1" || minValue === maxValue || minValue === maxValue
            ? sInput.inputError
            : ''
    }`

    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value === maxValue || e.currentTarget.value == "-1") {
            setCurrentValue(errorMessage)
        } else {
            setCurrentValue(messageForEnterValues)
        }
        setMinValue(e.currentTarget.value)
    }

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value === minValue) {
            setCurrentValue(errorMessage)
        } else {
            setCurrentValue(messageForEnterValues)
        }
        setMaxValue(e.currentTarget.value)
    }

    const setButtonHandler = () => {
        setCurrentValue(minValue)
        localStorage.setItem("counterMinValue", minValue)
        localStorage.setItem("counterMaxValue", maxValue)
        setCounterBlock(true)
    }

    const setMenuButtonHandler = () => {
      setCounterBlock(false)
    }

    const incButtonHandler = () => {
        setCurrentValue(+currentValue + 1)
    }

    const resetButtonHandler = () => {
        setCurrentValue(minValue)
        localStorage.clear()
    }

    const messagesForUser = messageForEnterValues || errorMessage
    //conditions for buttons disable
    const setButtonDisabled: boolean = minValue === "-1" || minValue === maxValue
    const resetButtonDisabled = typeof currentValue === "string"
    const incButtonDisabled: boolean = minValue === "-1" || currentValue == maxValue || minValue === maxValue || currentValue === messagesForUser

    return (
        <div className={s.counterStyles}>
            {counterBlock && <div className={s.block}>
                    <div className={s.valuesArea}>
                        <span className={currentValueStyle}>{currentValue}</span>
                    </div>
                    <div className={s.buttonsArea}>
                        <Button className={buttonClassName}
                                title={"inc"}
                                onClick={incButtonHandler}
                                disabled={incButtonDisabled}/>
                        <Button className={buttonClassName}
                                title={"reset"}
                                onClick={resetButtonHandler}
                                disabled={resetButtonDisabled}/>
                        <Button className={buttonClassName}
                                title={"set"}
                                onClick={setMenuButtonHandler}
                                disabled={false}/>
                    </div>
                </div>
            }
            {/*Value setting block*/}
            {!counterBlock && <div className={s.block}>
                <div className={s.valuesArea}>
                    <label> max value:
                        <Input className={inputClassName}
                               type={"number"}
                               value={maxValue}
                               onChange={onChangeMaxValueHandler}
                               limitMinValue={minValue}/>
                    </label>
                    <label> min value:
                        <Input className={inputClassName}
                               type={"number"}
                               value={minValue}
                               onChange={onChangeMinValueHandler}
                               limitMinValue={"-1"}
                               limitMaxValue={maxValue}/>
                    </label>
                </div>
                <div className={s.buttonsArea}>
                    <Button className={buttonClassName}
                            title={"set"}
                            onClick={setButtonHandler}
                            disabled={setButtonDisabled}/>
                </div>
            </div>}
        </div>
    );
};
