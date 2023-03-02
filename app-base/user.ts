export class user{
    static current:user = new user();
    name : string;
    image : string;
    email : string;
    group : string;
    permission : {[entity:string] : number};
}
