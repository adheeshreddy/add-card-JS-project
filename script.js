    let btn =document.querySelector("#button1");
    let btn2 =document.querySelector("#button2");
    let cards=document.querySelector("#cards");
    var add=""
   function addCard(){
          fetch(`https://randomuser.me/api/`)
    .then( raw =>  raw.json())
    .then(result => {
        // console.log(result.results[0]);
            // console.log(elem);
        //object destructuring
        const{name ,email,picture}=result.results[0];
            add += `<div class="card">
            <img src="${picture.large}" alt="">
            <h4>${name.first}</h4>
            <h4>${email}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, vitae.</p>
          </div>`
          console.log("fetching done");
          cards.innerHTML=add;
         
    })
    }
    function addCards(){
        // https://randomuser.me/api/
        fetch(`https://randomuser.me/api/?results=50`)
        .then(raw => raw.json())
        .then(result => {
            // console.log(result.results[0]);
                //  console.log(result);
               result.results.forEach(function(elem){
                add += `<div class="card">
                <img src="${elem.picture.large}" alt="">
                <h4>${elem.name.first}</h4>
                <h4>${elem.email}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, vitae.</p>
              </div>`
               })
             
        })
        console.log("fetching done");
    }
    // async function addCardd (){
    //     console.log("2");
    //     const response= await fetch(`https://randomuser.me/api/`);
    //     // console.log(response);
    //     response.then(
    //         response=> response.json())
    // }

    btn.addEventListener("click",   function(){
        
         addCard(); 
        //  console.log("1");
        //  cards.innerHTML=add;
        
      
    })
    console.log(add);
    // btn2.addEventListener("click",function(){
        
    // })












// var ta=document.querySelector("textarea");
// var chars=document.querySelector("h3");
// ta.addEventListener("input",function(){
//     chars.textContent= "character count :"+`${ta.value.length}`;
// })

// var input=document.querySelector("input");
// data=[
//     {name:"adheesh",src:"image.jpg"},
//     {name:"adhiman",src:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D"},
//     {name:"adheeee",src:"https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D"},
//     {name:"adheesh",src:"image.jpg"},
//     {name:"adheesh",src:"image.jpg"},
//     {name:"advik",src:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D"},
//     {name:"adhi",src:"https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D"},
//     {name:"aditi",src:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D"},
// ]
// var pers="";
// data.forEach(function(elem){
//    pers += `<div class="person">
//     <div class="img"><img src="${elem.src}" alt=""></div>
//     <h4>${elem.name}</h4>
// </div>`
// })
// document.querySelector(".people").innerHTML=pers;
// input.addEventListener("input",function(){
//     var matching=data.filter(function(e){
//         return e.name.startsWith(input.value);
//     })
//     console.log(matching);
//     var newusers="";
// matching.forEach(function(elem){
//     newusers += `<div class="person">
//      <div class="img"><img src="${elem.src}" alt=""></div>
//      <h4>${elem.name}</h4>
//  </div>`
//  })
//  document.querySelector(".people").innerHTML=newusers;
// })






// let progress=document.querySelector("#progress");
// let h3=document.querySelector("h3");
// var count=5;
// let int=setInterval(function(){
//     if(count===100){
//         h3.style.opacity=1;
//         clearInterval(int);
//     }
//     progress.style.width=count+'%';
//     progress.textContent=count+'%';

//     count++;
// },100);


















// // let about=document.querySelector("#about");
// // let home=document.querySelector("#home");
// // let contact=document.querySelector("#contact");

// // let abouttext=document.querySelector("#abouttext");
// // let hometext=document.querySelector("#hometext");
// // let contacttext=document.querySelector("#contacttext");

// // hometext.style.display= "block";
// // hometext.style.width= "50%";

// // home.addEventListener("click",function(){
// //     removeAllText();

// //     hometext.style.display= "block";
// //     hometext.style.width= "50%";
// // })
// // about.addEventListener("click",function(){
// //     removeAllText();
// //     abouttext.style.display= "block";
// //     abouttext.style.width= "50%";
// // })
// // contact.addEventListener("click",function(){
// //     removeAllText();
// //     contacttext.style.display= "block";
// //     contacttext.style.width= "50%";
// // })

// // function removeAllText(){
// //     hometext.style.display= "none";
// //     abouttext.style.display= "none";
// //     contacttext.style.display= "none";
// // }













// // let btn=document.querySelector("#start");
// // let stop=document.querySelector("#stop");
// // let h3=document.querySelector("h3");
// // console.log(h3.value);
// // let int;
// // btn.addEventListener("click",function(){
// //     let count=0;
// // int =setInterval(function(){
// //     h3.textContent =count;
// //     count++;
// // },1000);
// // })

// // stop.addEventListener("click",function(){
// //     clearInterval(int);
// // })










// // let list=document.querySelector("ul");
// // let input=document.querySelector("input");
// // let add=document.querySelector("#add");
// // let remove=document.querySelector("#remove");
// // let li;

// // add.addEventListener("click",function(){
// //   li=  document.createElement('li');
// //     if(input.value.trim() === '' ){

// //     }
// //     else{
        
// //         li.textContent=input.value;
// //         list.appendChild(li);
// //         input.value='';
// //     }
// // })
// // remove.addEventListener("click",function(){
// //     list.removeChild(li);
// // })










// // let submit=document.querySelector("form");
// // //if there are 100 inputs this is not the correct way to deal with all 
// // //inputs but individually entering then 
// // // instead we can select all the inputs using wueryselectorall and in that we can seklect the inpurt fields whic are onr of yoe iput 
// // // basically this returns an nidearray wjich is soimilar to an array
// // let inps=document.querySelectorAll('input[type="text"]')
// // // let inp1=document.querySelector("#inp1");
// // // let inp2=document.querySelector("#inp2");
// // let h4=document.querySelector("h4");

// // console.log(inp1.value);

// // submit.addEventListener("submit",function(ev){
// //     ev.preventDefault();
// //     for(let i=0;i<inps.length;i++){
// //         if(inps[i].value===''){
// //             h4.textContent="field empty";
// //             break;
// //         }
// //         else{
// //             h4.textContent="";
            
// //         }
// //     }
// // })