setTimeout(function(){
    // alert(window.open(document.getElementsByTagName("video")[0].src))
    add("text")
}, 6000);



function add(type) {
        //Assign different attributes to the element. 
        var foo = document.getElementsByClassName("tw-align-items-center tw-align-middle tw-border-bottom-left-radius-large tw-border-bottom-right-radius-large tw-border-top-left-radius-large tw-border-top-right-radius-large tw-core-button tw-core-button--large tw-core-button--primary tw-inline-flex tw-interactive tw-justify-content-center tw-overflow-hidden tw-relative")[0];
        foo.addEventListener ("click", function() {
            if (confirm('Upload to Streamable?')) {
                // Save it!
                setTimeout(function(){
                    chrome.runtime.sendMessage(chrome.runtime.id,
                    // document.getElementsByTagName("video")[0].src
                        {vid_src: document.getElementsByTagName("video")[0].src},
                        function (response) {
                            window.open("https://streamable.com")
                        }
                    );
                }, 5000);
            } else {
                // Do nothing!
            }
        });
}

function mycallback(data) {
   console.log(data);
}