export { User };
export default class User {
    id: string;
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