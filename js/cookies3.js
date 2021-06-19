function firstCookie() {
    let input1 = document.getElementById('one');
    input1.value = localStorage.getItem('one');
    input1.addEventListener('input', function () {
        localStorage.setItem('one', input1.value);    
    });

    document.cookie = encodeURIComponent(input1.value);
    let cookies1 = document.cookie.split(';');
    console.log(cookies1);
};


function secondCookie() {
    let input2 = document.getElementById('two');
    input2.value = localStorage.getItem('two');
    input2.addEventListener('input', function () {
        localStorage.setItem('two', input2.value);
    });

    document.cookie = encodeURIComponent(input2.value);
    let cookies2 = document.cookie.split(';');
    console.log(cookies2);
};


function thirdCookie() {
    let input3 = document.getElementById('three');
    input3.value = localStorage.getItem('three');
    input3.addEventListener('input', function () {
        localStorage.setItem('three', input3.value);
    });

    document.cookie = encodeURIComponent(input3.value);
    let cookies3 = document.cookie.split(';');
    console.log(cookies3);
};


function fourthCookie() {
    let input4 = document.getElementById('four');
    input4.value = localStorage.getItem('four');
    input4.addEventListener('input', function () {
        localStorage.setItem('four', input4.value);
    });

    document.cookie = encodeURIComponent(input4.value);
    let cookies4 = document.cookie.split(';');
    console.log(cookies4);
};


function fifthCookie() {
    let input5 = document.getElementById('five');
    input5.value = localStorage.getItem('five');
    input5.addEventListener('input', function () {
        localStorage.setItem('five', input5.value);
    });

    document.cookie = encodeURIComponent(input5.value);
    let cookies5 = document.cookie.split(';');
    console.log(cookies5);
};


firstCookie();
secondCookie();
thirdCookie();
fourthCookie();
fifthCookie();