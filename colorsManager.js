class ColorsHandler {
    constructor() {
        this.colors = ['5758BB', '6F1E51', 'F79F1F', '1289A7', 'eaeaea','D980FA', '006266'];
        this.currentIndexColor = 0;
    }

    init() {
        const that = this;
        const myCallBack = function replacingColor(event) {
            if (event.target.matches('path')) {
                event.target.style.fill = that.rotate();
            };
        }

        document.addEventListener('mouseover', myCallBack, false);
    }
    // Shuffle colors
    // shuffle() {
    //     for (let i = this.colors.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * i);
    //         const temp = this.colors[i];
    //         this.colors[i] = this.colors[j];
    //         this.colors[j] = temp;
    //     }
    //     return this.colors[0];
    // }

    // Rotate colors
    rotate() {
        if (this.currentIndexColor >= this.colors.length -1) {
            this.currentIndexColor = 0;
        } else {
            this.currentIndexColor += 1;
        }
        // console.log(this.currentIndexColor);
        return this.colors[this.currentIndexColor];

    }
}

const colorHandler = new ColorsHandler();
colorHandler.init();
