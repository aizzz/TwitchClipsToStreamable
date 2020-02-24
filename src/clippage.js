setTimeout(function(){
    // alert(window.open(document.getElementsByTagName("video")[0].src))
    add("text")
}, 2000);

function add(type) {
        //Create an input type dynamically.   
        var dlButton = document.createElement("button");
        dlButton.innerHTML = "Download Clip";
        dlButton.style.marginLeft = "8px";
        dlButton.style.marginRight = "8px";
        dlButton.style.backgroundColor = "#9147ff";
        dlButton.style.color = "#fff";
        dlButton.style.padding = "5px";
        dlButton.style.fontWeight = "600";
        dlButton.style.borderRadius = "4px";
        
        //Assign different attributes to the element. 
        dlButton.addEventListener ("click", function() {
            window.open(document.getElementsByTagName("video")[0].src)
        });
        
        var foo = document.getElementsByClassName("tw-align-items-center tw-flex tw-justify-content-end tw-pd-1")[0];
        foo.insertBefore(dlButton, foo.firstChild);

        var ulButton = document.createElement("button");
        ulButton.innerHTML = "Upload Clip";
        ulButton.style.marginLeft = "8px";
        ulButton.style.backgroundColor = "#9147ff";
        ulButton.style.color = "#fff";
        ulButton.style.padding = "5px";
        ulButton.style.fontWeight = "600";
        ulButton.style.borderRadius = "4px";
        
        //Assign different attributes to the element. 
        ulButton.addEventListener ("click", function() {
            chrome.runtime.sendMessage(chrome.runtime.id,
                {vid_src: document.getElementsByTagName("video")[0].src},
                function (response) {
                    window.open("https://streamable.com")
                }
            );
        });
        
        var foo = document.getElementsByClassName("tw-align-items-center tw-flex tw-justify-content-end tw-pd-1")[0];
        foo.insertBefore(ulButton, foo.firstChild);

        

}