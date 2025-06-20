"use strict";
// ハンバーガーメニュー
{
    const open = document.querySelector('#open');
    const overlay = document.querySelector('.overlay');
    const close = document.querySelector('#close');
    const overlayLinks = document.querySelectorAll('.overlay nav ul li a'); // ハンバーガーメニュー内のリンクを取得

    open.addEventListener('click', () => {
        overlay.classList.add('show');
        open.classList.add('hide');
    });

    close.addEventListener('click', () => {
        overlay.classList.remove('show');
        open.classList.remove('hide');
    });

    // 各リンクにクリックイベントを追加
    overlayLinks.forEach(link => {
        link.addEventListener('click', () => {
            overlay.classList.remove('show');
            open.classList.remove('hide');
        });
    });
}