export class User{
    public id:number;
    public emailuser:string;
    public nameuser:string;
    public passworduser:string;
    public phoneuser:string;
    public typeuser:string;
    constructor(id:number, emailuser:string, nameuser:string,passworduser:string, phoneuser:string,typeuser:string){
        this.id=id;
        this.emailuser=emailuser;
        this.nameuser=nameuser;
        this.passworduser=passworduser;
        this.phoneuser=phoneuser;
        this.typeuser=typeuser;

    }
    
}