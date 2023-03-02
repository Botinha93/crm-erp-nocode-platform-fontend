import {globalVariables} from './internal.js'

export abstract class moduleBase{
    data : dataInfo
    htmlElement : HTMLElement ;
    private changelist = [];
    private title :HTMLElement;
    OnChange(){
        for (var i = 0; i < this.changelist.length; i++) {
            this.changelist[i]();
        }
    }
    abstract getValue() : any ;
    abstract setValue(value: any): void ;
    abstract clear(): void ;
    addOnChange(reference: () => any): void {
        this.changelist[this.changelist.length] = reference;
    }
    getName(): string {
        return this.data.name;
    }
    getlocalizedName(): string {
        return this.data.localizedName;
    }
    displayTitle(){
        if(this.title.classList.contains('dontdisplay')){
            this.title.classList.remove('dontdisplay')
        }else
             this.title.classList.add('dontdisplay')
    }
    abstract getType() : string;

    constructor(data : dataInfo){
        this.htmlElement = document.createElement("div")
        switch (data.coolSize) {
            case 1:
                this.htmlElement.classList.add('col-space-one');
                break;
            case 2:
                this.htmlElement.classList.add('col-space-tow');
                break;
            
            default:
                this.htmlElement.classList.add('col-space-tree');
                break;
        }
        this.htmlElement.classList.add('growflex');
        this.htmlElement.classList.add('module-main');
        this.title = document.createElement("p");
        if(data.required){
            var asterisk = document.createElement('b');
            asterisk.style.color = "red";
            asterisk.textContent = ' *';
            this.title.textContent = data.localizedName;
            this.title.appendChild(asterisk);
        }else{
            this.title.textContent = data.localizedName
        }
        this.title.classList.add('module-imput-text')
        this.htmlElement.appendChild(this.title)
        this.data = data;
    }
    
}
export class dataInfo{
    "name": string;
    "localizedName" : string;
    "Type" : string;
    "image" : string
    "unique" : boolean;
    "required" : boolean;
    "exposition" : boolean;
    "coolSize" : number;
    "dataArray" : any[];
}

export class module{
    static new( propriety : dataInfo){
        return globalVariables.moduleRegistry[propriety.Type](propriety);
    }
}
