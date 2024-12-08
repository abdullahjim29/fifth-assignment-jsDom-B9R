// ! donation tab functionality

// palestine donation
document.getElementById('palestine-donation-btn')
    .addEventListener('click', function () {
        const inputValue = getInputValueNumberById('palestine-donation-field');
        const currentDonation = getElementText('palestine-donation-amount');
        const updateAmount = inputValue + currentDonation;
        const emptyInput = ElementGet('palestine-donation-field').value = "";

        // validation
        if (isNaN(inputValue) || inputValue < 0) {
            return alert('Invalid Donation Amount');
        }

        const setAmount = setElementText('palestine-donation-amount', updateAmount);

        // modal
        const remove = removeClass('my_modal_1', 'hidden');
        document.getElementById('my_modal_1').onclick = my_modal_1.showModal();

        // update available donation
        const currentTotalDonationAmount = getElementText('available balance');
        const updateTotalDonationAmount = currentTotalDonationAmount - inputValue;
        const setUpdateTotalDonationAmount = setElementText('available balance', updateTotalDonationAmount);

        // add donation to history
        const getDonationTitle = ElementGet('palestine-donation-title').innerText;
        const getHistoryContainer = ElementGet('history-container');
        const createDiv = document.createElement('div');
        createDiv.className = "border-2 border-gray-100 p-6 rounded-lg";
        createDiv.innerHTML = `
        <h2 class="text-base md:text-xl font-semibold mb-3">${inputValue} Taka ${getDonationTitle}</h2>
        <p class="text-sm md:text-base bg-slate-100 p-3 rounded-md">${new Date().toString()}</p>
    `;
        getHistoryContainer.insertBefore(createDiv, getHistoryContainer.firstChild);

        // no found remove
        const noFound = addClass('no-found', 'hidden');
    })


// feni donation
document.getElementById('feni-donation-btn')
    .addEventListener('click', function () {
        const inputValue = getInputValueNumberById('feni-donation-field');
        const currentDonation = getElementText('feni-donation-amount');
        const updateAmount = inputValue + currentDonation;
        const emptyInput = ElementGet('feni-donation-field').value = "";

        // validation
        if (isNaN(inputValue) || inputValue < 0) {
            return alert('Invalid Donation Amount');
        }
        const setAmount = setElementText('feni-donation-amount', updateAmount);

        // modal
        const remove = removeClass('my_modal_1', 'hidden');
        document.getElementById('my_modal_1').onclick = my_modal_1.showModal();

        // update available donation
        const currentTotalDonationAmount = getElementText('available balance');
        const updateTotalDonationAmount = currentTotalDonationAmount - inputValue;
        const setUpdateTotalDonationAmount = setElementText('available balance', updateTotalDonationAmount);

        // add donation to history
        const getDonationTitle = ElementGet('feni-donation-title').innerText;
        const getHistoryContainer = ElementGet('history-container');
        const createDiv = document.createElement('div');
        createDiv.className = "border-2 border-gray-100 p-6 rounded-lg";
        createDiv.innerHTML = `
        <h2 class="text-base md:text-xl font-semibold mb-3">${inputValue} Taka ${getDonationTitle}</h2>
        <p class="text-sm md:text-base bg-slate-100 p-3 rounded-md">${new Date().toString()}</p>
    `;
        getHistoryContainer.insertBefore(createDiv, getHistoryContainer.firstChild);

        // no found remove
        const noFound = addClass('no-found', 'hidden');
    })


// qouta donation
document.getElementById('qouta-donation-btn')
    .addEventListener('click', function () {
        const inputValue = getInputValueNumberById('qouta-donation-field');
        const currentDonation = getElementText('qouta-donation-amount');
        const updateAmount = inputValue + currentDonation;
        const emptyInput = ElementGet('qouta-donation-field').value = "";

        // validation
        if (isNaN(inputValue) || inputValue < 0) {
            return alert('Invalid Donation Amount');
        }
        const setAmount = setElementText('qouta-donation-amount', updateAmount);

        // modal
        const remove = removeClass('my_modal_1', 'hidden');
        document.getElementById('my_modal_1').onclick = my_modal_1.showModal();


        // update available donation
        const currentTotalDonationAmount = getElementText('available balance');
        const updateTotalDonationAmount = currentTotalDonationAmount - inputValue;
        const setUpdateTotalDonationAmount = setElementText('available balance', updateTotalDonationAmount);

        // add donation to history
        const getDonationTitle = ElementGet('qouta-donation-title').innerText;
        const getHistoryContainer = ElementGet('history-container');
        const createDiv = document.createElement('div');
        createDiv.className = "border-2 border-gray-100 p-6 rounded-lg";
        createDiv.innerHTML = `
        <h2 class="text-base md:text-xl font-semibold mb-3">${inputValue} Taka ${getDonationTitle}</h2>
        <p class="text-sm md:text-base bg-slate-100 p-3 rounded-md">${new Date().toString()}</p>
    `;
        getHistoryContainer.insertBefore(createDiv, getHistoryContainer.firstChild);

        // no found remove
        const noFound = addClass('no-found', 'hidden');
    })


// ! toggle dnation and history tabs with functionality

// history tab
const historyTab = document.getElementById('history-tab-btn');
historyTab.addEventListener('click', function () {

    // add classess
    historyTab.className = "btn bg-primary text-xl text-white";
    const donationTab = document.getElementById('donation-tab-btn');

    // remove classes
    const remove = removeClass('donation-tab-btn', 'btn', 'bg-primary', 'text-xl', 'text-white')

    // add classes
    donationTab.className = "text-xl border-2 border-gray-100 py-2 px-5 rounded-lg";

    // remove donation cards section
    const addClas = addClass('donation-cards', "hidden");

    // show history section
    const removeClas = removeClass('history-container', "hidden");
});


// donation tab
document.getElementById('donation-tab-btn')
    .addEventListener('click', function (e) {

        // add classess
        e.target.className = "btn bg-primary text-xl text-white";
        const historyTab = document.getElementById('history-tab-btn');

        // remove classes
        const remove = removeClass('history-tab-btn', 'btn', 'bg-primary', 'text-xl', 'text-white')

        // add classes
        historyTab.className = "text-xl border-2 border-gray-100 py-2 px-5 rounded-lg";

        // remove history section
        const addClas = addClass("history-container", "hidden");

        // show donation cards section
        const removeClas = removeClass("donation-cards", "hidden");

    });
