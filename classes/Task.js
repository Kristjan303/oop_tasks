class Task {
    constructor(name) {
        this.name = name;
    }
    addedToUI(){
        console.log(this.name + ` is added yo ui`);
    }
    addedToLs(){
        console.log(this.name + ` is added to ls`);
    }
}