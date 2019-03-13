// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let cash = currency;
    let str = '';
    barrel = new Object();
    let h = 0;
    let q = 0;
    let d = 0;
    let n = 0;
    let p = 0;
    if ( cash <= 0)
    {
        barrel = {};
    }
    else if ( cash > 10000)
    {
        barrel = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    else 
    {
        h = Math.floor( cash / 50);
        cash = cash % 50;


        q = Math.floor( cash / 25);
        cash = cash % 25;

        d = Math.floor( cash / 10);
        cash = cash % 10;
        n = Math.floor( cash / 5);
        cash = cash % 5;
        p = Math.floor( cash / 1);
        if ( h != 0)
        {
            barrel.H = h;    
        }
        if ( q != 0)
        {
            barrel.Q = q;    
        }
        if ( d != 0)
        {
            barrel.D = d;  
        }
        if ( n != 0)
        {
            barrel.N = n;    
        }
        if ( p != 0)
        {
            barrel.P = p;  
        }
    }
    return barrel;
}

