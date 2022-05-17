import Circle from '../shapes/Circle'
import { useState } from 'react';
function OnePersonTable (props) {
    var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363",
        "#85FFC7", "#297373", "#FF8552", "#A40E4C"];

    var renderData = [];

    for (var i = 0;i < colors.length;i++) {
        var color = colors[i];
        renderData.push(<Circle key={i + color} bgColor={color} />);
    }
    console.log(renderData)
    return (
        <div>
            {renderData}
        </div>
    )
}

export default OnePersonTable