function main() {
    var selected_item = localStorage.getItem("selected_item");
    if(selected_item == "bd_theme") {
        projects();
        bd_theme();
    }
    if(selected_item == "test_project") {
        projects();
        test_project();
    }

}










// Header
var selected_header = "none";
function projects() {
    if(selected_header != "none") {
        document.getElementById(selected_header).classList.remove("selected");
    }
    selected_header = "projects";
    
     document.getElementById("projects").classList.add("selected");
    document.getElementById("nav_list").innerHTML = `
    <a class="button" id="bd_theme" onclick="bd_theme()">
        <div>BD theme</div>
        <div class="marker"></div>
    </a>
    <a class="button" id="test_project" onclick="test_project()">
        <div>test project, long boi</div>
        <div class="marker"></div>
    </a>
    <a class="button">
        <div>dummy project</div>
        <div class="marker"></div>
    </a>
    `;
}

function other() {
    if(selected_header != "none") {
        document.getElementById(selected_header).classList.remove("selected");
    }
    selected_header = "other";
    
     document.getElementById("other").classList.add("selected");
    document.getElementById("nav_list").innerHTML = `
    <a class="button">
        <div>dummy other</div>
        <div class="marker"></div>
    </a>
    `;
}





// Nav
var selected_nav = "none";
function bd_theme() {
    if(selected_nav != "none") {
        document.getElementById(selected_nav).classList.remove("selected");
    }
    selected_nav = "bd_theme";

    document.getElementById("bd_theme").classList.add("selected");
    document.getElementById("iframe").removeAttribute("src");
    document.getElementById("iframe").setAttribute("src","../Projects/Ktuliqowy_bd_theme.html");
}

function test_project() {
    if(selected_nav != "none") {
        document.getElementById(selected_nav).classList.remove("selected");
    }
    selected_nav = "test_project";

    document.getElementById("test_project").classList.add("selected");
    document.getElementById("iframe").removeAttribute("src");
    document.getElementById("iframe").setAttribute("src","../Projects/test.html");
}