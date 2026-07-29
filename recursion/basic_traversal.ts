const forward = (n: number = 1): void => {
    if(n===11) return
    console.log(n)
    forward(n+1);
}

console.log(forward())