var request = new XMLHttpRequest();
request.responseType = "json";

window.onload = function(){
    var profileDetails = document.querySelector(".profile-details");
    var username = document.querySelector(".header-text h2").innerText;
    var url = "https://api.scratch.mit.edu/users/" + username + "/messages/count";
    request.open("GET", url, true);
    request.onload = function(){
        var messageCount = this.response["count"];
        var child = document.createElement("span");
        child.innerText = "未読メッセージ数: " + String(messageCount);
        child.style = "margin-bottom: 0px; padding-left: 5px; margin-left: 5px; border-left: 1px solid #ccc;"
        var locationText = document.querySelector(".location");
        profileDetails.insertBefore(child, locationText);
    };
    request.send();
};
