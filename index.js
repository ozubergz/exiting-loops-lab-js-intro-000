function breakOut(a, cv, sv) {
  for(let i = 0; i < a.length; i++) {
    a[i] = cv
    if(a[i] === sv) break;
  }
}
