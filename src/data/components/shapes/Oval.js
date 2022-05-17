function Oval (props) {
  var circleStyle = {
    padding: 10,
    margin: 20,
    display: "inline-block",
    width: 500,
    height: 300,
    background: "#red",
    borderRadius: "50%"
  };
  circleStyle.backgroundColor = props.bgColor;
  return (
    <div style={circleStyle}>
    <div style= {{alignText:'center', fontSize:'50px', marginTop:'105px'}}>101</div>
    </div>
  );
}

export default Oval;
