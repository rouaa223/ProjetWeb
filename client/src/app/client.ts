export class client{
    public id:number;
    public emailclient:string;
    public nameclient:string;
    public passwordclient:string;
    public phoneclient:string;
    public typeclient:string;
    constructor(id:number, emailclient:string, nameclient:string,passwordclient:string, phoneclient:string,typeclient:string){
        this.id=id;
        this.emailclient=emailclient;
        this.nameclient=nameclient;
        this.passwordclient=passwordclient;
        this.phoneclient=phoneclient;
        this.typeclient=typeclient;

    }
    
}