alert('Hello, there!!')

var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var male = ['Kwasi', 'Kwadwo', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var female = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

var day = d.getDay() {

}

function getAkan() {
    var ismale = document.getElementById('male').checked;
    var isfemale = document.getElementById('female').checked;
    if (ismale == true && isfemale == false) {
        if (day == 0) {
            return male[0];
            alert('your name is ' + male[0]);
        } else if (day == 1) {
            alert('your name is ' + male[1]);
        } else if (day == 2) {
            alert('your name is ' + male[2]);
        } else if (day == 3) {
            alert('your name is ' + male[3]);
        } else if (day == 4) {
            alert('your name is ' + male[4]);
        } else if (day == 5) {
            alert('your name is ' + male[5]);
        } else if (day == 6) {
            alert('your name is ' + male[6]);
        }

    }
    if (isfemale == true && ismale == false) {
        if (day == 0) {
            return female[0];
            alert('your name is ' + female[0]);
        } else if (day == 1) {
            alert('your name is ' + female[1]);
        } else if (day == 2) {
            alert('your name is ' + female[2]);
        } else if (day == 3) {
            alert('your name is ' + female[3]);
        } else if (day == 4) {
            alert('your name is ' + female[4]);
        } else if (day == 5) {
            alert('your name is ' + female[5]);
        } else if (day == 6) {
            alert('your name is ' + female[6]);
        }

    }



}