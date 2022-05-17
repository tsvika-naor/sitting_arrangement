import Triangle from '../shapes/Triangle'
import { useState } from 'react';
function ThreePersonTable (props) {
    var colors = ["400px solid #393E41", "400px solid #E94F37", "400px solid #1C89BF", "400px solid #A1D363",
        "400px solid #85FFC7", "400px solid #297373", "400px solid #FF8552", "400px solid #A40E4C"];

    var renderData = [];

    for (var i = 0;i < colors.length;i++) {
        var color = colors[i];
        renderData.push(<Triangle key={i + color} bgColor={color} />);
    }
    console.log(renderData)
    return (
        <div>
            {renderData}
        </div>
    )
}

export default ThreePersonTable