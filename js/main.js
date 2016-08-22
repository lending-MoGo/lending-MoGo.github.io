var a = document.querySelector('.blogs-arrow');
var b = document.querySelector('.blogs-arrow-up');
var c = document.querySelector('.blogs-arrow-down');

a.addEventListener('mouseover', function() {
    b.classList.remove('arrow-hidden');
    c.classList.remove('arrow-hidden');
});
a.addEventListener('mouseout', function() {
    b.classList.add('arrow-hidden');
    c.classList.add('arrow-hidden');
});

var superTeam = document.querySelector('.super-team');
var supperTeamHover = document.querySelector('.supper-team-hover');

superTeam.addEventListener('mouseover', function() {
    superTeam.classList.add('blue-shadow-left');
    supperTeamHover.classList.remove('supper-hidden');
});
superTeam.addEventListener('mouseout', function() {
    superTeam.classList.remove('blue-shadow-left');
    supperTeamHover.classList.add('supper-hidden');
});

var superOffice = document.querySelector('.super-office');
var supperOfficeHover = document.querySelector('.supper-office-hover');

superOffice.addEventListener('mouseover', function() {
    superOffice.classList.add('blue-shadow-center');
    supperOfficeHover.classList.remove('supper-hidden');
});
superOffice.addEventListener('mouseout', function() {
    superOffice.classList.remove('blue-shadow-center');
    supperOfficeHover.classList.add('supper-hidden');
});

var superTechnology = document.querySelector('.super-technology');
var supperTechnologyHover = document.querySelector('.supper-technology-hover');

superTechnology.addEventListener('mouseover', function() {
    superTechnology.classList.add('blue-shadow-right');
    supperTechnologyHover.classList.remove('supper-hidden');
});
superTechnology.addEventListener('mouseout', function() {
    superTechnology.classList.remove('blue-shadow-right');
    supperTechnologyHover.classList.add('supper-hidden');
});


var exam1 = document.querySelector('.example1');
var ourWorks1 = document.querySelector('.our-works-hidden1');

exam1.addEventListener('mouseover', function() {
    ourWorks1.classList.remove('supper-hidden');
});
exam1.addEventListener('mouseout', function() {
    ourWorks1.classList.add('supper-hidden');
});

var exam2 = document.querySelector('.example2');
var ourWorks2 = document.querySelector('.our-works-hidden2');

exam2.addEventListener('mouseover', function() {
    ourWorks2.classList.remove('supper-hidden');
});
exam2.addEventListener('mouseout', function() {
    ourWorks2.classList.add('supper-hidden');
});

var exam3 = document.querySelector('.example3');
var ourWorks3 = document.querySelector('.our-works-hidden3');

exam3.addEventListener('mouseover', function() {
    ourWorks3.classList.remove('supper-hidden');
});
exam3.addEventListener('mouseout', function() {
    ourWorks3.classList.add('supper-hidden');
});

var exam4 = document.querySelector('.example4');
var ourWorks4 = document.querySelector('.our-works-hidden4');

exam4.addEventListener('mouseover', function() {
    ourWorks4.classList.remove('supper-hidden');
});
exam4.addEventListener('mouseout', function() {
    ourWorks4.classList.add('supper-hidden');
});

var exam5 = document.querySelector('.example5');
var ourWorks5 = document.querySelector('.our-works-hidden5');

exam5.addEventListener('mouseover', function() {
    ourWorks5.classList.remove('supper-hidden');
});
exam5.addEventListener('mouseout', function() {
    ourWorks5.classList.add('supper-hidden');
});

var exam6 = document.querySelector('.example6');
var ourWorks6 = document.querySelector('.our-works-hidden6');

exam6.addEventListener('mouseover', function() {
    ourWorks6.classList.remove('supper-hidden');
});
exam6.addEventListener('mouseout', function() {
    ourWorks6.classList.add('supper-hidden');
});

var exam7 = document.querySelector('.example7');
var ourWorks7 = document.querySelector('.our-works-hidden7');

exam7.addEventListener('mouseover', function() {
    ourWorks7.classList.remove('supper-hidden');
});
exam7.addEventListener('mouseout', function() {
    ourWorks7.classList.add('supper-hidden');
});




$(function() {
    $("#accordion").accordion({
        heightStyle: "fill"
    });
});

$(function() {
    $(document).tooltip({
        track: true
    });
});

$(window).load(function() {
    $(".row-top").animated("zoomInUp", "zoomInUp");
    $(".row-bottom").animated("zoomInUp", "zoomInUp");
});

$(document).ready(function() {
    $('.owl-class').slick({
        dots: true,
        arrows: true,
    });
});




var teamFoto1 = document.querySelector('.our-team-foto1');
var fotoHidden1 = document.querySelector('.our-team-foto-hidden1');

teamFoto1.addEventListener('mouseover', function() {
    teamFoto1.classList.add('blue-shadow-left');
    fotoHidden1.classList.remove('supper-hidden');
});
teamFoto1.addEventListener('mouseout', function() {
    teamFoto1.classList.remove('blue-shadow-left');
    fotoHidden1.classList.add('supper-hidden');
});

var teamFoto2 = document.querySelector('.our-team-foto2');
var fotoHidden2 = document.querySelector('.our-team-foto-hidden2');

teamFoto2.addEventListener('mouseover', function() {
    teamFoto2.classList.add('blue-shadow-center');
    fotoHidden2.classList.remove('supper-hidden');
});
teamFoto2.addEventListener('mouseout', function() {
    teamFoto2.classList.remove('blue-shadow-center');
    fotoHidden2.classList.add('supper-hidden');
});

var teamFoto3 = document.querySelector('.our-team-foto3');
var fotoHidden3 = document.querySelector('.our-team-foto-hidden3');

teamFoto3.addEventListener('mouseover', function() {
    teamFoto3.classList.add('blue-shadow-right');
    fotoHidden3.classList.remove('supper-hidden');
});
teamFoto3.addEventListener('mouseout', function() {
    teamFoto3.classList.remove('blue-shadow-right');
    fotoHidden3.classList.add('supper-hidden');
});

$(document).ready(function() {
    $('.owl-message').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,

    });
});
