function breakOut(a, c, s) {
  for(let i = 0; i < a.length; i++) {
    if(a[i] === s) break;
    a[i] = c
  }
  return a
}
