export function compileSeconds(totalSeconds) {
  let hr = Math.floor(totalSeconds / 3600);
  let min = Math.floor((totalSeconds - hr * 3600) / 60);
  let sec = totalSeconds - hr * 3600 - min * 60;
  return (
    "" +
    (hr ? hr + ":" : "") +
    (min ? min : "0") +
    ":" +
    (sec ? (sec < 10 ? sec + "0" : sec) : "00")
  );
}

export function handleOnMouseEnter(obj) {
  obj.setState({ hover: !obj.state.hover });
}

export function handleOnMouseLeave(obj) {
  obj.setState({ hover: !obj.state.hover });
}
