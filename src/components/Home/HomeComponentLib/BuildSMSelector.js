import React,  { useState, useEffect } from 'react';

function BuildSMSelector() {

    const [social, setSocial] = useState(0);

    // function SMSelector(e) {
    //     alert(e);

    //     useEffect(() => {

    //     });
    // }
        

    return (
        <div>
            {/* {
                switch(social){
                    case "yt":
                        return <h1>Youtube</h1>;
                        break;
                    case "fb":
                        return <h1>Facebook</h1>;
                        break;
                }
            } */}
            <div className="SM-selector-container">
                <div id="SM-selector-youtube" onMouseEnter={setSocial("yt")}>Youtube</div>
                <div id="SM-selector-facebook" onMouseEnter={setSocial("fb")}>Facebook</div>
                <div id="SM-selector-instagram" onMouseEnter={setSocial("ig")}>Instagram</div>
                <div id="SM-selector-twitter" onMouseEnter={setSocial("tw")}>Twitter</div>
            </div>
        </div>
    )
}

export default BuildSMSelector
