console.log("Content script is running");
var target = document.body;

var config = {
    childList: true,
};

const observer = new ResizeObserver(function() {
    blurVideo();
});
for (var i = 0; i < target.children.length; i++) {
    observer.observe(target.children[i],config);
};


// Task of this files is to blur videos, while loading and when page changes.
document.addEventListener("DOMContentLoaded", blurVideo());
