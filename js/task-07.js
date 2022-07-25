const inputRangeRef = document.querySelector("#font-size-control");
const inputTextRef = document.querySelector("#text");

const onInputSize = () => {
  inputTextRef.style.fontSize = `${inputRangeRef.value}px`;
};

inputRangeRef.addEventListener("input", onInputSize);
