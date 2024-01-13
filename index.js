
let a= 'avinash';
var b='sony';
b=9;
console.log(b);
console.log(a);
console.log('kaise hain saare');
var d='name';
let c='Name';
console.log(d==c);
let y={
    length:1,
    breadth:2,

    draw: function(){
console.log('drawing something vicious');
    }
};
y.side=34;
delete y.side;
console.log(y);
//factory function
function createObject(len,bre){
    let oje={
        breadth:len,
        length:bre,
    };
    return oje;
}
let sun= createObject(5,4);
console.log(sun.breadth);
//cunstructor function

function add1(){
this.a=4,
this.b=3,
this.draw=function(){
    console.log('drawing');
}
};

let adi=new add1();

let side ={
    now:3,
    bye:5,
};

for(let key in side){
console.log(key,side[key]);
}
for (let key of Object.entries(side)){
    console.log(key);
}
let src={
    a:2,
    b:40,
    c:67
};
//null object
let dest={};

for (let key in src){
    dest[key]=src[key];
}
console.log(dest);

function now(){

    return op={
        length:34,
        breadth:100,
        aadmi: function (){ 
console.log("be a better one");
        }
        
    }
    
};

let moon= now();
let b1= moon;


moon.length++;
console.log(moon.length);
console.log(b1.length);
moon.h=34;
moon.t=23;
delete moon.t;


let x=2;

    
    function inc (x){
        x++;
        console.log(x);
    }
inc(x);
console.log(x);
let firstName= new String ('Love');
let lastName= 'Adi';
let message=`This is my  ${firstName}
first message`;
console.log(message);
let date1= new Date(2003,6,14,19);
let Date2=new Date();
console.log(date1);
console.log(Date2);
let arr= [1,2,4,5,6];
console.log(arr.includes(1));

let oi={
    num:1,
    num1:2,
    draw :function(){
console.log('harami');
    }
};
//both of them are having different address as one is an object under arrray which is having a differnet address 
//as we are accessing the other object through object literal so it means this too having a different address
let mine=[
    {name1:2,name3:'Love'},
    {name2:3,name4:'Babbar'},
    
]
console.log(mine.includes({name1:2,name3:'Love'}));

let hum = mine.find(function(hum){
    return hum.name1==2;
})
console.log(hum);

let sii= mine.find(function(sii){
    return sii.name4=='Babbar';
})
console.log(sii);
let first=[2,3,4,5,6,8];
let second=[3,5,7,9,8,3,4];
console.log(first.splice(1,2,'a','b'));

let second1=first.concat(second);
console.log(second1);
//let combined=[...first,...second];
let combined = [...first,'a',true,...second,'b',false]
console.log(combined);
let combine1=[...first,...second];
console.log(combine1);
let another=[...combined];
console.log(another);

for(let a of first){
    console.log(a);
}

let now1=[4,5,6,7,8,8];
let join=now1.join(" hi ");
console.log(join);

let now2='Fuck off you tinker boii';

let hi=now2.split();
console.log(hi);
let joined=hi.join('_');
console.log(joined);
let numbers=[2,1,3,4,67];
//chaining of mapping and filtering
let num= numbers.filter(function(num){
    return num>=3;
}).map(function(num){
return {value:num}
})
console.log(num);

function sum(){
    let total=0;
    for(let key of arguments)
        total = total + key;
        return total;
    

}

let ans= sum(9,6,5,64,5,3,5);

console.log(ans);
let sum1 =function(...args){
    console.log(args);
}
sum1(1,2,3,4,5,6);
//getter let us to access the properties(function only)
//and setter let us to change or manipulate the properties(function only)
let person={
    fName:'Adi',
    Lname:'Pandey',
    get fullName(){
        return `${person.fName}    ${person.Lname} `;
    },
    set fullName(val){
if(typeof val !== String){
    throw new Error('you have send a wrong type')
}

        let parts=val.split(' ');
        this.fName=parts[0];
        this.lName=parts[1];

    }
};



try {
    person.fullName='ashok kumar';
} catch (e) {
    alert(e);
}
console.log(person.fullName);