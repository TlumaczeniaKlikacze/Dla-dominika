
let color = 'white'
let backup;
if(localStorage.getItem('big')){
    const elements = [...document.getElementsByTagName("*")];
    for(const x in elements){
        if(typeof elements[x].className == 'string'){
            elements[x].className = elements[x].className.replace('add_bigger_bigger_font_MEDIUM','') +' add_bigger_bigger_font'
        }
        console.log( typeof elements[x].className) 
    }
}else if(localStorage.getItem('medium')){
    const elements = [...document.getElementsByTagName("*")];
    for(const x in elements){
        if(typeof elements[x].className == 'string'){
            elements[x].className = elements[x].className.replace('add_bigger_bigger_font','') +' add_bigger_bigger_font_MEDIUM'
        }
        console.log( typeof elements[x].className) 
    }
}


if(localStorage.getItem('bg')){
   
    const elements = [...document.getElementsByTagName("*")];
    let for_backup = []
    for(const x in elements){
            for_backup.push({
                el:elements[x],
                color:window.getComputedStyle(elements[x], null).getPropertyValue('color'),
                backgroundColor:window.getComputedStyle(elements[x], null).getPropertyValue('background-color')
            })
    }
    for(const lol in elements){
        elements[lol].style.backgroundColor = 'black'
        elements[lol].style.color = 'yellow'
    }
    backup = for_backup
    color = 'black'
    if(document.querySelector('#_header_right-46-7')){
        const el = [...document.querySelectorAll('.oxy-nav-menu-hamburger-line')]
        for(const ye in el){
            el[ye].style.backgroundColor = 'yellow'
        }
    }
}

var css = `.add_bigger_bigger_font{
    font-size:xx-large !important;
}
.add_bigger_bigger_font_MEDIUM{
    font-size:x-large !important;
}`,
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

head.appendChild(style);

style.type = 'text/css';
if (style.styleSheet){
  // This is required for IE8 and below.
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

document.getElementById('svg-fancy_icon-93-7').addEventListener('click',()=>{
    //MAŁE A

    const elements = [...document.getElementsByTagName("*")];
    for(const x in elements){
        if(typeof elements[x].className == 'string'){
            elements[x].className = elements[x].className.replace('add_bigger_bigger_font','').replace('add_bigger_bigger_font_MEDIUM','')
            
        }
    }
    localStorage.removeItem('medium')
    localStorage.removeItem('big')
})

document.getElementById('fancy_icon-96-7').addEventListener('click',()=>{
    //Średnie A
   

    const elements = [...document.getElementsByTagName("*")];
    for(const x in elements){
        if(typeof elements[x].className == 'string'){
            elements[x].className = elements[x].className.replace('add_bigger_bigger_font','') +' add_bigger_bigger_font_MEDIUM'
        }
        console.log( typeof elements[x].className) 
    }
    localStorage.removeItem('big')
    localStorage.setItem('medium',true)
       
})

document.getElementById('fancy_icon-97-7').addEventListener('click',()=>{
    //Duże A

    const elements = [...document.getElementsByTagName("*")];
    for(const x in elements){
        if(typeof elements[x].className == 'string'){
            elements[x].className = elements[x].className.replace('add_bigger_bigger_font_MEDIUM','') +' add_bigger_bigger_font'
        }
        console.log( typeof elements[x].className) 
    }
    localStorage.removeItem('medium')
    localStorage.setItem('big',true)
  
})


document.getElementById('text_block-101-7').addEventListener('click',()=>{

    if(color == 'white'){
       
        const elements = [...document.getElementsByTagName("*")];
        let for_backup = []
        for(const x in elements){
                for_backup.push({
                    el:elements[x],
                    color:window.getComputedStyle(elements[x], null).getPropertyValue('color'),
                    backgroundColor:window.getComputedStyle(elements[x], null).getPropertyValue('background-color')
                })
        }
        for(const lol in elements){
            elements[lol].style.backgroundColor = 'black'
            elements[lol].style.color = 'yellow'
        }
        if(document.querySelector('#_header_right-46-7')){
            const el = [...document.querySelectorAll('.oxy-nav-menu-hamburger-line')]
            for(const ye in el){
                el[ye].style.backgroundColor = 'yellow'
            }
        }
        backup = for_backup
        color = 'black'
        localStorage.setItem('bg',true)
    }else{
        for(const y in backup){
            backup[y].el.style.backgroundColor =  backup[y].backgroundColor
            backup[y].el.style.color =  backup[y].color
        }
        if(document.querySelector('#_header-42-7'))
        document.querySelector('#_header-42-7').style.backgroundColor = 'white'
        if(document.querySelector('#_nav_menu-50-7')){
            document.querySelector('#_nav_menu-50-7').style.backgroundColor = 'white'
        }
        if(document.querySelector('#_header_right-46-7')){
            const el = [...document.querySelectorAll('.oxy-nav-menu-hamburger-line')]
            for(const ye in el){
                el[ye].style.backgroundColor = 'black'
            }
        }
        
        color = 'white'
        localStorage.removeItem('bg')
    }
 
})
