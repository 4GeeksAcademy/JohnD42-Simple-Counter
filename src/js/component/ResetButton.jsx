import React from 'react'

const ResetButton = (props) => {
    const resumeCounter = props.resumeCounter
    const pauseCounter = props.pauseCounter
    const seconds = props.seconds
    const resetCounter = props.resetCounter

    return (
        <div className="col-1 mx-auto">
            <button className="btn bg-dark  text-white btn-secondary" onClick={() => resetCounter()}><i class="fa-solid fa-stop"></i></button>
        </div>
        )
}

export default ResetButton 