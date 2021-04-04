class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}


class Bootcamp {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        this.students = [];
    }

    registerStudent(student) {
        const studentExists = this.students.filter((s) => s.email === student.email)

        if (studentExists.length === 0){
            this.students.push(student)
            console.log(`Registering ${student.email} to the bootcamp Web Dev Fundamentals.`)
        } else {
            console.log("Student already registered.")
        }

        return this.students
    }
}