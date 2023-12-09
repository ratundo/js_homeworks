let user = [];
let userName = prompt('What is your name?');
let userSurname = prompt('What is your surname');
let birthDay = parseInt(prompt('Day of birth'), 10);
let birthMonth = parseInt(prompt('Month of birth'), 10);
let birthYear = parseInt(prompt('Year of birth'), 10);

let userFullName = userName + ' ' + userSurname;

let userAge = 2022 - birthYear;

let isItLeapYear;
if (birthYear % 400 === 0 ||
    birthYear % 100 !== 0 &&
    birthYear % 4 === 0) {   
isItLeapYear = '(Leap year)' 
} else {isItLeapYear = '(Not leap year)'};

let userHoroscope;

if ((birthMonth === 1 && (birthDay >= 20 && birthDay <= 31)) || 
    (birthMonth === 2 && (birthDay >= 1 && birthDay <= 18))) {
    userHoroscope = 'Aquarius';
} else if ((birthMonth === 2 && (birthDay >= 19 && birthDay <= 28)) || 
           (birthMonth === 3 && (birthDay >= 1 && birthDay <= 20))) {
    userHoroscope = 'Pisces';
} else if ((birthMonth === 3 && (birthDay >= 21 && birthDay <= 31)) || 
           (birthMonth === 4 && (birthDay >= 1 && birthDay <= 19))) {
    userHoroscope = 'Aries';
} else if ((birthMonth === 4 && (birthDay >= 20 && birthDay <= 30)) || 
           (birthMonth === 5 && (birthDay >= 1 && birthDay <= 20))) {
    userHoroscope = 'Taurus';
} else if ((birthMonth === 5 && (birthDay >= 21 && birthDay <= 31)) || 
           (birthMonth === 6 && (birthDay >= 1 && birthDay <= 20))) {
    userHoroscope = 'Gemini';
} else if ((birthMonth === 6 && (birthDay >= 21 && birthDay <= 30)) || 
           (birthMonth === 7 && (birthDay >= 1 && birthDay <= 22))) {
    userHoroscope = 'Cancer';
} else if ((birthMonth === 7 && (birthDay >= 23 && birthDay <= 31)) || 
           (birthMonth === 8 && (birthDay >= 1 && birthDay <= 23))) {
    userHoroscope = 'Leo';
} else if ((birthMonth === 8 && (birthDay >= 24 && birthDay <= 31)) || 
           (birthMonth === 9 && (birthDay >= 1 && birthDay <= 22))) {
    userHoroscope = 'Virgo';
} else if ((birthMonth === 9 && (birthDay >= 23 && birthDay <= 30)) || 
           (birthMonth === 10 && (birthDay >= 1 && birthDay <= 22))) {
    userHoroscope = 'Libra';
} else if ((birthMonth === 10 && (birthDay >= 23 && birthDay <= 31)) || 
           (birthMonth === 11 && (birthDay >= 1 && birthDay <= 21))) {
    userHoroscope = 'Scorpio';
} else if ((birthMonth === 11 && (birthDay >= 22 && birthDay <= 30)) || 
           (birthMonth === 12 && (birthDay >= 1 && birthDay <= 21))) {
    userHoroscope = 'Sagittarius';
} else if ((birthMonth === 12 && (birthDay >= 22 && birthDay <= 31)) || 
           (birthMonth === 1 && (birthDay >= 1 && birthDay <= 19))) {
    userHoroscope = 'Capricorn';
} else alert ('invalid data!')


alert ('User Bio: ${userFullName}, ${userAge} роки, ${userHoroscope};');

