import { dataModel } from './entity.js';
import { entity } from './internal.js'
import {auxiliar} from './internal.js'
import {Butons} from './internal.js'
import {globalVariables} from './internal.js'
import { user } from './internal.js';

var activeElementSideMenu : HTMLElement = document.createElement('li');
export function loadingProcess(){
    function entityClick(event: Event){
        activeElementSideMenu.classList.remove('side-menu-li-active');
        activeElementSideMenu = <HTMLElement> event.target;
        activeElementSideMenu.classList.add('side-menu-li-active');
        globalVariables.entities[(<HTMLElement>event.target).dataset.name].setTableView();
    }
     auxiliar.getJSON('userInfo','GET', function(data :{}){
        user.current.email = data['email'];
        user.current.image = data['image'];
        user.current.name = data['name'];
        user.current.group = data['group']['name'];
        user.current.permission = data['group']['permission'];
        console.log(user.current)
        auxiliar.getJSON('entitylist','GET',function(data){
            var lenght = (<Array<Object>> data).length;
            for(var i=0;i<lenght; i++){
                var li = document.createElement("li");
                li.onclick= entityClick;
                li.classList.add('side-menu-li');
                li.dataset.name = data[i].name;
                li.innerHTML =  data[i].localizedName;
                li.style.backgroundImage = "url('"+data[i].image+"')";
                document.getElementById('side-menu').appendChild(li);
                console.log(data[i]);
                console.log(<dataModel>data[i]);
                globalVariables.entities[data[i].name] = new entity(data[i])
            }
        });
    });
    
    Butons.addDefaultButons();
}
loadingProcess();