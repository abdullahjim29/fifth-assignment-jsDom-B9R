// ! donation tab functionality

// noakhali
document.getElementById('noakhali-donation-btn')
.addEventListener('click', function(){
    const inputValue = getInputValueNumberById('noakhali-donation-field');
    const currentDonation = getElementText('noakhali-donation-amount');
    const updateAmount = inputValue + currentDonation;

    // validation
    if(isNaN(inputValue) || inputValue < 0){
        return alert('please provide a positive number');
    }
    const pushAmount = setElementText('noakhali-donation-amount', updateAmount);

    // modal
    document.getElementById('my_modal_1').classList.remove('hidden');
    document.getElementById('my_modal_1').onclick = my_modal_1.showModal();

    // update total donation
    const currentTotalDonationAmount = getElementText('total-balance');
    const updateTotalDonationAmount = currentTotalDonationAmount - inputValue;
    const pushUpdateTotalDonationAmount = setElementText('total-balance', updateTotalDonationAmount);
})


// feni
document.getElementById('feni-donation-btn')
.addEventListener('click', function(){
    const inputValue = getInputValueNumberById('feni-donation-field');
    const currentDonation = getElementText('feni-donation-amount');
    const updateAmount = inputValue + currentDonation;

    // validation
    if(isNaN(inputValue) || inputValue < 0){
        return alert('please provide a positive number');
    }
    const pushAmount = setElementText('feni-donation-amount', updateAmount);

    // modal
    document.getElementById('my_modal_1').classList.remove('hidden');
    document.getElementById('my_modal_1').onclick = my_modal_1.showModal();

    // update total donation
    const currentTotalDonationAmount = getElementText('total-balance');
    const updateTotalDonationAmount = currentTotalDonationAmount - inputValue;
    const pushUpdateTotalDonationAmount = setElementText('total-balance', updateTotalDonationAmount);
})


// qouta
document.getElementById('qouta-donation-btn')
.addEventListener('click', function(){
    const inputValue = getInputValueNumberById('qouta-donation-field');
    const currentDonation = getElementText('qouta-donation-amount');
    const updateAmount = inputValue + currentDonation;

    // validation
    if(isNaN(inputValue) || inputValue < 0){
        return alert('please provide a positive number');
    }
    const pushAmount = setElementText('qouta-donation-amount', updateAmount);

    // modal
    document.getElementById('my_modal_1').classList.remove('hidden');
    document.getElementById('my_modal_1').onclick = my_modal_1.showModal();


    // update total donation
    const currentTotalDonationAmount = getElementText('total-balance');
    const updateTotalDonationAmount = currentTotalDonationAmount - inputValue;
    const pushUpdateTotalDonationAmount = setElementText('total-balance', updateTotalDonationAmount);
})


// ! toggle dnation and history tab

// history tab
document.getElementById('history-tab-btn')
.addEventListener('click', function(e){

    // add classess
    e.target.className = "btn bg-primary text-xl text-white";
    const donationTab = document.getElementById('donation-tab-btn');

    // remove classes
    donationTab.classList.remove("btn");
    donationTab.classList.remove("bg-primary");
    donationTab.classList.remove("text-xl");
    donationTab.classList.remove("text-white");

    // add classes
    donationTab.className = "text-xl border-2 border-gray-100 py-2 px-5 rounded-lg";

});


// donation tab
document.getElementById('donation-tab-btn')
.addEventListener('click', function(e){

    // add classess
    e.target.className = "btn bg-primary text-xl text-white";
    const historyTab = document.getElementById('history-tab-btn');

    // remove classes
    historyTab.classList.remove("btn");
    historyTab.classList.remove("bg-primary");
    historyTab.classList.remove("text-xl");
    historyTab.classList.remove("text-white");

    // add classes
    historyTab.className = "text-xl border-2 border-gray-100 py-2 px-5 rounded-lg";

});