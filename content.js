var request = new XMLHttpRequest();
request.responseType = "json";

window.onload = function(){
    var profileDetails = document.querySelector(".profile-details");
    var username = document.querySelector(".header-text h2").innerText;
    var url = "https://api.scratch.mit.edu/users/" + username + "/messages/count";
    request.open("GET", url, true);
    request.onload = function(){
        console.log(this.response);
        var messageCount = this.response["count"];
        var child = document.createElement("p");
        child.innerText = "未読メッセージ数: " + String(messageCount);
        child.style = "margin-bottom: 0px; display: inline-block;"
        var locationText = document.querySelector(".location");
        profileDetails.insertBefore(child, locationText);
    };
    request.send();
};
