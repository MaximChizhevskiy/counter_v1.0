import React, {ChangeEvent, FC, useState} from 'react';
import s from './Counter.module.css'
import {Button} from "./button/Button";
import {Input} from "./input/Input";

export const Counter: FC = () => {
    const messageForEnterValues: string = 'Enter values and press "set"'
    const initialMinValue: string = localStorage.getItem("counterMinValue") || "0"
    const initialMaxValue: string = localStorage.getItem("counterMaxValue") || "5"
    const initialCurrentValue = (!localStorage.getItem("counterMinValue")) ? messageForEnterValues : initialMinValue

    const errorMessage: string = "Incorrect value"

    const [currentValue, setCurrentValue] = useState<string | number>(initialCurrentValue)
    const [minValue, setMinValue] = useState<string>(initialMinValue)
    const [maxValue, setMaxValue] = useState<string>(initialMaxValue)

    const currentValueStyle: string = `${s.currentValue} ${
        minValue === '-1' || minValue === maxValue || currentValue == maxValue
            ? s.errorValue
            : ''
    }`

    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value === "-1" || e.currentTarget.value === maxValue) {
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
    }

    const incButtonHandler = () => {
        setCurrentValue(+currentValue + 1)
    }

    const resetButtonHandler = () => {
        setCurrentValue(minValue)
        localStorage.clear()
    }

    const messagesForUser: string = messageForEnterValues || errorMessage
    //conditions for buttons disable
    const setButtonDisabled: boolean = minValue === "-1" || minValue === maxValue || currentValue !== messagesForUser
    const resetButtonDisabled = typeof currentValue === "string"
    const incButtonDisabled: boolean = minValue === "-1" || currentValue == maxValue || minValue === maxValue || currentValue === messagesForUser

    return (
        <div className={s.counterStyles}>
            {/*Value setting block*/}
            <div className={s.block}>
                <div className={s.valuesArea}>
                    <label> max value:
                        <Input type={"number"}
                               value={maxValue}
                               onChange={onChangeMaxValueHandler}
                               limitMinValue={minValue}/>
                    </label>
                    <label> min value:
                        <Input type={"number"}
                               value={minValue}
                               onChange={onChangeMinValueHandler}
                               limitMinValue={"-1"}
                               limitMaxValue={maxValue}/>
                    </label>
                </div>

                <div className={s.buttonsArea}>
                    <Button title={"set"}
                            onClick={setButtonHandler}
                            disabled={setButtonDisabled}/>
                </div>
            </div>
            {/*Counter block */}
            <div className={s.block}>
                <div className={s.valuesArea}>
                    <span className={currentValueStyle}>{currentValue}</span>
                </div>

                <div className={s.buttonsArea}>
                    <Button title={"inc"}
                            onClick={incButtonHandler}
                            disabled={incButtonDisabled}/>
                    <Button title={"reset"}
                            onClick={resetButtonHandler}
                            disabled={resetButtonDisabled}/>
                </div>
            </div>
        </div>
    );
};
