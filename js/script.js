let show = document.querySelector('#menu');
let sideMenu = document.querySelector('.side-menu');
let icon =  document.querySelector('.Icon');
let Arrow =  document.querySelector('.up');
 
show.onclick = ()=>
{
    sideMenu.classList.add("show")
}
icon.onclick = ()=> 
{
    sideMenu.classList.remove("show")
}

window.onscroll = function()
{
    if(this.scrollY >=500)
    {
        Arrow.classList.add('show');
    }
    else
    {
        Arrow.classList.remove('show');   
    }
}

Arrow.onclick = function ()
{
    window.scrollTo(
        {
            top:0,
            behavior:"smooth",
        }
    );
}

var allp = document.querySelectorAll("section.question .container .ques .f-dep p ")
let div = document.querySelectorAll("section.question .container .ques .sec-dep div ")
allp.forEach(function(ele)
{
    ele.onclick = function()
    {
        allp.forEach(function(ele)
        {
            ele.style.borderColor='rgb(174, 171, 171)'
            ele.style.color='black'
        })

        this.style.borderColor='blue'
        this.style.color='blue' 

        div.forEach(function(el)
        {
           if(ele.id == el.id)
           {
            el.style.display='block'
           }
           else
           {
            el.style.display='none'
           }
        })
   }
})






// ques2.style.borderColor='blue'
//     p2.style.color='blue'
//     ques.style.borderColor='rgb(174, 171, 171)'
//     p.style.color='black'


 

 