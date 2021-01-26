export { Work };
export default class Work {
    id: string;
    assignment_id: string;
    a_id: string;
    a_name: string;
    s_name: string;
    files: string;
    comments: string;
    score: number;
    turnedin: string;

    constructor(data: any) {
        this.load(data);
    }

    load(data: any) {
        this.id = data.id;
        this.assignment_id = data.assignment_id;
        this.a_id = data.a_id;
        this.a_name = data.a_name;
        this.s_name = data.s_name;
        this.files = data.files;
        this.comments = data.comments;
        this.score = data.score;
        this.turnedin = data.turnedin;
    }

}