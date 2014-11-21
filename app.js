/**
 * Created by g on 2014/11/21.
 */
function init(){
    document.querySelector("#wrap").setAttribute("class","page_welcome_to_menu");
    document.querySelector("#welcome").setAttribute("class","welcomekeyframe");
    document.querySelector("#logo").setAttribute("class","logokeyframe");

    var lis=document.querySelectorAll("#menus li");
    for(i=0;i<lis.length;i++){
        lis[i].addEventListener("click",function(){
            document.querySelector("#wrap").setAttribute("class","page_menu_to_page");
        });
    }

    document.querySelector("#return_to_menu").addEventListener("click",function(){
        document.querySelector("#wrap").setAttribute("class","page_page_to_menu");
    });
}
var start = null;
var element = document.getElementById("SomeElementYouWantToAnimate");
/*
function step(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    element.style.left = Math.min(progress/10, 200) + "px";
    if (progress < 2000) {
        window.requestAnimationFrame(step);
    }
}
window.requestAnimationFrame(step);
*/
window.addEventListener("load",init,false);