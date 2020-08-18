class Todo {
    constructor(title,date,hour,description) {
        this.title = title;
        this.isDone = false;
        this.color = '#' + Math.floor(Math.random()*16777215).toString(16);
        this.date=date;
        this.hour=hour;
        this.description=description;
    }
    switchDone() {
        this.isDone = !this.isDone;
    }
}

export default Todo