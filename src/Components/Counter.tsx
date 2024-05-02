import React, {ChangeEvent, FC, useState} from 'react';
import s from './Counter.module.css'
import {Button} from "./button/Button";
import {Input} from "./input/Input";

export const Counter: FC = () => {

    let [currentValue, setCurrentValue] = useState<string | number>("Set your min value")
    let [minValue, setMinValue] = useState<string>("0")
    let [maxValue, setMaxValue] = useState<string>("5")

    const setButtonHandler = () => {
        setCurrentValue(minValue)
    }

    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setMinValue(e.currentTarget.value)
    }

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.value)
    }


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
                    <Button title={"set"} onClick={setButtonHandler}/>
                </div>
            </div>
            {/*Блок счётчика */}
            <div className={s.block}>
                <div className={s.valuesArea}>
                    {currentValue}
                </div>
                <div className={s.buttonsArea}>
                    <Button title={"inc"}/>
                    <Button title={"reset"}/>
                </div>

            </div>

        </div>
    );
};
