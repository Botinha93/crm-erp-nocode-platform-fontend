import { globalVariables } from './internal.js';
import {module} from './internal.js'
import {moduleBase} from './internal.js'
import {tableView} from './internal.js'
import {tableModel} from './internal.js'
import {auxiliar} from './internal.js'
import {dataInfo} from './internal.js'
import {Butons} from './internal.js'
import {user} from './internal.js'
import { Table } from './table-base.js';

export class entity{
    private name : string;
    private localizedName : string
    private proprieties : Array<moduleBase> = new Array<moduleBase>();
    private content :HTMLElement;
    private tables : tableModel[] = new Array<tableModel>();
    private tableNames : string[] = [];
    private openTable = 0;
    private currentview : string;
    private topExposition:{root:HTMLElement,OpenEntity:HTMLElement} = { root: null,OpenEntity: null};
    private currentOpenID : string = "";
    private butons:string[];
    principalPropriety : string;
    constructor(data: dataModel){
        this.name = data.name;
        this.localizedName = data.localizedName;
        this.principalPropriety = data.principalPropriety;
        data.tables.forEach(element => {
            this.tableNames.push(element.localizedName);
        });
        this.tables = data.tables;
        console.log(this.tableNames);
        console.log(this.tables)
        this.content = document.createElement('div');
        this.content.classList.add('content-main')
        this.topExposition.root = document.createElement('div');
        this.topExposition.root.classList.add('content-header-modules-exposition');
        this.butons;
        var title = document.createElement('div');
        title.style.display = 'flex';
        title.style.flexDirection = 'column';
        title.style.flexGrow = "1";
        title.style.overflow = 'none';
        this.topExposition.OpenEntity = document.createElement('h2')
        var h3 = document.createElement('h5')
        h3.textContent = this.localizedName;
        title.appendChild(this.topExposition.OpenEntity);
        title.appendChild(h3);
        this.topExposition.root.appendChild(title)
        this.content.appendChild(this.topExposition.root);
        var expo = document.createElement('div');
        expo.style.display = 'flex';
        expo.style.height = "70px";
        this.topExposition.root.appendChild(expo);
        data.proprieties.forEach((element) =>{
            this.addPropriety(module.new(element))
            console.log(element.exposition)
            if(element.exposition){
                var div = document.createElement('exposition');
                div.style.display = 'flex'; div.style.flexDirection = 'column';
                div.style.overflow=  'hidden';
                div.style.textOverflow= 'ellipsis';
                div.style.whiteSpace= 'nowrap';
                var h5 = document.createElement('h5');
                var p = document.createElement('p');
                h5.textContent = element.localizedName;
                div.appendChild(h5);
                div.appendChild(p);
                (<moduleBase>this.proprieties[element.name]).addOnChange(()=>{console.log('hello there general...'); p.textContent = this.proprieties[element.name].getValue();})
                expo.appendChild(div)
            }
            this.content.appendChild(this.proprieties[element.name].htmlElement)
        });
    }
    getPropriety(name : string) : moduleBase{
        return this.proprieties[name]; 
    }
    addPropriety(prop) : void{
        this.proprieties[this.proprieties.length] = this.proprieties[prop.getName()] = prop;
    }
    getName():string{
        return this.name;
    }
    getlocalizedName():string{
        return this.localizedName
    }
    setTableView(){
        auxiliar.clearView(this.tableContent().rootelement,this.getName(), globalVariables.enumViews.TABLE);
    }
    setView(id : string){
        this.currentOpenID = id;
        auxiliar.getJSON("https://localhost:44358/api/Values/"+this.name+"/id?categoryIds="+id,'GET', (data) =>{
            this.proprieties.forEach(prop => {
                prop.setValue(data[0][prop.getName()]);
            });
            this.currentview = data["_id"];
            this.topExposition.OpenEntity.textContent = this.proprieties[this.principalPropriety].getValue();
        });
    }
    getAvaliableTableViews(){
        return this.tableNames;
    }
    setOpenTable(tableid){
        this.openTable = tableid;
        this.setTableView();
    }
    private buildView(){

    }
    getCurrentOpenRegistry() : string{
        return this.currentview;
    }
    getCurrentOpenID(){
        return this.currentOpenID;
    }
    saveView(){
        var json = {};
        this.proprieties.forEach(prop => {
            json[prop.getName()] = prop.getValue();
        });
        
        if(this.getCurrentOpenID() != ""){
            auxiliar.getJSON("api/Values/"+this.name+"/id?categoryIds="+this.getCurrentOpenID(),'PUT', (data) =>{
                console.log("api/Values/"+this.name+"/id?categoryIds="+this.getCurrentOpenID())
                this.closeView();
            },json);
        }else{
            auxiliar.getJSON("api/Values/"+this.name,'PUT', (data) =>{
                this.closeView();
            },json);
        }
        
    }
    closeView(){
        auxiliar.clearView(this.tableContent().rootelement,this.getName(), globalVariables.enumViews.TABLE);
        this.clearView();
        this.currentOpenID = "";
    }
    clearView(){
        this.proprieties.forEach(prop => {
            prop.clear();
        });
        this.topExposition.OpenEntity.textContent = "New " + this.getlocalizedName();
        var array = this.topExposition.root.getElementsByTagName('exposition');
        for(var i = 0; i< array.length; i++){
            array[i].lastChild.textContent = "";
        }
        this.currentOpenID = "";
    }
    viewContent() : HTMLElement{
        return this.content;
    }
    private currentTableID:number;
    private currentTableObject:tableView;
    tableContent() : tableView{
        if(this.currentTableID != this.openTable){
            this.currentTableObject = new tableView(this.tables[this.openTable],this);
            this.currentTableID = this.openTable;
        }
        return this.currentTableObject;
    }
}
export class dataModel{
    name : string;
    localizedName : string;
    image : string;
    principalPropriety : string;
    useInformationHeader: boolean;
    butons:string[];
    proprieties : Array<dataInfo>
    tables : tableModel[];
}
