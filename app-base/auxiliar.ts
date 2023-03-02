import {entity} from './internal.js'
import {Table} from './internal.js'
import {Butons} from './internal.js'
import {user} from './internal.js'


export interface Dictionary {
    [index: string]: any;
}

export class auxiliar{
    static getJSON(url : string, requestType:string, callback : (data:object) => void, body : Object = null): void{
        var xhr = new XMLHttpRequest();
        xhr.open(requestType, url, true);
        xhr.setRequestHeader('token', localStorage.getItem("token"));
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
          var status = xhr.status;
          if (status === 200) {
            callback(xhr.response);
          } else if(status === 451){
            window.location.replace(xhr.getResponseHeader("location"));
          } else {
            console.log(status, xhr.response);
          }
        };
        if(body){
          xhr.send(JSON.stringify(body))
        }else{
          xhr.send();
        }
    };
    static clearView(viewElement : HTMLElement, newEntity : string, newView: string){
      Butons.activeFromPermission(user.current.permission[newEntity],newView)
      const content = document.getElementById('div-content');
      while (content.firstChild) {
          content.removeChild(content.lastChild);
      }
      if(newView == globalVariables.enumViews.TABLE){
          globalVariables.entities[newEntity].tableContent().addTableContent();
          viewElement = globalVariables.entities[newEntity].tableContent().rootelement;
      }
      document.getElementById('div-content').appendChild(viewElement);
      globalVariables.curentEntity = newEntity;
      globalVariables.currentView = newView;
    }
}

class View {
  public TABLE = 'table';
  public ENTITY =  'entity';
}
export class globalVariables {
    static readonly enumViews = new View();
    static home : string = "clintescontas";
    static moduleRegistry =[];
    static curentEntity : string;
    static currentView : string;
    static mainTable : Table ;
    static entities : entity[] = [];
}