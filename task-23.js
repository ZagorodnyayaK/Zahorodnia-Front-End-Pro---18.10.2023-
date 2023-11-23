class Student {
    assessment = [];// assessment = [91, 97, 93, 93, 90, 93, 100, 94, 91, 100, 98, 97, 96, 96, 100, 92, 94, 94, 98, 96, 90, 97, 97];
    static lessonCount = 25;
    static minVisitAverege = 0.9;
    static minAssesment = 90;
    visits = [];

    constructor(name, surname, yearOfBirth) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
    }

    studentAge() {
        let today = new Date().getFullYear()
        return today - this.yearOfBirth;
    }

    averageScore() {
        return Math.floor(this.assessment.reduce((a, b) => a + b) / this.assessment.length);
    }

    present() {
        if (this.visits.length < Student.lessonCount) {
            this.visits.push(1);
            // let score = Math.floor(Math.random() * (100 - 90 + 1)) + 90;
            // this.assessment.push(score);
        }
    }

    absent() {
        if (this.visits.length < Student.lessonCount) {
            this.visits.push(0);
        }
    }

    summary() {
        const presentCount = this.visits.filter((item) => item === 1);
        const visitsAverage = presentCount.length / Student.lessonCount;
        // console.log(visitsAverage);
        if (visitsAverage > Student.minVisitAverege && this.averageScore() > Student.minAssesment) {
            return `Excellent!`;
        }
        if (visitsAverage > Student.minVisitAverege || this.averageScore() > Student.minAssesment) {
            return 'Good, but you can do better';
        }
        return 'You are Rediska:)'
    }
}

const student1 = new Student(`Kseniia`, `Zahorodnia`, `1993`);
const student2 = new Student(`Valeriy`, `Koval`, `1994`);
const student3 = new Student(`Viktoriia`, `Melnik`, `1992`);


student1.assessment = [90, 91, 70, 98, 94, 91, 100, 98, 97, 96, 96, 100, 92, 94, 94, 98, 96, 90, 97, 97];
student2.assessment = [90, 50, 88, 94, 91, 100, 98, 97, 96, 30, 100, 92, 71, 94, 98, 96, 70, 97, 97];
student3.assessment = [100, 91, 100, 90, 95, 100, 94, 91, 100, 98, 100, 100, 96, 100, 92, 94, 94, 98, 96, 90, 97, 97];

let absentCount = 0;
for (let i = 0; i < Student.lessonCount; i++) {
    absentCount <= 2 ? student1.absent() : student1.present();
    absentCount++;
}

absentCount = 0;
for (let i = 0; i < Student.lessonCount; i++) {
    absentCount <= 6 ? student2.absent() : student2.present();
    absentCount++;
}

absentCount = 0;
for (let i = 0; i < Student.lessonCount; i++) {
    absentCount <= 1 ? student3.absent() : student3.present();
    absentCount++;
}

console.log(student1.summary());
console.log(student2.summary());
console.log(student3.summary());

