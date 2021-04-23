
import { FC } from 'react'
import Button, { ButtonClickHandler } from "./Button"

const numbers = [7,8,9,4,5,6,1,2,3, 0];


const renderButtons = (onClickNumber: ButtonClickHandler) => numbers.map( (number: number) =>  <Button key={number.toString()} text={number.toString()} clickHandler={onClickNumber} />)

type Props = {
    onClickNumber: ButtonClickHandler
}

const Numbers: FC<Props> = ({onClickNumber}) => {
    return (
        <section className="numbers">
            { renderButtons(onClickNumber) }
        </section>
    )
}

export default Numbers;