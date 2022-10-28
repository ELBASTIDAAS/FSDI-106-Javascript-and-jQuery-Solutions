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
    let tittle = $("#txtTittle").val();
    let description = $("#txtDescription").val();
    let priority = $("#selPriority").val();
    let dueDate = $("#selDueDate").val();
    let contact = $("#txtContact").val();
    let participants = $("#txtParticipants").val();
    let color = $("#selColor").val();
}

function init() {
    // load data

    // hook events 
    $("#iImportant").click(toggleImportant);
    $("#btnSave").click(saveTask);
    $("#btnHideForm").click(toggleForm);
}

window.onload = init;