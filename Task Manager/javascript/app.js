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

    let task = new Task(isImportant, tittle, description, priority, dueDate, contact, participants, color);
    console.log(task);
    display(task);
}

function display(task) {
    console.log(task);
    let syntax = `<div class="task">
    <div class="head">
        <h5>${task.tittle}</h5>
        <p>${task.description}</p>
    </div>

    <div class ="middle">
        <label>${task.priority}</label>
        <label>${task.dueDate}</label>
    </div>

    <div class="tail">
        <label>${task.contact}</label>
        <label>${task.participants}</label>
    </div>

    </div>`;

    $("#task-list").append(syntax);
}

function init() {
    // load data

    // hook events 
    $("#iImportant").click(toggleImportant);
    $("#btnSave").click(saveTask);
    $("#btnHideForm").click(toggleForm);
}

window.onload = init;