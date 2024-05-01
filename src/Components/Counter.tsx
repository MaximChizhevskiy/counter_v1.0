import React, {FC} from 'react';
import s from './Counter.module.css'
import {Button} from "./button/Button";
import {Input} from "./input/Input";

export const Counter: FC = () => {

    return (
        <div className={s.counterStyles}>

            <div className={s.setValueBlock}>

                <div className={s.valuesArea}>
                    <label>max value: <Input type={"number"}/></label>
                    <label>min value: <Input type={"number"}/></label>
                </div>
                <div className={s.buttonsArea}>
                    <Button title={"set"}/>
                </div>
            </div>

            <div className={s.counterBlock}>


            </div>
        </div>
    );
};
