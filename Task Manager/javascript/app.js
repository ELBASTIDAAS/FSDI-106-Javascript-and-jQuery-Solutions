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
function clearForm() {
    $("#txtTittle").val("");
    $("#txtDescription").val("");
    $("#selPriority").val("");
    $("#selDueDate").val("");
    $("#txtContact").val("");
    $("#txtParticipants").val("");
    $("#selColor").val("000000");
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

    $.ajax({
        url: "http://fsdi.azurewebsites.net/api/tasks",
        type: "POST",
        data: JSON.stringify(task),
        contenType: "application/json",
        success: function (res) {
            display(task);
            clearForm();
        },
        error: function (error) {
            console.log("Error", error);
        }
    });

    console.log(task);
    display(task);
    clearForm();
}

function display(task) {
    console.log(task);
    let syntax = `<div class="task" style ="border:${task.color}">
    <div class="head">
        <h5>${task.tittle}</h5>
        <p>${task.description}</p>
    </div>

    <div class ="middle">
        <label>${task.priority}</label>
        <label>${task.dueDate}</label>
    </div>

    <div class="tail" style="background-color: ${task.color}">
        <label>${task.contact}</label>
        <label>${task.participants}</label>
    </div>

    </div>`;

    $("#task-list").append(syntax);
}
function testGet() {
    $.ajax({
        url: "http://fsdi.azurewebsites.net/",
        type: "GET",
        success: function (response) {
            console.log("Server says", response);
        },
        error: function (error) {
            console.log("Error", error);
        }
    });
}

function fetchTasks() {
    $.ajax({
        url: "http://fsdi.azurewebsites.net/api/tasks",
        type: "GET",
        success: function (res) {
            let list = JSON.parse(res);
            for (let i = 0; i < list.length; i++) {
                let task = list[i];
                if (task.developer === "Bastidas") {
                    display(task);
                }
                display(task);
            }
        },
        error: function (details) {
            console.log(details);
        }
    });
}

function init() {
    // load data

    // hook events 
    $("#iImportant").click(toggleImportant);
    $("#btnSave").click(saveTask);
    $("#btnHideForm").click(toggleForm);
}

window.onload = init;