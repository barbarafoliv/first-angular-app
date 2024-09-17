// PRIMITIVES
let age: number;
age = 12;

let userName: string;
userName = 'Babi';

let isInstructor: boolean;
isInstructor = false;



// MORE COMPLEX TYPES
let hobbies: string[];
hobbies = ['Cooking', 'Sports'];

// Makes code more concise and easier to maintain
type Person = {
    name: string;
    age: number;
};

// let person: any; should not be used, it defeats the hole purpose of Typescript
let person: Person;
person = {
    name: 'Bárbara',
    age: 33
}

let people: Person[];



// TYPE INFERENCE
// By default, Typescript tries to infer the type you are using without you explicitly declaring it
let course: string | number = 'Angular - The Complete Guide'
course = 12345;



// FUNCTIONS & TYPES

function add(a: number, b: number) {
    return a + b;
}

function print(value: any) {
    console.log(value);
}



// GENERICS allow to write functions which are type-safe and avoid using 'any'

function insertAtBeginning<T>(array: T[], value: T) {
    return [value, ...array];
}

const demoArray = [1, 2, 3]; // 'any' type removes all kind of support from TS - TS does not know it is array of numbers
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b'], 'd');

// updatedArray[0].split(''); this will raise an error because we can't split numbers but TS does not know that because type 'any'
stringArray[0].split(''); // on the other hand we won't get an error now since we use generic type to infer string type



// CLASSES

class Student {
    firstName: string;
    lastName: string;
    age: number;
    private courses: string[];

    constructor(first: string, last: string, age: number, courses: string[]) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses
    }

    /*
    another way to do it would be:
    constructor(
        public firstName: string,
        public lastName: string,
        private age: number,
        private courses: string[]
    ) {}*/

    enrol(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student('Bárbara', 'Oliveira', 33, ['Angular']);
student.enrol('React');
student.listCourses();

// student.courses => Angular, React



// INTERFACES can be implemented by classes

interface Human {
    firstName: string | undefined;
    age: number | undefined;

    greet: () => void;
}

let babi: Human;

babi = {
    firstName: 'Bárbara',
    age: 33,
    greet() {
        console.log('Hello!');
    },
};

class Instructor implements Human {
    firstName: string | undefined;
    age: number | undefined;

    greet(): void {
        console.log('Hola!');
    }
}



