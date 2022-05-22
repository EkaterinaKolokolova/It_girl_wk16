let arr = []
const brand = document.querySelector('.brand')
const btn = document.querySelector('button')
const complete = document.querySelector('.complete')
const volume = document.querySelector('.volume').value
const year = document.querySelector('.year')
const selects = document.querySelectorAll('select')
console.log(selects);
selects.forEach((item, index) => {
    item.addEventListener('change', () => {
        switch (item.value) {
            case "BMW":
                arr[0] = 2000
                break;
                case "AUDI":
                arr[0] = 1000
                break;
                case "MERS":
                    arr[0] = 3000
                    break;

            case "Business":
                arr [1] = 14000
                break;
                case "Comfort":
                arr [1] = 4000
                break;
        }
        console.log(arr)
    })
})

btn.addEventListener('click', (e) => {
    e.preventDefault()
    const checks = document.querySelectorAll ('.check')
    checks.forEach((item,index)=>{
        if(item.checked){
        arr.push(item.value)
    }
    })
    if (volume > 2) {
        arr.push(1000)
    } else if (volume < 2) {
        arr.push(500)
    }
    console.log(arr); 
    
})
arr.length = 0;