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

    // update total donation
    const currentTotalDonationAmount = getElementText('total-balance');
    const updateTotalDonationAmount = currentTotalDonationAmount - inputValue;
    const pushUpdateTotalDonationAmount = setElementText('total-balance', updateTotalDonationAmount);
})
