function animLoader() {
    const loaderCube = document.getElementById('js-loader-cube');
    const loaderLine = document.getElementById('js-loader-line');
    const loader = document.getElementById('js-loader')
    
    const tl = new TimelineMax();
    tl
        .to(loaderCube, 1.5, { ease: Power2.easeInOut, rotation: '+= 450', transformOrigin: "center center" })
        .to(loaderLine, 1.5, { ease: Power0.easeNone, height: 0 }, 0)
        .to(loader, 1, { opacity: 0 }, 1.4)
        .to(loader, 1, { zIndex: -1 }, 3);
    tl.play();
}