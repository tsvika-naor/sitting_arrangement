import Oval from '../shapes/Oval'
import { useState } from 'react';
function TwoPersonTable (props) {
    var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363",
        "#85FFC7", "#297373", "#FF8552", "#A40E4C"];

    var renderData = [];

    for (var i = 0;i < colors.length;i++) {
        var color = colors[i];
        renderData.push(<Oval key={i + color} bgColor={color} />);
    }
    console.log(renderData)
    return (
        <div>
            {renderData}
        </div>
    )
}

export default TwoPersonTable;