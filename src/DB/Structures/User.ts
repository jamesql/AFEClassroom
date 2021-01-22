
export default class User {
    username: string;
    password: string;
    permission: string;
    classes: string;

    constructor(data: any) {
        this.load(data);
    }

    load(data: any) {

    }

}