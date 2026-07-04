function repeatedCharacter(s) {
    // Your code here
    // But this one is failing this specific test case
    /**
     * when s = "revav"
     */
    let a = 0, b = 1;
    let res = '';
    for(let i = 0; i<s.length; i++) {
        if(s.charAt(a) === s.charAt(b)){
            res+=s.charAt(a);
            break;

        } else if(s.charAt(b) === s.charAt(b+1)) {
            res+=s.charAt(b);
            break;
        }
         else {
            b++;
        }

    }

    return res;


}