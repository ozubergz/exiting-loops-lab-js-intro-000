function breakOut(a, cv, sv) {
  for(let i = 0; i < a.length; i++) {
    if(a[i] === sv) break;
    a[i] = cv
  }
  return a
}
