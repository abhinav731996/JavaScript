let input = document.querySelector('input');
let defaultEl = document.querySelector('#default');
let debounceEl = document.querySelector('#debounce');
let throttleEl = document.querySelector('#throttle');

let updateDebounceText = debounce((text)=>{
    debounceEl.textContent = text;
}, 300)
let updateThrottleText = throttle((text)=>{
    throttleEl.textContent = text;
}, 300)
input.addEventListener('input', e=>{
    defaultEl.textContent = e.target.value;
    updateDebounceText(e.target.value);
    updateThrottleText(e.target.value);
});

function debounce(func, delay=1000){
    let timer;
    return(...args)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func(...args);
        }, delay)
    }
}

function throttle(func, delay){
    let lastCall = 0;
    let timer;
    return(...args)=>{
        let now = Date.now();
        if((now - lastCall) > delay){
            func(...args);
            lastCall = now;

        }else{
            clearTimeout(timer);
            timer = setTimeout(()=>{
                func(...args);
            }, delay)
        }
        func(...args);
        setTimeout(()=>{

        }, delay)
    }
}