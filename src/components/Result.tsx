import React, { FC } from 'react'

type Prop = {
    value: string 
}

const Result: FC<Prop> = ({ value }) => {
    //console.log("result")
    return (
        <div className="result">
            <span>{value}</span>
        </div>
    )
}

Result.defaultProps = {
    value: "0"
}

export default Result;