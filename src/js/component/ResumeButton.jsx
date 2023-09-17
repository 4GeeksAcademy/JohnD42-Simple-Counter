import React from 'react'

const ResumeButton = (props) => {
    const resumeCounter = props.resumeCounter
    const pauseCounter = props.pauseCounter
    const seconds = props.seconds
    const resetCounter = props.resetCounter

    return (
        <div className="col-1 mx-auto">
            <button className="btn bg-dark  text-white btn-secondary" onClick={() => resumeCounter()}><i class="fa-solid fa-play"></i></button>
        </div>
        )
}

export default ResumeButton 