function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

window.addEventListener("load", () => {
  const data2 = Array.from(Array(40).keys());
  for (let i = 0; i < data.length; i++) {
    const num = fibonacci(data2[i]);
    console.log(num);
  }
});
