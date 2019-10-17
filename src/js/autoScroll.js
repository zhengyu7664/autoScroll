class AutoScroll {
    constructor(el,el1,speed=100,type='v') {
        this.ele = $(el);//父元素
        this.ele1 = $(el+' '+el1+':first-child') ;//子元素
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
            console.log(this.ele1.width() - this.ele.scrollLeft()) ;
            if( this.ele1.width() - this.ele.scrollLeft() >= 0) {
                this.ele.scrollLeft((this.ele.scrollLeft())+1);
            }else {
                console.log('需要跳回顶部了',(this.ele.scrollLeft() - this.ele1.width()))
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

// vue项目中使用需要export 并import
// export default AutoScroll ;