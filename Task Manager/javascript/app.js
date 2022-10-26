var iconImportant = "fas fa-star";
var iconNonImportant = "far fa-star";
var isImportant = false;
var isVisible = true;



function toggleImportant() {
    if (isImportant) {
        $("#iImportant").removeClass(iconImportant);
        $("#iImportant").addClass(iconNonImportant);
        isImportant = false;
    } else {
        $("#iImportant").removeClass(iconNonImportant);
        $("#iImportant").addClass(iconImportant);
        isImportant = true;
    }

}
function toggleForm() {
    if (isVisible) {
        $(".form").hide();
        isVisible = false;
    } else {
        $(".form").show();
        isVisible = true;
    }
}
function saveTask() {
    console.log("Saving...");
}

function init() {
    // load data

    // hook events 
    $("#iImportant").click(toggleImportant);
    $("#btnSave").click(saveTask);
    $("#btnHideForm").click(toggleForm);
}

window.onload = init;