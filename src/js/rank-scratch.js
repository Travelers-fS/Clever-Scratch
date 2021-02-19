function getScratchrank(){
    var request = new XMLHttpRequest();
    request.responseType = "json";
    var footerclass = document.querySelector(".footer");
    var username = document.querySelector(".header-text h2").innerText;
    var apiurl = "https://scratchdb.lefty.one/v2/user/info/" + username;
    request.open("GET", apiurl, true);
    request.onload = function(){
        var rank = this.response["statistics"]["ranks"]["followers"];
        var child = document.createElement("div");
        child.innerText = "Scratchのフォロワーランキング(世界中): " + String(rank) + "位";
        child.className = "box-rank"
        var locationText = document.querySelector(".location");
        footerclass.insertBefore(child, locationText);
    }
    request.send();
};

getScratchrank()