module.exports = function pyramid (val) {
  if (typeof val === 'string') {
    throw new Error('x needs to be a number')
  }
  if (val < 0) {
    throw new Error('x needs to be positive')
  }
  let a = 0;
  let e = 'x';
  while(a < val) {
    console.log(e);
    a += 1;
    e += 'x';
  }
}