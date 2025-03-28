// poem
var words=[
'有一美人兮',
'见之不忘',
'一日不见兮',
'思之如狂',
'凤飞翱翔兮',
'四海求凰',
'无奈佳人兮',
'不在东墙',
'将琴代语兮',
'聊写衷肠',
'何时见许兮',
'慰我彷徨',
'愿言配德兮',
'携手相将',
'不得於飞兮',
'使我沦亡',
'偷偷藏一句话',
'那个叫XDD的女孩',
'我们要永远在一起',
'应该发现不了吧',
'凤兮凤兮归故乡',
'遨游四海求其凰',
'时未遇兮无所将',
'何悟今兮升斯堂',
'有艳淑女在闺房',
'室迩人遐毒我肠',
'何缘交颈为鸳鸯',
'胡颉颃兮共翱翔'
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '别倒下，我会和你一起面对很多事';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },10000)
       setTimeout(function(){
        textone.innerHTML = '别害怕，每天的你都很美丽';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },20000)
      setTimeout(function(){
        textone.innerHTML = '别担心，你的每一时刻都有我';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },30000)
      setTimeout(function(){
        textone.innerHTML = '今晚，整片星空将为你一人闪烁';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },50000)
      setTimeout(function(){
        textone.innerHTML = '青春属于表白';
        texttwo.innerHTML = '阳光属于窗台';
        textthree.innerHTML = '而我想我属于一个拥有你的未来';
      },112500)


 
