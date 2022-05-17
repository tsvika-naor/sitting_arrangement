function Circle (props) {
    var circleStyle = {
        padding:10,
        margin:20,
        display:"inline-block",
        // position:'absolute',
        backgroundColor: "#393E41",
        borderRadius: "50%",
        width:300,
        height:300,
        left:0,
        top:0
      };
      circleStyle.backgroundColor = props.bgColor;
      return (
        <div style={circleStyle}>
            <div style= {{alignText:'center', fontSize:'50px', marginTop:'105px' }}>101</div>
        </div>
      );
    }

export default Circle;