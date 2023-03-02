import { Table, tableModel } from "./internal.js";
import { entity } from './entity.js';
import {dataInfo} from './internal.js'


export class tableView extends Table{
    private title : HTMLSelectElement;
    constructor(tableInfo:tableModel, parent:entity) {
        super(tableInfo,parent);
        this.title = document.createElement('select');
        this.title.classList.add('content-main-title');
        this.title.contentEditable = "false";
        this.parent.getAvaliableTableViews().forEach((element, index) => {
          var option =  document.createElement('option');
          option.text = element;
          option.value = index.toString();
          this.title.options[index] = option;
          if(this.localizedName == element)
            this.title.selectedIndex = index;
        });
        this.title.onchange = this.selectNewTable.bind(this);
        this.rootelement.insertBefore(this.title, this.rootelement.firstChild);
    }
    private selectNewTable(event : Event){
        this.parent.setOpenTable((<HTMLSelectElement>event.target).selectedIndex);
      }
    
}