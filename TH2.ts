class Instrucor {
     name: string;
     role: string;

    constructor(name: string, role = "assistant") {
        this.role = role;
        this.name = name;
    }

    renderDetails() {
        console.log(`${this.name}-${this.role}`);

    }

    static helloworld() {
        console.log("hi there");
    }

    static canTeach(instructor) {
        return (instructor.role === "classroom");
    }
}

let juniorInstructor = new Instrucor('Brian');
let seniorInstructor = new Instrucor('name:Alice', 'role:"classroom');
juniorInstructor.renderDetails();
seniorInstructor.renderDetails();
console.log(`${juniorInstructor.name} can teach:${Instrucor.canTeach(juniorInstructor)}`);
console.log(`${seniorInstructor.name} can teach :${Instrucor.canTeach(seniorInstructor)}`)