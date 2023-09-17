import React from 'react'
import PropTypes from 'prop-types'

const SecondsCounter = (props) => {

    console.log(props.seconds)
    let hundredThousandths = Math.floor(props.seconds/100000).toString().slice(-1)
    let tenThousandths = Math.floor(props.seconds/10000).toString().slice(-1)
    let thousandths = Math.floor(props.seconds/1000).toString().slice(-1)
    let hundredths = Math.floor(props.seconds/100).toString().slice(-1)
    let tens = Math.floor(props.seconds/10).toString().slice(-1)
    let ones = props.seconds.toString().slice(-1)

    return (
        <div className = "row g-0 justify-content-center d-flex">
            <div className="col-6 justify-content-center d-flex">
                <div className="col-2 rounded border-right border-left bg-dark text-white text-center m-2 digit">
                    <h1 className="display-1">
                        <i className="fa-regular fa-clock"></i>
                    </h1>
                </div>
                <div className="col-1 rounded border-right border-left bg-dark text-white m-2 text-center digit">
                    <h1 className="display-1">
                        {hundredThousandths}
                    </h1>
                </div>
                <div className="col-1 rounded border-right border-left bg-dark text-white m-2 text-center digit">
                    <h1 className="display-1">
                        {tenThousandths}
                    </h1>
                </div>
                <div className="col-1 rounded border-right border-left bg-dark text-white m-2 text-center digit">
                    <h1 className="display-1">
                        {thousandths}
                    </h1>
                </div>
                <div className="col-1 rounded border-right border-left bg-dark text-white m-2 text-center digit">
                    <h1 className="display-1">
                        {hundredths}
                    </h1>
                </div>
                <div className="col-1 rounded border-right border-left bg-dark text-white m-2 text-center digit">
                    <h1 className="display-1">
                        {tens}
                    </h1>
                </div>
                <div className="col-1 rounded border-right border-left bg-dark text-white m-2 text-center digit">
                    <h1 className="display-1">
                        {ones}
                    </h1>
                </div>
            </div>
        </div>

    )
}

SecondsCounter.propTypes = {
    seconds: PropTypes.number
}

export default SecondsCounter;