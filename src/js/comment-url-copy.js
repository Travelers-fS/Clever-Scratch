function generateProfileCommentLink(){
    url = location.href.split("#")[0].split("/").slice(0,5).join("/") + "#";

    window.addEventListener("load", function(){
        var target = document.querySelector(".comments");
        console.log(target)
        var mo1 = new MutationObserver(generateLink);
        mo1.observe(target, {"childList": true});
    });

    function generateLink(){
        var comments = document.querySelectorAll(".comment");
        comments.forEach(element => {
            var actionButton = element.querySelector(".actions-wrap");
            if(actionButton.querySelector(".comment-url-copy") === null){
                var child = document.createElement("span");
                child.className = "comment-url-copy actions";
                child.innerText = "リンクをコピー";
                child.style = "color: #999; display: none;"
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
                    this.innerText = "コピーしました";
                };
                actionButton.appendChild(child);
                element.onmouseover = function(){
                    var copyButton = this.querySelector(".comment-url-copy");
                    copyButton.style.display = null;
                };
                element.onmouseleave = function(){
                    var copyButton = this.querySelector(".comment-url-copy");
                    copyButton.style.display = "none";
                    copyButton.innerText = "リンクをコピー";
                };
            };
        });
    };
};
generateProfileCommentLink();