//Z czytywanie danych z poprzedniego okna
function main() {
    var selected_item = localStorage.getItem("selected_item");
    projects();
    marker_nav(selected_item);

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
    <a class="button" id="bd_theme" onclick="marker_nav('bd_theme')">
        <div>BD theme</div>
        <div class="marker"></div>
    </a>
    <a class="button" id="test_project" onclick="marker_nav('test_project')">
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
function marker_nav(selected) {
    if(selected_nav != "none") {
        document.getElementById(selected_nav).classList.remove("selected");
    }
    selected_nav = selected;

    document.getElementById(selected).classList.add("selected");
    document.getElementById("iframe").removeAttribute("src");
    document.getElementById("iframe").setAttribute("src","../Projects/"+selected+".html");
} 