import React, {ChangeEvent, FC, useState} from 'react';
import s from './Counter.module.css'
import {Button} from "./button/Button";
import {Input} from "./input/Input";

export const Counter: FC = () => {
    const messageForEnterValues:string = 'Enter values and press "set"'
    const errorMessage:string = "Incorrect value"

    const [currentValue, setCurrentValue] = useState<string | number>(messageForEnterValues)
    const [minValue, setMinValue] = useState<string>("0")
    const [maxValue, setMaxValue] = useState<string>("5")
    const [error, setError] = useState<boolean>(false)

    const currentValueStyle: string = `${s.currentValue} ${
        minValue === '-1' || minValue === maxValue 
            ? s.errorValue 
            : ''
    }`

    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value === "-1" || e.currentTarget.value === maxValue) {
            setCurrentValue("Incorrect value")
        } else {
            setCurrentValue('Enter values and press "set"')
        }
        setMinValue(e.currentTarget.value)
    }

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value === minValue) {
            setCurrentValue("Incorrect value")
        } else {
            setCurrentValue('Enter values and press "set"')
        }
        setMaxValue(e.currentTarget.value)
    }

    const setButtonHandler = () => {
        setCurrentValue(minValue)
    }

    const incButtonHandler = () => {
        setCurrentValue(+currentValue + 1 )
    }

    const resetButtonHandler = () => {
      setCurrentValue(minValue)
    }


    const messagesForUser:string = messageForEnterValues || errorMessage
    const setButtonDisabled:boolean = minValue === "-1"  || minValue === maxValue
    const counterButtonDisabled = false

    return (
        <div className={s.counterStyles}>
            {/*Блок установки значения*/}
            <div className={s.block}>
                <div className={s.valuesArea}>
                    <label> max value:
                        <Input type={"number"}
                               value={maxValue}
                               onChange={onChangeMaxValueHandler}
                               limitMinValue={minValue}
                        />
                    </label>
                    <label> min value:
                        <Input type={"number"}
                               value={minValue}
                               onChange={onChangeMinValueHandler}
                               limitMinValue={"-1"}
                               limitMaxValue={maxValue}
                        />
                    </label>
                </div>

                <div className={s.buttonsArea}>
                    <Button title={"set"}
                            onClick={setButtonHandler}
                            disabled={setButtonDisabled}/>
                </div>
            </div>
            {/*Блок счётчика */}
            <div className={s.block}>
                <div className={s.valuesArea}>
                    <span className={currentValueStyle}>{currentValue}</span>
                </div>

                <div className={s.buttonsArea}>
                    <Button title={"inc"}
                            onClick={incButtonHandler}/>
                    <Button title={"reset"}
                            onClick={resetButtonHandler}
                            disabled={counterButtonDisabled}/>
                </div>
            </div>
        </div>
    );
};
