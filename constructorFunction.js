function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log('drawing...');
    }
}
const arr=[1,2,3,4];
const circle1=new Circle(1);
const circle2=new Circle(2);

console.log(circle1);//Circle { radius: 1, draw: [Function] }
console.log(circle2);//Circle { radius: 2, draw: [Function] }
console.log(circle1.constructor);//[Function: Circle]
console.log(Circle.constructor);
const another=Circle.call({},10);
console.log(another);

//DISPLAYING PROPERTIES OF CIRCLE

for(let key in circle1)
    console.log(key,circle1[key]);

//Symbol.iterator is used to check if for..of loop is used with particular object or not.

console.log("For string "+typeof arr[Symbol.iterator]);
