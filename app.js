
function coinId(id){
    let coin = document.getElementById(id).innerText
    let newCoin = parseFloat(coin)
    return newCoin;
}
function coinInputId(id){
    let coin = document.getElementById(id).value
    let newCoin = parseFloat(coin)
    return newCoin;
}

document.getElementById('d-btn-n').addEventListener('click',function(){
     let coin = coinId('n-coin')
     let inputCoin = coinInputId('n-v-coin')
     let modalCoin = coinId('n-modal-coin')
     let mainCoin = coinId('main-nav-coin')
     let navSum = mainCoin - inputCoin
     let nSum = coin + inputCoin


     document.getElementById('n-modal-coin').innerText = inputCoin
     document.getElementById('main-nav-coin').innerText = navSum
     document.getElementById('n-coin').innerText = nSum

     let p = document.createElement('div')
     p.innerHTML = `<div class="rounded-md w-3/4 mx-auto border-solid border-2 border-gray-100 mt-3 mb-5"><p class="text-xl font-bold text-center">${inputCoin} Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>
     <br><p class="text-center">Date: ${new Date(8.64e15).toString()}</p>
     </div>
     `
     document.getElementById('history').parentElement.appendChild(p)
      
    //  console.log(typeof mainCoin,mainCoin);
     

    
})

document.getElementById('fani-btn').addEventListener('click',function(){
    let faniCoin = coinId('fani-coin')
    let modalCoin = coinId('fani-m-coin')
    let inputCoin = coinInputId('fani-input-coin')
    let mainCoin = coinId('main-nav-coin')
    let navSum = mainCoin - inputCoin
     let fSum = faniCoin + inputCoin
    

     document.getElementById('fani-m-coin').innerText = inputCoin
     document.getElementById('main-nav-coin').innerText = navSum
     document.getElementById('fani-coin').innerText = fSum

     let p = document.createElement('div')
     p.innerHTML = `<div class="rounded-md w-3/4 mx-auto border-solid border-2 border-gray-100 mt-3 mb-5"><p class="text-xl font-bold text-center">${inputCoin} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
     <br><p class="text-center">Date: ${new Date(8.64e15).toString()}</p>
     </div>
     `
     document.getElementById('history').parentElement.appendChild(p)
     

    
    

    
})

document.getElementById('quota-btn').addEventListener('click',function(){
    let modalCoin = coinId('quota-m-coin')
    let quotaCoin = coinId('quota-coin')
    let inputCoin = coinInputId('quota-input-coin')
    let mainCoin = coinId('main-nav-coin')
    let navSum = mainCoin - inputCoin
     let qSum = quotaCoin + inputCoin

     document.getElementById('quota-m-coin').innerText = inputCoin
     document.getElementById('main-nav-coin').innerText = navSum
     document.getElementById('quota-coin').innerText = qSum

     let p = document.createElement('div')
     p.innerHTML = `<div class="rounded-md w-3/4 mx-auto border-solid border-2 border-gray-100 mt-3 mb-5"><p class="text-xl font-bold text-center">${inputCoin} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
     <br><p class="text-center">Date: ${new Date(8.64e15).toString()}</p>
     </div>
     `
     document.getElementById('history').parentElement.appendChild(p)

    
})

let historyBtn = document.getElementById('history-btn');
let donationBtn = document.getElementById('donation-btn')
let mainDiv = document.getElementById('main-div')

historyBtn.addEventListener('click',function(){
   mainDiv.classList.add('hidden')
   donationBtn.classList.remove('bg-[#B4F461]')
   historyBtn.classList.add('bg-[#B4F461]')
     
    
})
donationBtn.addEventListener('click',function(){
    mainDiv.classList.remove('hidden')
    donationBtn.classList.add('bg-[#B4F461]')
   historyBtn.classList.remove('bg-[#B4F461]')
    
})