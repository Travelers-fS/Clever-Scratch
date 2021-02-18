function getScratchrank(){
    var request = new XMLHttpRequest();
    request.responseType = "json";
    var profileDetails = document.querySelector(".profile-details");
    var username = document.querySelector(".header-text h2").innerText;
    var apiurl = "https://scratchdb.lefty.one/v2/user/info/" + username;
    request.open("GET", apiurl, true);
    request.onload = function(){
        var rank = this.response["statistics"]["ranks"]["followers"];
        var child = document.createElement("span");
        child.innerText = "Scratchのフォロワーランキング(世界中): " + String(rank);
        child.className = "scratch-rank"
        var locationText = document.querySelector(".location");
        profileDetails.insertBefore(child, locationText);
    }
    request.send();
};

getScratchrank()