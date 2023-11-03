function toggle(popName){
    let blur = document.querySelector('#blur')
    blur.classList.toggle('active')

    if (popName === "javascript"){
        let popup = document.querySelector('#js-pop')
        popup.classList.toggle('active');
    }
    else if (popName === "python"){
        let popup = document.querySelector('#python-pop')
        popup.classList.toggle('active');
    }
    else if (popName === "c"){
        let popup = document.querySelector('#c-pop')
        popup.classList.toggle('active');
    }
    else if (popName === "cpp"){
        let popup = document.querySelector('#cpp-pop')
        popup.classList.toggle('active');
    }
    else if (popName === "html"){
        let popup = document.querySelector('#html-pop')
        popup.classList.toggle('active');
    }
    else if (popName === "css"){
        let popup = document.querySelector('#css-pop')
        popup.classList.toggle('active');
    }
    else{
        let popup = document.querySelector('#java-pop')
        popup.classList.toggle('active');
    }
}

