import React from 'react'

function BuildAboutSection(props) {
    return (
        <div className="about-box">
            <h2 className="about-heading">{props.title}</h2>
    <h4 className="about-subtext-show">{props.data}</h4>
        </div>
    )
}

export default BuildAboutSection
