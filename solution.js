let reservation = {
    startDate: null,
    endDate: null,
    guestsCount: 0,
    roomType: null,
    name: null,
    phone: null,
    email: null
}

function changeContent(className) {
    document.querySelectorAll('.custom-form').forEach(div => div.classList.add('hidden'));
    if( document.querySelector(`.${className}`) != null){
    document.querySelector(`.${className}`).classList.remove('hidden');
    }
}

// document.querySelector('#new-reservation').addEventListener('click', (e) => cleanData(e));

function cleanData(e) {
    changeContent('search-form-content');
}

document.querySelector('#search-form-button').addEventListener('click',searchForm)

function searchForm(e){
    e.preventDefault()
    console.log(e.target.parentElement)
    const form = e.target.parentElement
    //#check-in
    //#check-out
    //#people
    const checkIn = form.querySelector('#check-in').value
    const checkOut = form.querySelector('#check-out').value
    const people = form.querySelector('#people').value
    if (checkIn != '' && checkOut != '' && people != '' &&
            new Date(checkIn) <= new Date(checkOut)
    ) {
        reservation.startDate = checkIn
        reservation.endDate = checkOut
        reservation.guestsCount = people
        console.log(reservation)
        changeContent('search-result-form-content')
    }

} 

changeContent('search-form-content');

