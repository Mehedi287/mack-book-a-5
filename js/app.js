// function for get memory price 
function GetMemoryCost(memoryPrice, memory) {
    const getMoemoryCost = document.getElementById(memory);
    const memoryCost = getMoemoryCost.innerText;
    getMoemoryCost.innerText = memoryPrice;

}
//sub total function 

function Total(totalPrice) {
    const getTotal = document.getElementById(totalPrice);
    const total = getTotal.innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagPrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;
    const subTotal = parseInt(memoryPrice) + parseInt(storagPrice) + parseInt(deliveryPrice) + 1299;
    getTotal.innerText = subTotal;

    // console.log(getTotal);

}

// added click handler for 16gb memory storag 
document.getElementById('btn-16GB').addEventListener('click', function () {
    const memory = GetMemoryCost(180, 'memory-cost');
    Total('total-price')
    Total('total')
})
//added click handler for 8gb memory storag
document.getElementById('btn-8GB').addEventListener('click', function () {
    const memory = GetMemoryCost(0, 'memory-cost');
    Total('total-price')
    Total('total')
})
// added alick handler for 256GB storage
document.getElementById('btn-256GB').addEventListener('click', function () {
    const storagPrice256Gb = GetMemoryCost(0, 'storage-cost');
    Total('total-price')
    Total('total')
})
// added alick handler for 512GB storage
document.getElementById('btn-512GB').addEventListener('click', function () {
    const storagPrice256Gb = GetMemoryCost(100, 'storage-cost');
    Total('total-price')
    Total('total')
})
// added alick handler for 1tb storage\
document.getElementById('btn-1tb').addEventListener('click', function () {
    const storagPrice256Gb = GetMemoryCost(180, 'storage-cost');
    Total('total-price')
    Total('total')
})
//added alick handler for  free delivery charg\
document.getElementById('free-delivery').addEventListener('click', function () {
    const storagPrice256Gb = GetMemoryCost(0, 'delivery-cost');
    Total('total-price')
    Total('total')
})
//added alick handler for  paid delivery charg 20$\
document.getElementById('paid-delivery').addEventListener('click', function () {
    const storagPrice256Gb = GetMemoryCost(20, 'delivery-cost');
    Total('total-price')
    Total('total')
})
//apply button
// document.getElementById()
