                                /* Factory Functions:
                                1)We can create as many objects as we can.
                                2)Objects can be directly returned.
                                3)camelCasing is preferable.
                                4)Object has key-value pairs.
                                
                                */

function createCircle(radius){
        return{
            radius,
            draw:function(){
                console.log("drawing..");
            }
        };
}

const circle1=createCircle(2);
console.log(circle1);//OUPTUT:{ radius: 2, draw: [Function: draw] }
const circle2=createCircle(3);
console.log(circle2);//OUPTUT:{ radius: 3, draw: [Function: draw] }