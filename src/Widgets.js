import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            <div className="widgets__article">
                <div className="widgets__aritcleLeft">
                    <FiberManualRecordIcon />
                </div>
                <div className="widgets__articleRight">
                    <h4>SemZul React is back</h4>
                    <p>Top news - readers 9999</p>
                </div>
            </div>
            <div className="widgets__article">
                <div className="widgets__aritcleLeft">
                    <FiberManualRecordIcon />
                </div>
                <div className="widgets__articleRight">
                    <h4>Coronavirus Update in Bosnia</h4>
                    <p>Top news - readers 12323</p>
                </div>
            </div>
            <div className="widgets__article">
                <div className="widgets__aritcleLeft">
                    <FiberManualRecordIcon />
                </div>
                <div className="widgets__articleRight">
                    <h4>Is Redux too good?</h4>
                    <p>Top news - readers 6503</p>
                </div>
            </div>
        </div>
    )
}

export default Widgets
