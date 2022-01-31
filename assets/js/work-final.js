// NEED TO BE REFACTOR TO USE A MORE PERFORMANT WAY TO DO THE SAME WORK

const data = Array.from(Array(35).keys());

for (let i = 0; i < data.length; i++) {
  const num = fibonacci(data[i]);
  console.log(num);
}

function fibonacci(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

window.addEventListener("load", () => {
  const data2 = Array.from(Array(50).keys());
  for (let i = 0; i < data.length; i++) {
    const num = fibonacci(data2[i]);
    console.log(num);
  }

  const data3 = Array.from(Array(40).keys());
  for (let i = 0; i < data.length; i++) {
    const num = fibonacci(data3[i]);
    console.log(num);
  }
});
