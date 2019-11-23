/*
        Proof of concept for detecting mouse distance
        from an object from there css can make it bigger
let name = document.getElementById('name');

gitInfo = name.getBoundingClientRect();

document.addEventListener('mousemove', (event) => {
    let x = event.pageX;
    let y = event.pageY;

    let dx = x - gitInfo.left;
    let dy = y - gitInfo.top;

    dist = Math.max(0, 100 - Math.sqrt((dx*dx) + (dy*dy)));

    lg-heading.style.fontSize = '7rem';
    console.log(dist);
});*/