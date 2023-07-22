const hour=document.getElementById("hr")
const minute=document.getElementById("min")
const second=document.getElementById("sec")

const button=document.getElementById("btn")
let interval=null
//give the total of hr ,min,and sec
let total=0;

totalValue=()=>{
    const hour1=document.getElementById("hr1")

const minute1=document.getElementById("min1")
const second1=document.getElementById("sec1")
    //number-->to convert string into number
    //convert all value in second
    total=Number(hour1.value)*3600+Number(minute1.value)*60+Number(second1.value)
}
Timer=()=>{
    const hour1=document.getElementById("hr1")

    const minute1=document.getElementById("min1")
    const second1=document.getElementById("sec1")
    totalValue();
    //decresing the totel value
    total--;
    if(total>=0){
        let hr=Math.floor(total/3600)
        let min=Math.floor((total/60)-(hr*60))
        let sec=total-((hr*3600)+(min*60))
     //setting change value of hr min and sec
        hour1.value=hr;
        minute1.value=min;
        second1.value=sec;
    }else{
       document.getElementById("set_time").innerText=""
      document.getElementById("set_time").setAttribute("class","time_up")
      document.getElementById("set_time").innerHTML=`"Timer Is Up!"
      <button class="stop">Stop</button>
      `
    }
}
button.addEventListener("click",()=>{
    //clear the values in div
    document.getElementById("timer_container").innerText=""
    console.log("hello")
   const div= document.createElement("div")
   div.setAttribute("class","set_time")
   div.setAttribute("id","set_time")
   div.innerHTML=`
 
   <p> Time Left :</p>
       
       <form>
           <input type="number" id="hr1" placeholder="hh" value="${hour.value}">
           <input type="number" id="min1" placeholder="mm"  value="${minute.value}">
           <input type="number" id="sec1" placeholder="ss"  value="${second.value}">
       </form>
       <button id="btn">Delete</button>
   `
   document.getElementById("timer_container").appendChild(div)

   clearInterval(interval)
   //call the timer function every one sec
   interval=setInterval(Timer,1000)
})
