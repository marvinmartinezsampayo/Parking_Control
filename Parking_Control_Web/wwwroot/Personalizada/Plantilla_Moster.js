window.onload = function () {
    const miDiv = document.getElementById('main-wrapper');
    if (miDiv) {
        miDiv.setAttribute('data-header-position', 'fixed');   
        miDiv.setAttribute('data-layout', 'horizontal');  
        miDiv.setAttribute('data-navbarbg', 'skin3');  
        miDiv.setAttribute('data-sidebartype', 'full'); 
        miDiv.setAttribute('data-sidebar-position', 'absolute'); 
        miDiv.setAttribute('data-boxed-layout', 'boxed'); 
    }
};
