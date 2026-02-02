function printNtoOne(num) {
  if (num < 1) {
    return;
  }
  console.log(num);
  num = num - 1;
  printNtoOne(num);
}
printNtoOne(5);
