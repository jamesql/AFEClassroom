export { Announcement };
export default class Announcement {
    id: string;
    a_id: string;
    a_name: string;
    s_id: string;
    text: string;
    files: string;

    constructor(data: any) {
        this.load(data);
    }

    load(data: any) {
        this.id = data.id;
        this.a_id = data.a_id;
        this.a_name = data.a_name;
        this.s_id = data.s_id;
        this.text = data.text;
        this.files = data.files;
    }

}