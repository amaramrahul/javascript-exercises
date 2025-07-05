const fibonacci = function (mem) {
  mem = Number(mem);
  if (mem < 0) return "OOPS";
  return mem === 0
    ? 0
    : mem === 1 || mem === 2
    ? 1
    : fibonacci(mem - 1) + fibonacci(mem - 2);
};

// Do not edit below this line
module.exports = fibonacci;
