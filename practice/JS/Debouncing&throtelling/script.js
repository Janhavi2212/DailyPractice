const input=document.getElementById("input");
const defaultText=document.getElementById("default");
const  debounceText=document.getElementById("debounce");
const throttleText=document.getElementById("trottle");



/// search bar--- they are there in a way to slow down the function, 
// debouncing-instead of running a function instanteniously, it will run it after a delay of say 2 sec , if we type somethig again, it will reset the timer and then wait again before executing.
// it is great when the requests are changing very fast and you need to make sure you are sending the request after the changes are done, you knind of batch all the changes at once and send them off.

//trottle--> This is useful when things are changing a lot and you want to send the mose recent request; what is does is basically send a request then wait for a delay then send another request which is the most recesnt one,
// it is useful in scrolling, resizing a window, ypu do not want to wait till they are done to process, but you also do not want to continuously make that request so you do it after a delay basically.
// trottle runs immediately after you call a function


const updateDebounceText=debounce((text)=>{
    debounceText.textContent=text 
})

// const updateThrottleText=throttle((text)=>{
//     throttleText.textContent=text 
// })

const updateThrottleText=throttle(()=>{
    incrementCount(throttleText)
})

input.addEventListener('input',(e)=>{
    defaultText.textContent=e.target.value
    updateDebounceText(e.target.value)
   // updateThrottleText(e.target.value)
})

function debounce(cb,delay=2000){
    let timeOut
    return (...arg)=>{
        clearTimeout(timeOut)
        timeOut=setTimeout(()=>{
            cb(...arg)
        },delay)
    }
}


/// simple method
function throttle(cb,delay=1000){
    let shouldWait=false
    let waitingSrgs
    const timeoutFuc=() => {
        if(waitingSrgs===null){
            shouldWait=false
        } else {
            cd(...waitingSrgs)
            waitingSrgs=null
            setTimeout(timeoutFuc,delay)
        }
    }
return (...arg)=>{
    if(shouldWait){
        waitingSrgs=arg
        return
    } 

    cb(...arg)
    shouldWait=true;

    setTimeout(timeoutFuc, delay);
}
}

/// mouseMovement

document.addEventListener("mousemove",()=>{
    incrementCount(throttleText)
})

function incrementCount(el){
    el.textContent=(parseInt(el.innerText)||0)+1
}