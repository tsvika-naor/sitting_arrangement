function Triangle (props) {
    var triangleStyle = {
        margin: 20,
        display: "inline-block",
        width: 0,
        height: 0,
        borderLeft: '200px solid transparent',
        borderRight: "200px solid transparent",
        borderBottom: "400px solid red",
    };
    triangleStyle.borderBottom = props.bgColor;
    return (
        <div style={triangleStyle}>
            <div style={{ alignText: 'center', fontSize: '50px', marginTop: '105px' }}>101</div>
        </div>
    );
}

export default Triangle
