let _btn=document.querySelectorAll('button');
let _body=document.querySelector('body');
let mainTit=document.querySelector('h1>a');
let navList=document.querySelectorAll('li>a');
let _li=document.querySelectorAll('h2');
let _p=document.querySelectorAll('p');
//마우스 오버 이벤트
for(let idx=0;idx<_btn.length;idx++){
    _btn[idx].addEventListener('mouseover',(event)=>{
        event.target.style.opacity=1;
    })
};
//마우스 아웃
for(let idx=0;idx<_btn.length;idx++){
    _btn[idx].addEventListener('mouseout',(event)=>{
        event.target.style.opacity=0.3;
    })
};

_btn[0].addEventListener('click',()=>{
    _body.style.backgroundColor='#000';
    mainTit.style.color='#f99';
    for (let idx=0;idx<_li.length;idx++){
        _li[idx].style.color='#aaf';
    };
    for (let idx=0;idx<navList.length;idx++){
        navList[idx].style.color='#aaf';
    };
    for (let idx=0;idx<_p.length;idx++){
        _p[idx].style.color='#aaf';
    };
});

_btn[1].addEventListener('click',()=>{
    _body.style.backgroundColor='#fff';
    mainTit.style.color='#000';
    for (let idx=0;idx<_li.length;idx++){
        _li[idx].style.color='#000';
    };
    for (let idx=0;idx<navList.length;idx++){
        navList[idx].style.color='#000';
    };
    for (let idx=0;idx<_p.length;idx++){
        _p[idx].style.color='#000';
    };
});
