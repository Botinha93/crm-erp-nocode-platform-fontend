
import {moduleBase} from '../internal.js'
import {globalVariables} from '../internal.js'
import {dataInfo} from '../internal.js'

export class textboxModule extends moduleBase{
    imput : HTMLInputElement ;

    getValue() : any {
        return this.imput.value;
    }
    setValue(value: any): void {
        this.imput.value = value;
        this.OnChange();
    }
    clear(): void {
        this.imput.value = "";
    }
    getType(){
        return 'TextBox';
    }
    constructor(data : dataInfo){
        super(data);
        var box = document.createElement("INPUT");
        if(data.image.normalize() === 'no'.normalize()){
            box.classList.add('module-imput')
        }else{
            box.classList.add('module-imput-img')
            box.style.backgroundImage = "url('"+data.image+"')";
        }
        box.setAttribute("type", "text");
        box.id = name;
        this.imput = <HTMLInputElement> box;
        this.htmlElement.appendChild(this.imput);
        this.imput.onchange = this.OnChange.bind(this);
    }

}
document.head.insertAdjacentHTML( 'beforeend', '<link rel=stylesheet href=app-base/modules/textbox.css>' );
globalVariables.moduleRegistry['TextBox'] = (data : dataInfo)=>{
    return new textboxModule(data);
};
