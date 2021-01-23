export { User };
export default class User {
    id: string;
    username: string;
    password: string;
    permission: string;
    classes: string;
    avi: string;

    constructor(data: any) {
        this.load(data);
    }

    load(data: any) {
        this.id = data.id;
        this.username = data.username;
        this.password = data.password;
        this.permission = data.permission;
        this.classes = data.classes;
        this.avi = data.avi;
    }

}