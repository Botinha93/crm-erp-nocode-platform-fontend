import { globalVariables } from './internal.js';
import { auxiliar } from './internal.js';
import { entity } from './entity.js';
import {topmenubuntons} from './internal.js'
import {images} from './internal.js'

export class Butons{
    static registeredButons:Array<{buton : topmenubuntons, pos : number, isActive:boolean}>= [];
    static addDefaultButons(){
        Butons.addButon('new', new topmenubuntons(images.new,"New",()=>{
            (<entity>globalVariables.entities[globalVariables.curentEntity]).clearView();
            auxiliar.clearView((<entity>globalVariables.entities[globalVariables.curentEntity]).viewContent(), (<entity>globalVariables.entities[globalVariables.curentEntity]).getName(),globalVariables.enumViews.ENTITY)
        }));
        Butons.addButon('save', new topmenubuntons(images.save,"Save",()=>{
           (<entity>globalVariables.entities[globalVariables.curentEntity]).saveView();
           (<entity>globalVariables.entities[globalVariables.curentEntity]).clearView();
        }));
        Butons.addButon('active', new topmenubuntons(images.accept,"Set as Active",()=>{
            Butons.menuAction('PUT',{active:true});
         }));
         Butons.addButon('inactive',new topmenubuntons(images.block,"Set as Inactive",()=>{
            Butons.menuAction('PUT',{active:false});
        }));
        Butons.addButon('delete',new topmenubuntons(images.trash,"Delete",()=>{
            Butons.menuAction('DELETE')
        }));
        Butons.addButon('report',new topmenubuntons(images.graph,"PDF Report",()=>{
    
        }));
        topmenubuntons.detectWrap();
    }
    static addButon(name: string,bt : topmenubuntons){
        Butons.registeredButons[name] = {buton : bt, pos : Butons.registeredButons.length, isActive:true};
        Butons.registeredButons[Butons.registeredButons.length] = Butons.registeredButons[name];
    }
    static deactiveButons(butons: string[]){
        butons.forEach(element => {
            if(Butons.registeredButons[element].isActive){
                Butons.registeredButons[element].buton.deactivateButom();
                Butons.registeredButons[element].isActive = false;
            }
        });
    }
    static activeButons(){
        Butons.registeredButons.forEach(element => {
            if(!element.isActive){
                element.isActive = true;
                element.buton.activateButom();
            }
        });
    }
    static activeFromPermission(permission : number , enumViews:string){
        Butons.activeButons()
        var toRemove :string[] = []
        if(permission % 2 ==1){
            if(permission / 2 <2){
                toRemove.concat(['new','save','active','inactive']);
            }
        }else{
            toRemove.push('delete');
        }
        if(enumViews == globalVariables.enumViews.TABLE){
            toRemove.push('save');
        }
        console.log(enumViews);
        Butons.deactiveButons(toRemove);
    }
    private static menuAction(protocol:string,json:object = {}){
        var url = "";
        if(globalVariables.currentView == globalVariables.enumViews.TABLE){
            url = '/api/Values/'+(<entity>globalVariables.entities[globalVariables.curentEntity]).getName()+'/id?';
            (<entity>globalVariables.entities[globalVariables.curentEntity]).tableContent().selectedItens.forEach((element,index) => {
                url += "categoryIds="+element.dataset._id
                if(index < (<entity>globalVariables.entities[globalVariables.curentEntity]).tableContent().selectedItens.length-1)
                    url += "&"
            });
            
        }else{
            url = '/api/Values/'+(<entity>globalVariables.entities[globalVariables.curentEntity]).getName()+'/id?categoryIds='+(<entity>globalVariables.entities[globalVariables.curentEntity]).getCurrentOpenID();
        }
        auxiliar.getJSON(url, protocol, (data)=>{(<entity>globalVariables.entities[globalVariables.curentEntity]).closeView()},json);
    }
}