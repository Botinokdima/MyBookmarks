//=== ru: Настройки en: Setting ===\\
let paragraph = document.querySelectorAll('#choice_of_settings li');
let block_content = document.querySelectorAll('.block_content');
for (const elem of paragraph) {
    elem.addEventListener('click', () => {
        document.querySelector('#choice_of_settings li.active').classList.remove('active');
        elem.classList.add('active');

        if (elem.dataset.paragraph == 'sett_1') for (const elem2 of block_content) elem2.style.transform = 'translateX(0)';
        if (elem.dataset.paragraph == 'sett_2') {

            for (const elem2 of block_content) elem2.style.transform = 'translateX(-100%)';

            for (const block_bg of document.querySelectorAll('.block_bg')) {
                block_bg.style.width = `calc(100% / ${random()})`;

                if (block_bg.style.backgroundImage == `url("${getLocal('_localStorage_bg')}")`) block_bg.classList.add('active')
            }

            if (!/.\/bg\/bg_.+/.test(getLocal('_localStorage_bg'))) linkGalleryBg.value = getLocal('_localStorage_bg')
            addClearInput()
        }
        if (elem.dataset.paragraph == 'sett_3') for (const elem2 of block_content) elem2.style.transform = 'translateX(-200%)';
    })
}

//=== ru: Основные настройки en: Basic settings ===\\

//=== ru: Hастройки input range en: Input range settings ===\\
function payment(quantity, distance, collectionElems) {
    objSetting.margin = `${distance}px`;
    objSetting.width = quantity;

    let result = parseInt(objSetting.margin) * objSetting.width;
    addBookmark.style.margin = `${distance / 2}px`;
    addBookmark.style.width = `calc((100%  - ${result}px) / ${objSetting.width})`;

    for (const elem of collectionElems) {
        elem.style.margin = `${distance / 2}px`;
        elem.style.width = `calc((100%  - ${result}px) / ${objSetting.width})`;
    }
    saveLocal('_localStorage_setting', objSetting);
}

quantity.addEventListener('input', () => {
    payment(quantity.value, distance.value, document.querySelectorAll('.addLink'));
    document.querySelector('#quantity_block p > span').innerHTML = quantity.value;
})

distance.addEventListener('input', () => {
    payment(quantity.value, distance.value, document.querySelectorAll('.addLink'));
    document.querySelector('#distance_block p > span').innerHTML = distance.value;
})

radius.addEventListener('input', () => {
    [...document.querySelectorAll('.addLink')].forEach((elem) => { elem.style.borderRadius = `${radius.value}px` })
    addBookmark.style.borderRadius = `${radius.value}px`;
    document.querySelector('#radius_block p > span').innerHTML = radius.value;
    objSetting.bdRadius = `${radius.value}px`;
    saveLocal('_localStorage_setting', objSetting);
})

!getLocal('_localStorage_setting') ? quantity.value = 8 : quantity.value = getLocalElem('_localStorage_setting', 'width');
!getLocal('_localStorage_setting') ? distance.value = 10 : distance.value = parseInt(getLocalElem('_localStorage_setting', 'margin'));
!getLocal('_localStorage_setting') ? radius.value = 10 : radius.value = parseInt(getLocalElem('_localStorage_setting', 'bdRadius'));

document.querySelector('#quantity_block p > span').innerHTML = quantity.value;
document.querySelector('#distance_block p > span').innerHTML = distance.value;
document.querySelector('#radius_block p > span').innerHTML = radius.value;

//=== ru: checkbox en: checkbox ===\\
!getLocal('_localStorage_setting') ? checkBorder.checked : checkBorder.checked = getLocalElem('_localStorage_setting', 'border');
!getLocal('_localStorage_setting') ? !checkAnim.checked : checkAnim.checked = getLocalElem('_localStorage_setting', 'zoom');
!getLocal('_localStorage_setting') ? !checkSound.checked : checkSound.checked = getLocalElem('_localStorage_setting', 'sound');
!getLocal('_localStorage_setting') ? checkMenuGroups.checked : checkMenuGroups.checked = getLocalElem('_localStorage_setting', 'header');
!getLocal('_localStorage_setting') ? checkMenuGroupsTrnsparent.checked : checkMenuGroupsTrnsparent.checked = getLocalElem('_localStorage_setting', 'transParentHeader');

function checkAddClas(id, addClass) {
    if (id.checked) {
        [...bookmarksWindow.querySelectorAll('.addLink')].forEach(elem => elem.classList.add(addClass));
        return true;
    }
    else {
        [...bookmarksWindow.querySelectorAll('.addLink')].forEach(elem => elem.classList.remove(addClass));
        return false;
    }
}

checkAnim.addEventListener('input', () => {
    objSetting.zoom = checkAddClas(checkAnim, 'animation');
    saveLocal('_localStorage_setting', objSetting);
})

checkBorder.addEventListener('input', () => {
    objSetting.border = checkAddClas(checkBorder, 'border');
    saveLocal('_localStorage_setting', objSetting);
})

checkSound.addEventListener('change', () => {
    checkSound.checked ? objSetting.sound = true : objSetting.sound = false;
    saveLocal('_localStorage_setting', objSetting);
})


checkMenuGroups.addEventListener('change', () => {
    if (checkMenuGroups.checked) {
        groups.classList.add('active');
        bookmarksWindow.style.paddingTop = "50px";
        objSetting.header = true;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) bookmarksWindow.style.display = 'none';
    }
    else {
        groups.classList.remove('active');
        bookmarksWindow.style.paddingTop = "10px";
        objSetting.header = false;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            bookmarksWindow.style.display = '';
            // bookmarksWindow.style.paddingBottom = "50px";
        }
    }

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && getLocal('_localStorage_setting')) {
        objSetting.header = getLocalElem('_localStorage_setting', 'header');
    }
    saveLocal('_localStorage_setting', objSetting);
})

checkNawGroups.addEventListener('change', () => {
    for (const elem of groupNavigationArrow) {
        if (checkNawGroups.checked) {
            elem.classList.add('active');
            bookmarksWindow.style.paddingLeft = '30px';
            bookmarksWindow.style.paddingRight = '30px';
            objSetting.arrowNav = true;
        }
        else {
            elem.classList.remove('active');
            bookmarksWindow.style.paddingLeft = '';
            bookmarksWindow.style.paddingRight = '';
            objSetting.arrowNav = false;
        }
    }
    saveLocal('_localStorage_setting', objSetting);
})

//=== ru: Смена цвета меню с группами en: Change the color of menus with groups ===\\
checkMenuGroupsTrnsparent.addEventListener('input', () => {
    if (checkMenuGroupsTrnsparent.checked) {
        menuGroups.style.backgroundColor = '';
        objSetting.transParentHeader = true
    }
    else {
        menuGroups.style.backgroundColor = objSetting.bgHeader;
        objSetting.transParentHeader = false
    }
    saveLocal('_localStorage_setting', objSetting);
})

headerMenucolor.addEventListener('input', () => {
    checkMenuGroupsTrnsparent.checked = false
    objSetting.transParentHeader = false
    menuGroups.style.background = headerMenucolor.value;
    objSetting.bgHeader = headerMenucolor.value;
    saveLocal('_localStorage_setting', objSetting);
})

//=== ru: Смена цвета закладки en: Bookmark color change ===\\
linkBGcolor.addEventListener('input', () => {
    [...bookmarksWindow.querySelectorAll('.addLink')].forEach(elem => elem.style.backgroundColor = linkBGcolor.value);
    objSetting.bg = linkBGcolor.value;
    saveLocal('_localStorage_setting', objSetting);
})

//=== ru: Смена фона en: Change background ===\\
function random() {
    return Math.floor(Math.random() * 5);
}

function addBackground(arr, num) {
    for (let i = 1; i <= num; i++) {
        arr.push(`bg_${i}.jpg`);
    }
    return arr;
}

for (const elem of addBackground([], 36)) {
    let blockBg = document.createElement('div');
    blockBg.classList.add('block_bg');
    blockBg.style.background = `url(./bg/${elem}) no-repeat  center/cover`;
    document.getElementById('image_gallery').appendChild(blockBg);

    blockBg.addEventListener('click', () => {
        linkGalleryBg.value = '';
        addClearInput();
        body.style.background = `url(./bg/${elem}) no-repeat fixed center/cover`;

        if (!document.querySelector('.block_bg.active')) blockBg.classList.add('active');

        else {
            document.querySelector('.block_bg.active').classList.remove('active');
            blockBg.classList.add('active');
        }

        saveLocal('_localStorage_bg', `./bg/${elem}`);
        findElem();
    })
}

//=== ru: Свой фона en: Your background ===\\
linkGalleryBg.addEventListener('input', () => {
    if (document.querySelector('.block_bg.active')) document.querySelector('.block_bg.active').classList.remove('active');

    testerImage(linkGalleryBg.value, imageFound)

    function imageFound() {
        body.style.background = `url(${linkGalleryBg.value}) no-repeat fixed center/cover`;
        saveLocal('_localStorage_bg', linkGalleryBg.value);
        clearInterval(timerBg);
        backgroundTime.selectedIndex = 0
        objSetting.selectValue = 0;
        saveLocal('_localStorage_setting', objSetting);
        findElem()
    }
})

//=== ru: Смена фона по времени en: Change background in time ===\\
let s15 = 15000
let s30 = 30000
let m1 = 1000 * 60
let m3 = 1000 * 60 * 3
let m5 = 1000 * 60 * 5
let elementImg = 0

backgroundTime.addEventListener('change', () => {
    linkGalleryBg.value = ''
    addClearInput()
    switch (backgroundTime.value) {
        case "s15":
            clearInterval(timerBg);
            timerBg = setInterval(backgroundСhange, s15)
            objSetting.selectValue = backgroundTime.value;
            saveLocal('_localStorage_setting', objSetting);
            break;
        case "s30":
            clearInterval(timerBg);
            timerBg = setInterval(backgroundСhange, s30)
            objSetting.selectValue = backgroundTime.value;
            saveLocal('_localStorage_setting', objSetting);
            break;
        case "m1":
            clearInterval(timerBg);
            timerBg = setInterval(backgroundСhange, m1)
            objSetting.selectValue = backgroundTime.value;
            saveLocal('_localStorage_setting', objSetting);
            break;
        case "m3":
            clearInterval(timerBg);
            timerBg = setInterval(backgroundСhange, m3)
            objSetting.selectValue = backgroundTime.value;
            saveLocal('_localStorage_setting', objSetting);
            break;
        case "m5":
            clearInterval(timerBg);
            timerBg = setInterval(backgroundСhange, m5)
            objSetting.selectValue = backgroundTime.value;
            saveLocal('_localStorage_setting', objSetting);
            break;

        default:
            clearInterval(timerBg);
            objSetting.selectValue = 0;
            saveLocal('_localStorage_setting', objSetting);
    }
})

function backgroundСhange() {
    body.style.background = `url(./bg/${addBackground([], 36)[elementImg]}) no-repeat  center/cover`;
    saveLocal('_localStorage_bg', `./bg/${addBackground([], 36)[elementImg]}`);
    elementImg++
    if (elementImg > addBackground([], 36).length - 1) {
        elementImg = 0
    }
}