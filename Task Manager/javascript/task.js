class Task {
    constructor(important, tittle, description, priority, dueDate, contact, participants, color) {
        this.important = important;
        this.tittle = tittle;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.contact = contact;
        this.participants = participants;
        this.color = color;

        this.developer = "Bastidas";
    }

    test() {
        console.log("test");
    }
}