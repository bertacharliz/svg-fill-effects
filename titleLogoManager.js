class TitleLogoManager {
    init() {
        // document.addEventListener('mouseover', (e) => {
        //     const paths = document.querySelectorAll('path');
        //     const thirdPath = paths[2];
        //     console.log(thirdPath);
        //     if (e.target === thirdPath) {
        //         const title = document.createTextNode('Melouani');
        //         const nodeElem = document.getElementsByClassName('Header__linkTitle');
        //         nodeElem.parentNode.insertBefore(title, nodeElem);
        //     }
        // }, false);

    }
}

const titleLogoManager = new TitleLogoManager();
titleLogoManager.init();