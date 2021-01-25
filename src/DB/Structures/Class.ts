import { ExecFileOptionsWithStringEncoding } from "child_process";

export { Class };
export default class Class {
    id: string;
    teacher: string;
    description: string;
    name: string;
    t_name: string;
    categorys: string;

    constructor(data: any) {
        this.load(data);
    }

    load(data: any) {
        this.id = data.id;
        this.teacher = data.id;
        this.description = data.description;
        this.name = data.name;
        this.t_name = data.t_name;
        this.categorys = data.categorys;
    }

}