class AutoScroll {
    constructor(el,speed=100,type='v') {
        this.ele = $(el);//父元素
        this.ele1 = $(el+'>:first-child') ;//子元素
        this.ele.append(this.ele.html()) ;
        this.timer ;//计时器
        this.speed  = speed ; //速度
        this.type = type ; //滚动类型
    }

    handleScrollAuto() {
        if(this.type == 'v') {
            if( this.ele1.height() - this.ele.scrollTop() >= 0) {
                this.ele.scrollTop((this.ele.scrollTop())+1);
            }else {
                this.ele.scrollTop( this.ele.scrollTop() - this.ele1.height());
            }
        }else if(this.type == 'h') {
            if( this.ele1.width() - this.ele.scrollLeft() >= 0) {
                this.ele.scrollLeft((this.ele.scrollLeft())+1);
            }else {
                //console.log('需要跳回顶部了',(this.ele.scrollLeft() - this.ele1.width()))
                this.ele.scrollLeft(this.ele.scrollLeft() - this.ele1.width());
            }
        }
        
    };

    init() {
        console.log('初始化。。。。');
        this.ele.mouseenter(()=>{
            this.pause();
        })
        this.ele.mouseleave(()=>{
            this.play();
        })
        this.play();
    }

    play() {
        this.timer = setInterval(()=>{
            this.handleScrollAuto();
        },this.speed) ;
    }

    pause() {
        clearInterval(this.timer)
    }
    
}


if (typeof module !== 'undefined' && typeof module.exports === 'object') {
    module.exports = AutoScroll;
} else {
    window.AutoScroll = AutoScroll;
}