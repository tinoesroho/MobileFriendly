/*
* === MobileFriendly.js ===
Helper library for MobileFriendly.css
----------------------------
(C) Copyright 2015 Austin "lash" Williamson
Released under the terms of GNU Public License V2.

Feel free to use, copy, modify, and redistribute this code.
Any code modifications or derivative projects must be released under a GPL-compatible license.

Basically, that means if you change the code, others are allowed to as well.

For MobileFriendly.css version 0.2

VERSION:
MobileFriendly.js 0.1.5 "Igor" - bugfix1

CREDIT:
Some code taken from Bluelinemobile.js
*/

function testSizes(){
var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

if (width < 650) {
// mobiles    
$("td.c_post, td.c_sig, td.c_nosig,textarea#c_post-text, td#c_bbcode,#c_post").attr('colspan', '2');
}
if (width >= 651) {
// desktops and tablets
$("td.c_post, td.c_sig, td.c_nosig,textarea#c_post-text, td#c_bbcode,#c_post").attr('colspan', '1');
}
}
setInterval( testSizes, 200 );