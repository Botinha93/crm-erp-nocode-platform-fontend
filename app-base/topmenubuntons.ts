export class topmenubuntons{
  private lidropdown :HTMLElement;
  private li : HTMLElement;
  private dumydropdown :HTMLElement = document.createElement('dumy');
  private dumy : HTMLElement = document.createElement('dumy');
    constructor(imgBase64:string, text:string, action:()=> void, filter : string = "") {
        var newli = document.createElement('li');
        var newlidropdown = document.createElement('li')
        newli.textContent = text;
        newli.style.background = "url('"+imgBase64+"')";
        newli.style.filter = filter;
        newli.onclick = action;
        newlidropdown.textContent = text;
        newlidropdown.style.background = "url('"+imgBase64+"')";
        newlidropdown.onclick = action;
        newli.classList.add('nav-bar-menu-item');
        newli.id = text;
        newlidropdown.classList.add('nav-bar-dropmenu-item')
        newlidropdown.id = 'nav-bar-dropmenu-item-'+text
        document.getElementById('nav-bar-menu').appendChild(newli);
        document.getElementById('nav-bar-dropmenu').appendChild(newlidropdown);
        this.lidropdown =newlidropdown;
        this.li = newli;
    }
    activateButom(){
      this.li.style.display = 'list-item'
      this.lidropdown.style.display = 'block'
    }
    deactivateButom(){
      this.li.style.display = 'none';
      this.lidropdown.style.display = 'none';
    }
    static clear(){
        document.getElementById('nav-bar-menu').innerHTML = '';
        document.getElementById('nav-bar-dropmenu').innerHTML = '';
    }
    static detectWrap() {
        var warped = false;
        var items = document.getElementsByClassName('nav-bar-menu-item');
        var top = items[0].getBoundingClientRect().top
        for (var i = 0; i < items.length; i++) {
          if (top < items[i].getBoundingClientRect().top) {
            warped = true;
            document.getElementById('nav-bar-dropmenu-item-'+items[i].id).style.display = 'list-item'
          }else{
            document.getElementById('nav-bar-dropmenu-item-'+items[i].id).style.display = 'none'
          }
        };
        if(warped){
            document.getElementById('nav-bar-dropmenu-buttom').style.display = 'block'
            warped = false;
        }else{
            document.getElementById('nav-bar-dropmenu-buttom').style.display = 'none'
        }
      }
}
window.addEventListener('resize', topmenubuntons.detectWrap)
 