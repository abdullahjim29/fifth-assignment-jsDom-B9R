// donation tab functionality

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