export { Assignment };
export default class Assignment {
    id: string;
    a_id: string;
    a_name: string;
    c_id: string;
    text: string;
    files: string;
    max_score: number;
    due_date: string;

    constructor(data: any) {
        this.load(data);
    }

    load(data: any) {
        this.id = data.id;
        this.a_id = data.a_id;
        this.a_name = data.a_name;
        this.c_id = data.c_id;
        this.text = data.text;
        this.files = data.files;
        this.max_score = data.max_score;
        this.due_date = data.due_date;
    }

}