export class Questions {
    _id?: number;
    question: string;
    options: string[];
    correctAnswer: string;

    constructor(question: string, options: string[], correctAnswer: string){
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }
}

