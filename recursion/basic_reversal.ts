function nRev(n: number): void {
    if(n===0) return
    console.log(n)
    nRev(n-1);
}

console.log(nRev(10))