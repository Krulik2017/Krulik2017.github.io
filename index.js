function marker_nav(selected) {
    sessionStorage.setItem("selected_item", selected);
}



//Hello
function main() {
    var x = document.getElementById("hello");
    setTimeout(function() { x.innerHTML += "H" }, 400);
    setTimeout(function() { x.innerHTML += "e" }, 500);
    setTimeout(function() { x.innerHTML += "l" }, 600);
    setTimeout(function() { x.innerHTML += "l" }, 700);
    setTimeout(function() { x.innerHTML += 'o' }, 800);

    setTimeout(function() {
        setInterval(dot, 500);
        
        function dot() {
            var x_dot = document.getElementById("hello_dot");
            if (x_dot.innerHTML.indexOf("|") > -1) {
                x_dot.innerHTML = "";
            } else {
                x_dot.innerHTML = "|";
            }
        }
    }, 1000)
}