var prevSccrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevSccrollpos > currentScrollPos) {
        document.getElementById('navbar').style.top = '0';
    }else{
        document.getElementById('navbar').style.top = '-60px';
    }
    prevSccrollpos = currentScrollPos;
}




