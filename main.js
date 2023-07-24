// FIRST SONG////////////////////////////////////


const audioSrcOne = "music/readyforit.mp3"; // Replace with the actual path to your audio file
const audioOne = new Audio(audioSrcOne);


///////////////// OVER
const one_over = document.getElementsByClassName("song")[0];

function overOne(event) {
    document.getElementsByClassName("one")[0].innerHTML="<div id='music-play'><i class='fa-solid fa-play icon' style='color: #000000;'></i></div>";
}

one_over.addEventListener('mouseover', overOne);


///////////// OUT
const one_out = document.getElementsByClassName("song")[0];

function outOne(event) {
    document.getElementsByClassName("one")[0].innerHTML="";
}

one_out.addEventListener("mouseout", outOne);

///////////// CLICK
const one_play = document.getElementsByClassName("song")[0];

function clickOne(event){

    audioOne.play();
    document.getElementsByClassName("one")[0].innerHTML="<div id='music-play'><i class='fa-solid fa-pause icon' style='color: #000000;'></i></div>";

}

one_play.addEventListener("click", clickOne);

////////////////// DBLCLICK
const one_pause = document.getElementsByClassName("song")[0];

function dblclickOne(event){

    audioOne.pause();
    document.getElementsByClassName("one")[0].innerHTML="<div id='music-play'><i class='fa-solid fa-play icon' style='color: #000000;'></i></div>";

}

one_pause.addEventListener("dblclick", dblclickOne);


///////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////




// Second SONG////////////////////////////////////


const audioSrctwo = "music/eastside.mp3"; // Replace with the actual path to your audio file
const audiotwo = new Audio(audioSrctwo);


///////////////// OVER
const two_over = document.getElementsByClassName("song")[1];

function overtwo(event) {
    document.getElementsByClassName("two")[0].innerHTML="<div id='music-play'><i class='fa-solid fa-play icon' style='color: #000000;'></i></div>";
}

two_over.addEventListener('mouseover', overtwo);


///////////// OUT
const two_out = document.getElementsByClassName("song")[1];

function outtwo(event) {
    document.getElementsByClassName("two")[0].innerHTML="";
}

two_out.addEventListener("mouseout", outtwo);

///////////// CLICK
const two_play = document.getElementsByClassName("song")[1];

function clicktwo(event){

    audiotwo.play();
    document.getElementsByClassName("two")[0].innerHTML="<div id='music-play'><i class='fa-solid fa-pause icon' style='color: #000000;'></i></div>";

}

two_play.addEventListener("click", clicktwo);

////////////////// DBLCLICK
const two_pause = document.getElementsByClassName("song")[1];

function dblclicktwo(event){

    audiotwo.pause();
    document.getElementsByClassName("two")[0].innerHTML="<div id='music-play'><i class='fa-solid fa-play icon' style='color: #000000;'></i></div>";

}

two_pause.addEventListener("dblclick", dblclicktwo);












///////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////




// Third SONG////////////////////////////////////


const audioSrcthree = "music/slowgrenade.mp3"; // Replace with the actual path to your audio file
const audiothree = new Audio(audioSrcthree);


///////////////// OVER
const three_over = document.getElementsByClassName("song")[2];

function overthree(event) {
    document.getElementsByClassName("three")[0].innerHTML="<div id='music-play'><i class='fa-solid fa-play icon' style='color: #000000;'></i></div>";
}

three_over.addEventListener('mouseover', overthree);


///////////// OUT
const three_out = document.getElementsByClassName("song")[2];

function outthree(event) {
    document.getElementsByClassName("three")[0].innerHTML="";
}

three_out.addEventListener("mouseout", outthree);

///////////// CLICK
const three_play = document.getElementsByClassName("song")[2];

function clickthree(event){

    audiothree.play();
    document.getElementsByClassName("three")[0].innerHTML="<div id='music-play'><i class='fa-solid fa-pause icon' style='color: #000000;'></i></div>";

}

three_play.addEventListener("click", clickthree);

////////////////// DBLCLICK
const three_pause = document.getElementsByClassName("song")[2];

function dblclickthree(event){

    audiothree.pause();
    document.getElementsByClassName("three")[0].innerHTML="<div id='music-play'><i class='fa-solid fa-play icon' style='color: #000000;'></i></div>";

}

three_pause.addEventListener("dblclick", dblclickthree);



///////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////




// Fourth SONG////////////////////////////////////


const audioSrcfour = "music/mine.mp3"; // Replace with the actual path to your audio file
const audiofour = new Audio(audioSrcfour);


///////////////// OVER
const four_over = document.getElementsByClassName("song")[3];

function overfour(event) {
    document.getElementsByClassName("four")[0].innerHTML="<div id='music-play'><i class='fa-solid fa-play icon' style='color: #000000;'></i></div>";
}

four_over.addEventListener('mouseover', overfour);


///////////// OUT
const four_out = document.getElementsByClassName("song")[3];

function outfour(event) {
    document.getElementsByClassName("four")[0].innerHTML="";
}

four_out.addEventListener("mouseout", outfour);

///////////// CLICK
const four_play = document.getElementsByClassName("song")[3];

function clickfour(event){

    audiofour.play();
    document.getElementsByClassName("four")[0].innerHTML="<div id='music-play'><i class='fa-solid fa-pause icon' style='color: #000000;'></i></div>";

}

four_play.addEventListener("click", clickfour);

////////////////// DBLCLICK
const four_pause = document.getElementsByClassName("song")[3];

function dblclickfour(event){

    audiofour.pause();
    document.getElementsByClassName("four")[0].innerHTML="<div id='music-play'><i class='fa-solid fa-play icon' style='color: #000000;'></i></div>";

}

four_pause.addEventListener("dblclick", dblclickfour);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////




// Fifth SONG////////////////////////////////////


const audioSrcfive = "music/notsadanymore.mp3"; // Replace with the actual path to your audio file
const audiofive = new Audio(audioSrcfive);


///////////////// OVER
const five_over = document.getElementsByClassName("song")[4];

function overfive(event) {
    document.getElementsByClassName("five")[0].innerHTML="<div id='music-play'><i class='fa-solid fa-play icon' style='color: #000000;'></i></div>";
}

five_over.addEventListener('mouseover', overfive);


///////////// OUT
const five_out = document.getElementsByClassName("song")[4];

function outfive(event) {
    document.getElementsByClassName("five")[0].innerHTML="";
}

five_out.addEventListener("mouseout", outfive);

///////////// CLICK
const five_play = document.getElementsByClassName("song")[4];

function clickfive(event){

    audiofive.play();
    document.getElementsByClassName("five")[0].innerHTML="<div id='music-play'><i class='fa-solid fa-pause icon' style='color: #000000;'></i></div>";

}

five_play.addEventListener("click", clickfive);

////////////////// DBLCLICK
const five_pause = document.getElementsByClassName("song")[4];

function dblclickfive(event){

    audiofive.pause();
    document.getElementsByClassName("five")[0].innerHTML="<div id='music-play'><i class='fa-solid fa-play icon' style='color: #000000;'></i></div>";

}

five_pause.addEventListener("dblclick", dblclickfive);

/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// SIXTH SONG////////////////////////////////////


const audioSrcsix = "music/withoutme.mp3"; // Replace with the actual path to your audio file
const audiosix = new Audio(audioSrcsix);


///////////////// OVER
const six_over = document.getElementsByClassName("song")[5];

function oversix(event) {
    document.getElementsByClassName("six")[0].innerHTML="<div id='music-play'><i class='fa-solid fa-play icon' style='color: #000000;'></i></div>";
}

six_over.addEventListener('mouseover', oversix);


///////////// OUT
const six_out = document.getElementsByClassName("song")[5];

function outsix(event) {
    document.getElementsByClassName("six")[0].innerHTML="";
}

six_out.addEventListener("mouseout", outsix);

///////////// CLICK
const six_play = document.getElementsByClassName("song")[5];

function clicksix(event){

    audiosix.play();
    document.getElementsByClassName("six")[0].innerHTML="<div id='music-play'><i class='fa-solid fa-pause icon' style='color: #000000;'></i></div>";

}

six_play.addEventListener("click", clicksix);

////////////////// DBLCLICK
const six_pause = document.getElementsByClassName("song")[5];

function dblclicksix(event){

    audiosix.pause();
    document.getElementsByClassName("six")[0].innerHTML="<div id='music-play'><i class='fa-solid fa-play icon' style='color: #000000;'></i></div>";

}

six_pause.addEventListener("dblclick", dblclicksix);



/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// SEVENTH SONG////////////////////////////////////


const audioSrcseven = "music/idgaf.mp3"; // Replace with the actual path to your audio file
const audioseven = new Audio(audioSrcseven);


///////////////// OVER
const seven_over = document.getElementsByClassName("song1")[0];

function overseven(event) {
    document.getElementsByClassName("seven")[0].innerHTML="<div id='music-play'><i class='fa-solid fa-play icon' style='color: #000000;'></i></div>";
}

seven_over.addEventListener('mouseover', overseven);


///////////// OUT
const seven_out = document.getElementsByClassName("song1")[0];

function outseven(event) {
    document.getElementsByClassName("seven")[0].innerHTML="";
}

seven_out.addEventListener("mouseout", outseven);

///////////// CLICK
const seven_play = document.getElementsByClassName("song1")[0];

function clickseven(event){

    audioseven.play();
    document.getElementsByClassName("seven")[0].innerHTML="<div id='music-play'><i class='fa-solid fa-pause icon' style='color: #000000;'></i></div>";

}

seven_play.addEventListener("click", clickseven);

////////////////// DBLCLICK
const seven_pause = document.getElementsByClassName("song1")[0];

function dblclickseven(event){

    audioseven.pause();
    document.getElementsByClassName("seven")[0].innerHTML="<div id='music-play'><i class='fa-solid fa-play icon' style='color: #000000;'></i></div>";

}

seven_pause.addEventListener("dblclick", dblclickseven);