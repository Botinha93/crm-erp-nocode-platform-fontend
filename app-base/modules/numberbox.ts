import {textboxModule} from '../internal.js'
import {globalVariables} from '../internal.js'
import {dataInfo} from '../internal.js'
export class numberBoxModule extends textboxModule{
    constructor(data:dataInfo){
        super(data);
        this.imput.setAttribute("type", "number");
    }
    getType(){
        return 'NumberBox';
    }
    getValue() : number {
        return Number(this.imput.value);
    }
    
}
globalVariables.moduleRegistry['NumberBox'] = (data:dataInfo)=>{
    return new numberBoxModule(data);
};