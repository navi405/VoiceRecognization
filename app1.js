// // var val=document.all;  //all is used to access all the tags
// // console.log(val);

// var val=document.all;
// console.log(val(1));

// // val=document.body;  //it is used to check by directly access particular the tags
// // console.log(val);

// // document.doctype;  
// // document.head;  
// // document.body;  //etc...,


// // let images=document.images;  //it is used to access a images through js
// // console.log(images);
// //or
// // [...images].forEach(x => console.log(x));
// //or
// // [...images].map(x => console.log(x));
// // //or
// // for (let x of images) {
// //     console.log(x);
// // }
// // //or
// // for (var i=0;i<images.length;i++) {
// //     console.log(images[i]);
// // }

// // [...images].forEach(x => {
// //     x.classList.add("jspiders-images","qspiders"); //adding class to an element through js
// //     x.id="images";  //adding id to an element through js
// //     x.classList.remove("test");  //removing class to an element through js
// // });

// // [...images].forEach(x => {
// //     let getattribute=x.getAttribute("class");  //setting new attributes through js
// //     let setattribute=x.setAttribute("title","all images are good");  //creating new attributes through js
// //     console.log(getattribute);
// // });

// let links=document.links;
// console.log(links);

// [...links].forEach(link => {
//     link.classList.add("link");
//     link.style.background="red";
//     link.style.color="white";
//     link.style.padding="10px";
//     link.style.border="1px solid #111";
//     link.style.borderRadius="4px";
// });

// var ul=document.getElementById("ul"); //id dom method
// var li=document.getElementsByClassName('li');
// var tag=document.getElementsByTagName("a");
// console.log(ul);
// [...li].map(x => console.log(x));
// [...tag].map(y => console.log(y));
// // console.log(li);

// let ul=document.getElementById("ul");
// let lis=ul.getElementsByTagName("li");
// [...li].map(x => {
//     li.style.background='#eee';
//     li.style.padding="10px";
//     li.style.color='#111';
//     li.style.border='1px sold #111';
//     li.style.marginBottom="10px";
//     li.style.listStyle="none";
// });

// let ul=document.querySelector("#ul");  //just like css selectors...
// // let li=document.querySelector(".li-list");
// // let li=document.querySelectorAll(".li-list");
// console.log(ul);
// console.log(li);

// let liFirst=document.querySelectorAll(".li-list:first-child");
// let liLast=document.querySelectorAll(".li-list:last-child");
// let nthChild=document.querySelectorAll(".li-list:nth-child(3)");

// liFirst.forEach(x => {
//     x.style.background='#eee';
//     x.style.padding="10px";
//     x.style.color='#111';
//     x.style.border='1px sold #111';
//     x.style.marginBottom="10px";
//     x.style.listStyle="none";
// });

// liLast.forEach(x => {
//     x.style.background='#fff';
//     x.style.padding="10px";
//     x.style.color='#111';
//     x.style.border='1px sold #111';
//     x.style.marginBottom="10px";
//     x.style.listStyle="none";
// });

// nthChild.forEach(x => {
//     x.style.background='#ccc';
//     x.style.padding="10px";
//     x.style.color='#111';
//     x.style.border='1px sold #111';
//     x.style.marginBottom="10px";
//     x.style.listStyle="none";
// });

// let liOdd=document.querySelectorAll(".li-list:nth-child(odd)");
// let liOdd=document.querySelectorAll(".li-list:nth-child(odd)");

// liOdd.forEach(odd => {
//     odd.classList.add("odd");
//     odd.textContent="odd here"
// });

// liOdd.forEach(odd => {
//     odd.classList.add("odd");
//     odd.textContent="odd here"
// });



// var btn=document.getElementById("btn");
// console.log(btn);

// btn.addEventListener('click',() => {
// alert('button clicked');
// document.body.style.background="red";
// });


// var btn=document.getElementById("btn");
// var btn1=document.getElementById("btn1");
// btn.addEventListener("click",() => {
//     var template1=document.getElementById('template');
//     template1.innerHTML=`<h1>Template1</h1>`
// });
// btn1.addEventListener("click",() => {
//     var template2=document.getElementById('template1');
//     template2.innerHTML=`<h1>Template2</h1>`
// });


// var btn=document.getElementById("btn");
// var btn1=document.getElementById("btn1");
// var template1=document.getElementById('template');
// var template2=document.getElementById('template1');
// btn.addEventListener("click",() => {
//     template1.style.display='block';
//     template2.style.display='none';
//     template1.innerHTML=`<h1>Template1</h1>`
// });
// btn1.addEventListener("click",() => {
//     template1.style.display='none';
//     template2.style.display='block';
//     template2.innerHTML=`<h1>Template2</h1>`
// });

// var btn=document.getElementById("btn");  //for mouse event
// btn.addEventListener("mouseenter",e => {
//     console.log(e);
// });

// var search=document.getElementById("search");  //for keyboard event
// search.addEventListener("keyup",e => {
//     console.log(e.target.value);
// });

// var form=document.querySelector("#form");
// form.addEventListener('submit',e => {
//     e.preventDefault()  //preventdefault is used for not triggered the entered words
//     console.log(e);
// });

// var form=document.querySelector("#form");
// form.addEventListener('submit',e => {
//     e.preventDefault()  //preventdefault is used for not triggered the entered words
//     console.log(form.username.value);
// });

// var username="navi"; //synchronize method
// var company="MS";
// console.log(username);
// console.log(company);

// var username="navi"; //synchronize method
// setTimeout(() => {
//     console.log("ajax is started"); 
// },10000);
// var company="MS";
// console.log('test');
// console.log(username);
// console.log(company);

// var myPromise=new Promise((resolve,reject) => {
//     var isClean=true;
//     if(isClean) {
//         resolve('room Cleaned');
//     } else {
//         reject('room is not Cleaned');
//     }
// });

// myPromise.then(data => {
//     console.log(myPromise)
// }).catch(err => console.log(err));

// var myPromise=new Promise(function(resolve,reject)  {
//     var isClean=true;
//     if(isClean) {
//         resolve('room Cleaned');
//     } else {
//         reject('room is not Cleaned');
//     }
// });
// myPromise.then(data => console.log(data)).catch(err => console.log(err));   

// var myPromise=new Promise(function(resolve,reject)  {
//     setTimeout(() => {
//         resolve('hello resolve here');
//          },100);
//          setTimeout(() => {
//             reject('hello reject here');
//              },100);
// });
// myPromise.then(data => console.log(data)).catch(err => console.log(err));  


// var Promise1=new Promise((resolve,reject) => {   //if any 1 promise is false it will print reject otherwise if it all true means its print resolve
//     resolve("promise 1 here");
// });
// var Promise2=new Promise((resolve,reject) => {
//     resolve("promise 2 here");
// });
// var Promise3=new Promise((resolve,reject) => {
//     reject("promise 3 rejected here");
// });
// Promise.all([Promise1,Promise2,Promise3])  //or //Promise.race([Promise1,Promise2,Promise3])
// .then(data => {
//     console.log(data);
// })
// .catch(err => console.log(err));

window.fetch("https://api.github.com/users")   //window.fetch() is used to call the API
.then(data => {console.log(data);
})
.catch(err => console.log(err));