function sum(n: number): number{
    if(n===1) return n //bc
    return sum(n-1) + n;
}