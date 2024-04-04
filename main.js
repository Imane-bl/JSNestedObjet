//79-85 object /methode
//79 intro/testiing/accessing obj
let user={
    //prperties
    theName: "osama",
    theAge: 38,
    //methods
    sayHello: function(){ 
      //  console.log("hii") mieux faire return
      return 'hiii'
    }
}

console.log(user.theName)
console.log(user.theAge)
console.log(user.sayHello())

//-##################80 -do notion vs bracket notion--###########"#####{----

//BIG deeper/dot notation/dynamic property name
let usere={
    //prperties
   "Name": "ama",
    "c of": "egipt",
 
}

console.log(usere.Name)
console.log(usere["Name"]),
console.log(usere["c of"])//il faut [ ] not .

//------------------------

let myvar= "c"

 let u={
    Name: "imane",
    c : "alger",
 }

 console.log(u.c)//alger nrml
 console.log(u.myvar)//udentified //il faut utiliser[ ] pour acceder a dynamic property
 console.log(u[myvar]) //alger

//####################################################################
//81 nested obg advanced things

//let avlbl= true;
let us= {
    n: "imane",
    age: 40,
    skills :["html","csss","js"],
    avlbl :false,
    address : {
     ksa:"riyad",
     ejypt:{ 
        one:"cario",
        two: "giza"},
    },
    checkav: function(){
        if(us.avlbl === true){
            //(avlbl===true)
            return 'free for'}
            else{return "not free"}
        }
    }
    console.log(us["address"]["ejypt"]["one"])//cario
    console.log(us.address.ejypt.one)//cario

    console.log(us.skills.join("|"))//html | css | js
    console.log(us.skills[0])//html 
    console.log(us.checkav())//html 
    //sinon nkhrj let avlbl =false, w nkhli avlbl whdha nrml kif kif


//####################################################################
//82 creat obj new keybord
let u2 = new Object({
    a:20,
});
console.log(u2);

u2.a=38;
u2["co"] = "egypt";
u2.say = function() {

return "fiii";

    
}

console.log(u2);
console.log(u2.say());

//####################################################################
//83 THIS KEYWORD/this inside obj

console.log(this)
console.log(this === window)//true
my = 100;
console.log(window.my)
console.log(this.my)

function sayhii(){
    console.log(this);
    return this;
}
sayhii(); //lwidow hadik
console.log(sayhii() === window);//true

document.getElementById("cl").onclick = function(){
    console.log(this); //this referce to click quand 
    //je click sur le button tkhrj 
}

let u3 = {
    a:20,
    ageindays: function () {
        return u3.a*356
    }
};
console.log(u3.a);
console.log(u3.ageindays());
//maintenat utilise this
//when a func is called as a methode of an obj,
//its this is set to the obj the method is called on 
let u3t = {
    agee:20,
    ageindays: function () {
        return this.agee*356 //le meme res
    }
};
console.log(u3t.agee);
console.log(u3t.ageindays());

//####################################################################
//84 creat obj with methode
let u4 = {
    a:20,
    double: function () {
        return this.a*2
    }
};

console.log(u4.a);
console.log(u4.double());

//*********************************/
let obj = Object.create({});

obj.a = 100;


console.log(obj);//a=100{}

let copyobj= Object.create(u4);
 copyobj.a=30;
console.log(copyobj.a);
console.log(copyobj.double());// 20/40

//note: hna kizt line  copyobj.a=30; res=30,40 machi 60
//pour resoudre ce prblm jutilse this(t3oud ela obj) f blast u4 f lmethode hadik lwla


//####################################################################
//85 CREAT OBJ WITH ASSIGN METHODE
let obj1 ={
    prop1:1,
    meth:function(){
        return this.prop1;
    }
}
let obj2 ={
    prop2:2,
    meth:function(){
        return this.prop2;
    }
}
let targetobj3 ={
    prop3:3,
        prop1:10,
    }
    let finalobj =Object.assign(targetobj3,obj1,obj2)
    finalobj.prop1 =200;
    finalobj.prop4 =600;
    console.log(finalobj);//p3,p1-400,P2,p4-600 METH F

      let newobj =Object.assign({},obj1,{prop5:5,prop6:6});
      console.log(newobj);//{  "prop1": 1,  "prop5": 5, "prop6": 6 }
      
      //################################################################