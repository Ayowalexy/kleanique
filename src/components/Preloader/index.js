import React from "react";
import './preloader.styles.css'

const Preloader = () => {
    return (
        <div
            className="preloader_"
        >
            <div>
                <div className="col-md-2">
                    <div className="preloader-whirlpool">
                        <div className="whirlpool"></div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="preloader-floating-circles">
                        <div className="f_circleG" id="frotateG_01"></div>
                        <div className="f_circleG" id="frotateG_02"></div>
                        <div className="f_circleG" id="frotateG_03"></div>
                        <div className="f_circleG" id="frotateG_04"></div>
                        <div className="f_circleG" id="frotateG_05"></div>
                        <div className="f_circleG" id="frotateG_06"></div>
                        <div className="f_circleG" id="frotateG_07"></div>
                        <div className="f_circleG" id="frotateG_08"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preloader