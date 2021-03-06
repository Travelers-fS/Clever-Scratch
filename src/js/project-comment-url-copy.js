url = location.href.split("#")[0].split("/").slice(0,5).join("/") + "#";

window.onload = function(){
    var target = document.querySelector(".preview");
    var mo1 = new MutationObserver(generateLink);
    mo1.observe(target, {"childList": true, "subtree": true});
};

function generateLink(){
    var comments = document.querySelectorAll(".comment");
    comments = Array.from(comments);
    if(document.getElementsByClassName("comments-root-reply").length === 1){
        comments.shift();
    };
    comments.forEach(element => {
        var actionButton = Array.from(element.getElementsByClassName("action-list"))[0];
        if(actionButton.getElementsByClassName("comment-url-copy").length === 0){
            var child = document.createElement("span");
            child.className = "comment-url-copy";
            child.innerText = "🔗リンクをコピー";
            child.onclick = function(){
                var tmp = document.createElement("div");
                var pre = document.createElement("pre");
                pre.style.userSelect = "auto";
                pre.style.webkitUserSelect = "auto";
                tmp.appendChild(pre).textContent = url + element.id;
                tmp.style.position = "fixed";
                tmp.style.right = "200%";
                document.body.appendChild(tmp);
                document.getSelection().selectAllChildren(tmp);
                document.execCommand("copy");
                document.body.removeChild(tmp);
                child.innerText = "コピーしました";
            };
            actionButton.appendChild(child);

            element.onmouseleave = function(){
                this.getElementsByClassName("comment-url-copy")[0].innerText = "🔗リンクをコピー";
            };
        };
    });
};
