const circle={
    radius:1,
    draw(){
        console.log("draw...");
    }
};

const other={};

//This is old method to clone objects.Try to avoid it.
for(let key in circle)
    other[key]=circle[key];

console.log("Old other object is "+other);

for(let key in other)
    console.log(key,other[key]);

/* OUTPUT:
 Old other object is [object Object]
radius 1
draw [Function: draw]
 */


//Clone object by using assign().
const another=Object.assign({},circle);
console.log("New another object is "+another);

for(let key in another)
    console.log(key,another[key]);

/* OUTPUT:
New another object is [object Object]
radius 1
draw [Function: draw]
 */


//To add a new property to object

const newone=Object.assign({color:"red"},circle);
console.log("New newone object is "+newone);
for(let key in newone)
    console.log(key,newone[key]);

    /* OUTPUT
    New newone object is [object Object]
    color red
    radius 1
    draw [Function: draw] */