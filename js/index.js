//rem 动态计算html的字体大小
function refreshRem() {
    var desW = 750,
        winW = document.documentElement.clientWidth,
        ratio = winW / desW;
    document.documentElement.style.fontSize = ratio * 100 + 'px';
}
refreshRem();
window.addEventListener('resize', refreshRem);


//swiper  ('选择器',{参数配置})   onTransitionEnd 动画过渡结束
var mySwiper = new Swiper('.swiper-container', {
    //参数配置
    direction: 'vertical',
    loop: true,
    // mousewheelControl : true,
    // mousewheelInvert : true,
    onTransitionEnd: function (swiper) {
        //swiper.slides; 获取的是一个对象数组 滑块的长度
        var slides = swiper.slides,
        //swiper.activeIndex 滑块当前的索引值
            curIndex = swiper.activeIndex,
        //所有滑块的长度
            total = slides.length,
            targetId = 'slide';
        switch (curIndex) {
            case 0:
                targetId += (total - 2);
                break;
            case (total - 1):
                targetId += 1;
                break;
            default:
                targetId += curIndex;
        }
        [].forEach.call(slides, function (item, index) {
            if (curIndex == index) {
                item.id = targetId;
            } else {
                item.id = null;
            }
        });
    }
});



var oMusic=document.getElementById('music'),
    audioMusic=document.getElementById('audioMusic'),
music=document.getElementById('music1');
window.setTimeout(function(){
    audioMusic.play();
    oMusic.style.opacity=1;
    audioMusic.addEventListener('canplay',function(){
       oMusic.className='music2 musicMove';
    },false)
},1000);
oMusic.onclick=function(){
    if(audioMusic.paused){
        audioMusic.play();
        oMusic.className='music musicMove';
        music.className='music2 music1';
    }else{
        audioMusic.pause();
        oMusic.className='music';
        music.className='music1';

    }
};






