// ==UserScript==
// @name         Roblox Insinulator
// @namespace    twitter.com/Spooksletsky
// @version      1.0
// @description  Replaces the default game icons with a neutral one
// @author       SpooksHD
// @match        https://www.roblox.com/*
// @grant        none
// ==/UserScript==

// Roblox Insinulator
// By SpooksHD
// twitter.com/Spooksletsky
//Customize your game pages with a your beautiful icon, and remove ads if you want.

//Instructions to install...
//Install Tampermonkey on chrome, or for firefox install greesemonkey,
//Next after doing so, pree the thing that looks like a curved square with two eyes, and press "Create a new script".
//Paste this script in, and you're done.
function repIcon(img, yi) {
    var defaultIcons = [ //Simple way to do some things.
        'https://t2.rbxcdn.com/ad8adc4f2ed4bcaa6b0c9f86240d74d1',
        'https://t1.rbxcdn.com/6f037218b91b98809cabdfa986f113c3',
        'https://t5.rbxcdn.com/042d9f78bbce3f405f9b37792bfccc33',
        'https://t3.rbxcdn.com/a8476a2e3554c76948b73b64e789a233',
        'https://t2.rbxcdn.com/2a13bb642922bb17bfa85c68b55f907d',
        'https://t1.rbxcdn.com/56200c875094751915dab718de55118e',
        'https://t6.rbxcdn.com/3286ff92db6c2fa95bd974280d050697',
        'https://t6.rbxcdn.com/bc245a06037aace48cafe0dc1e1a92c0',
        'https://t4.rbxcdn.com/66e3e636acb3adc7a229cc5dc180cc93',
        'https://t7.rbxcdn.com/4d6c6ab7f95973b35bb2944be91c00ba',
        'https://t4.rbxcdn.com/2efcc5665d7b185b31d4cf7dda7e3a9e',
        'https://t0.rbxcdn.com/ba954640ee3ea6c141398d4926e57ed1'
    ];
    for (var ii = 0; ii < defaultIcons.length; ii++) {
        if (img.src === defaultIcons[ii]) {
            img.src = yi;
        }
    }
}

(function() {
    'use strict';

    //Settings
    var yourImage = "https://t4.rbxcdn.com/1059e175c0f1473a61437137ddba94de"; // Replace that image link with your own, unless you want that image :/
    //YOUR IMAGE SHOULD AT LEAST BE 150x150, THIS IS INSINUATED FOR BETTER QUALITY.
    var yourAdImage = ""; //If you would like to not have an image for an ad, leave this blank, otherwise have fun customizing the ads.

    var adsDisabled = true; //Would you really want this off.
    var rICGC = true; //Replace Icon Game Cards?
    var rIGCIS = true; //Replace Isolated Game Card Scopes?
    var rGGS = true; //Replace Group Game Cards?
    var rGI = true; //Replace Game Image?
    var rMT = true; //Replace Model Thumbnail

    var replaceinterval = setInterval(Replace, 1000);
    var destroyme = setInterval(abortTimer, 20000);

    function Replace() {

        if (rICGC === true) {
            var IconsGameCards = document.getElementsByClassName("game-card-thumb");
            if (IconsGameCards.length > 0) {
                for (var i = 0; i < IconsGameCards.length; i++) {
                    repIcon(IconsGameCards[i], yourImage);
                }
            }
        }

        if (rIGCIS === true) {
            var IconsGameCardsIsolatedScope = document.getElementsByClassName("item-card-thumb ng-isolate-scope");
            if (IconsGameCardsIsolatedScope.length > 0) {
                for (var j = 0; j < IconsGameCardsIsolatedScope.length; j++) {
                    repIcon(IconsGameCardsIsolatedScope[j], yourImage);
                }
            }
        }
        if (rGGS === true) {
            var gp = document.getElementsByClassName("GroupPlace");
            if (gp.length > 0) {
                for (var bb = 0; bb < gp.length; bb++) {
                    var div = gp[bb].getElementsByTagName('div')[0];
                    var ad = div.getElementsByTagName('a')[0];
                    var img = ad.getElementsByTagName('img')[0];
                    repIcon(gp[bb], yourImage);
                }
            }
        }

        if (rGI === true) {
            var ic = document.getElementsByClassName("game-image");
            if (ic.length > 0) {
                for (var bbb = 0; bbb < ic.length; bbb++) {
                    var img2 = ic[bbb].getElementsByTagName('img')[0];
                    img2.src = yourImage;
                }
            }
        }

        if (rMT === true) {
            var ict = document.getElementsByClassName("thumbnail-span");
            if (ict.length > 0) {
                for (var bbbt = 0; bbbt < ict.length; bbbt++) {
                    var img90 = ict[bbbt].getElementsByTagName('img')[0];
                    img90.src = yourImage;
                }
            }
        }

        //Let's get rid of those pesky ads, only if adsDisabled is true
        if (adsDisabled === true) {
            var aids = document.getElementsByClassName("ad");
            if (aids.length > 0) {
                for (var bbbv = 0; bbbv < aids.length; bbbv++) {
                    var img3 = aids[bbbv].getElementsByTagName('img')[0];
                    img3.src = yourAdImage;
                }
            }
            var aidsreport = document.getElementsByClassName("BadAdButton");
            if (aidsreport.length > 0) {
                for (var bbbvv = 0; bbbvv < aidsreport.length; bbbvv++) {
                    aidsreport[bbbvv].innerHTML = "";
                }
            }
            var aidstext = document.getElementsByClassName("ad-identification-text");
            if (aidstext.length > 0) {
                for (var bbbvvv = 0; bbbvvv < aidstext.length; bbbvvv++) {
                    aidstext[bbbvvv].innerHTML = "";
                }
            }
        }
    }

    function abortTimer() {
        clearInterval(replaceinterval);
        clearInterval(destroyme);
    }

})();
