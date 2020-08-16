let body = document.body;

let welcomePopupBackground = document.getElementById('welcome_popup_background');
welcomePopupBackground.addEventListener('click', () => welcomePopupBackground.style.display = 'none');
let welcomePopup = document.getElementById('welcome_popup');
welcomePopup.addEventListener('click', () => event.stopPropagation());
let closeWelcomePopup = document.getElementById('close_welcome_popup');
let nextWelcomePopup = document.getElementById('next_welcome_popup');
let blockImg = document.querySelectorAll('.block_img');


welcomePopup.addEventListener('scroll',()=>{
    if(welcomePopup.scrollHeight - welcomePopup.scrollTop == welcomePopup.clientHeight) closeWelcomePopup.style.display = 'block';
})

let popupBackground = document.querySelectorAll('.popup_background');
//=== ru: Контекстное меню en: Context menu ===\\
let contextMenu = document.getElementById('window_menu');

//=== ru: Попап(всплывающие окна) en: Popap ===\\
let addSiteForm = document.getElementById('add_site_form');
let editForm = document.getElementById('edit_form');
// let popupWarning = document.getElementById('popup_warning');
let popupRemoveGroups = document.getElementById('popup_remove_groups');

//=== ru: Добавление закладки en: Add bookmark ===\\
let btnSave = document.getElementById('btn_save');

//=== ru: Сохранения закладки en: Save bookmark ===\\
let btnEditSave = document.getElementById('btn_edit_save');

//=== ru: Input en: Input ===\\
let inpLink = document.getElementById('inp_link');
let inpTitle = document.getElementById('inp_title');
let editInpLink = document.getElementById('edit_inp_link');
let editInpTitle = document.getElementById('edit_inp_title');
let linkBg = document.getElementById('link_bg');
let selectGroups = document.getElementById('select_groups')

//=== ru: Удаление миниатюры закладки en: Delete bookmark thumbnails ===\\
let delLinkImg = document.getElementById('del_img_link')

//=== ru: Меню групп en: Group menu ===\\
let groups = document.getElementById('groups');
let valueGroups = document.getElementById('value_groups');
let addGroupsBtn = document.getElementById('add_groups');
let toggleInputGroups = document.getElementById('toggle_input_groups');
let wrapSearch = document.getElementById('wrap_search');
let bookmarkSearch = document.getElementById('bookmark_search');
let toogleWrapSearch = document.getElementById('toogle_wrap_search');
toogleWrapSearch.addEventListener('click', () => {
    wrapSearch.classList.toggle('active');
    if (wrapSearch.classList.contains('active')) {
        bookmarkSearch.focus();
        menuGroups.style.maxHeight = '50vh';
        toogleWrapSearch.innerHTML = '<i class="fa fa-caret-up" aria-hidden="true"></i>';
    }
    else {
        menuGroups.style.maxHeight = '';
        toogleWrapSearch.innerHTML = '<i class="fa fa-caret-down" aria-hidden="true"></i>';
        bookmarkSearch.value = '';
    }
})
let toggleInputSearch = document.getElementById('toggle_input_search');
let searchResult = document.getElementById('search_result');
 let menuGroups = document.getElementById('menu_groups')
// menuGroups.style.maxWidth = window.innerWidth - 410 + 'px'

let arrow = document.getElementById('arrow');
let burgerSetting = document.getElementById('burger_setting');
burgerSetting.addEventListener('click', () => {
    settingActive();
    burgerSetting.innerHTML = '<i class="fa fa-window-close" aria-hidden="true"></i>';

})
//=== ru: В мобильной версии нижний блок управление en: In the mobile version, the lower control unit ===\\
let mode = document.getElementById('view_mode').children;
let mediaBtnAdd = document.getElementById('media_btn_add');
let mediaBtnSetting = document.getElementById('media_btn_setting');
mediaBtnSetting.addEventListener('click', () => {
    event.stopPropagation();
    popupBackground[3].classList.toggle('active');
    groups.classList.remove('active');
    bookmarksWindow.style.paddingTop = "10px";
    bookmarksWindow.style.display = "";
})

//=== ru: Экран закладок en: Bookmarks Screen ===\\
let bookmarksWindow = document.getElementById('bookmarks_window');
let groupNavigationArrow = document.querySelectorAll('.group_navigation_arrow');
let addBookmark = document.getElementById('add_bookmark');


//=== ru: Настройки en: Setting ===\\
let setting = document.getElementById('setting');
let quantity = document.getElementById('range_quantity');
let distance = document.getElementById('range_distance');
let radius = document.getElementById('range_radius');
let linkBGcolor = document.getElementById('link_color_block');
let headerMenucolor = document.getElementById('header_color_menu');
let checkBorder = document.getElementById('checkbox_border');
let checkAnim = document.getElementById('checkbox_animation');
let checkSound = document.getElementById('checkbox_hover_sound');
let checkMenuGroups = document.getElementById('checkbox_menuGroups');
let checkNawGroups = document.getElementById('checkbox_nawGroups');
let checkMenuGroupsTrnsparent = document.getElementById('checkbox_transparentMenuGroups');
let btnDelitSetting = document.getElementById('btn_delit_setting');
let btnDeleteEverything = document.getElementById('btn_delete_everything');
let linkGalleryBg = document.getElementById('link_gallery_bg');
let backgroundTime = document.getElementById('background_change_in_time');
let sett_3 = document.getElementById('sett_3');
let downloadSave = document.getElementById('download_save');
let uploadSave = document.getElementById('upload_save');

//=== ru: Настройки и переменные по умолчанию en: Default Settings and Variables ===\\
window.addEventListener('load', function () {

    addBookmark.style.cssText = 'border: 2px dashed rgb(252, 250, 250);';
    groups.style.cssText = 'top: 0;left: 0;width:100%;';

    if (!getLocal('_localStorage_bg')) {
        body.style.background = `url(./bg/bg_36.jpg) no-repeat fixed center/cover`
    } else body.style.background = `url(${getLocal('_localStorage_bg')}) no-repeat fixed center/cover`;

    !getLocal('_localStorage_setting') ? objSetting = {
        welcome: true,
        width: 8,
        margin: '10px',
        bdRadius: '10px',
        border: true,
        zoom: false,
        sound: false,
        header: true,
        arrowNav: false,
        bg: '#fff',
        bgHeader: '#000',
        transParentHeader: true,
        selectValue: 0,
    } : objSetting = {
        welcome: getLocalElem('_localStorage_setting', 'welcome'),
        width: getLocalElem('_localStorage_setting', 'width'),
        margin: getLocalElem('_localStorage_setting', 'margin'),
        bdRadius: getLocalElem('_localStorage_setting', 'bdRadius'),
        border: getLocalElem('_localStorage_setting', 'border'),
        zoom: getLocalElem('_localStorage_setting', 'zoom'),
        sound: getLocalElem('_localStorage_setting', 'sound'),
        header: getLocalElem('_localStorage_setting', 'header'),
        arrowNav: getLocalElem('_localStorage_setting', 'arrowNav'),
        bg: getLocalElem('_localStorage_setting', 'bg'),
        bgHeader: getLocalElem('_localStorage_setting', 'bgHeader'),
        transParentHeader: getLocalElem('_localStorage_setting', 'transParentHeader'),
        selectValue: getLocalElem('_localStorage_setting', 'selectValue'),
    };


    if(objSetting.welcome){
        setTimeout(() => {
            welcomePopupBackground.style.display = 'block';
        }, 3000);
    }
    else{
        welcomePopupBackground.style.display = 'none';
    }

    if (objSetting.selectValue == 0) clearInterval(timerBg);
    else {
        clearInterval(timerBg);
        timerBg = setInterval(backgroundСhange, eval(objSetting.selectValue))
        backgroundTime.value = objSetting.selectValue
    }

    let result = parseInt(objSetting.margin) * objSetting.width;
    addBookmark.style.margin = parseInt(objSetting.margin) / 2 + 'px';
    addBookmark.style.width = `calc((100%  - ${result}px) / ${objSetting.width})`;
    addBookmark.style.borderRadius = objSetting.bdRadius;

    objSetting.transParentHeader ? menuGroups.style.backgroundColor = '' : menuGroups.style.background = objSetting.bgHeader;

    if (objSetting.header) {
        groups.classList.add('active');
        bookmarksWindow.style.paddingTop = "50px";
    }
    else {
        groups.classList.remove('active');
        bookmarksWindow.style.padding = "10px";
    }

    for (const elem of groupNavigationArrow) {
        if (objSetting.arrowNav) {
            elem.classList.add('active');
            bookmarksWindow.style.paddingLeft = '30px';
            bookmarksWindow.style.paddingRight = '30px';
            checkNawGroups.checked = true;
        }
        else {
            elem.classList.remove('active');
            bookmarksWindow.style.paddingLeft = '';
            bookmarksWindow.style.paddingRight = '';
            checkNawGroups.checked = false;
        }
    }

    //=== ru: Мобильная версия en: mobile version ===\\ 
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        body.removeEventListener('contextmenu', funcContextMenu)
        groups.classList.remove('active');
        bookmarksWindow.style.paddingTop = "10px";
        bookmarksWindow.style.paddingBottom = "50px";
        checkMenuGroups.checked = false;

        for (const [index,elem] of blockImg.entries()) {
            elem.innerHTML = `<img src="./graphics/teaching img/mpage_${index+1}.jpg" alt="page_${index+1}.jpg">`;
        }
       
        menuGroups.addEventListener('click', () => {
            if (event.target.closest('li')) {
                groups.classList.toggle('active');
                bookmarksWindow.style.display = ''
                bookmarksWindow.style.paddingTop = "10px";
                bookmarksWindow.style.paddingBottom = "50px";
                checkMenuGroups.checked = false;
            }
        })
    }
    else {
        menuGroups.style.maxWidth = window.innerWidth - 410 + 'px'
        Sortable.create(menuGroups);
        Sortable.create(bookmarksWindow);

        menuGroups.addEventListener('drop', () => {
            let objGroups = {};
            for (const elem of menuGroups.children) {
                if (elem.dataset.groupNumber != 'id-0') {
                    objGroups[elem.dataset.groupNumber] = elem.textContent;
                }
            }
            saveLocal('_localStorage_keyGroups', objGroups);
            findElem();
        })
    }


    if (!getLocal('id-0') || String(getLocal('id-0')) == []) {
        saveLocal('id-0', []);
        positinDefaultBtnAdd(addBookmark);
    } else {
        arr = getLocal('id-0');
        addBookmark.classList.remove('positionBtnAdd');
        createBlock(getLocal('id-0'));
    }

    if (!getLocal('_localStorage_keyGroups')) saveLocal('_localStorage_keyGroups', {});
    objGroups = getLocal('_localStorage_keyGroups')
    for (const key in getLocal('_localStorage_keyGroups')) {
        createLi(getLocal('_localStorage_keyGroups')[key], key);
    }

    sizeMenuGroups(menuGroups, parseInt(menuGroups.style.maxWidth) - 30);
})

let arr = [];
let objGroups = {};
let timerBg;
let selectValue;


//=== ru: Сохранение в локальном хранилище en: Saving to local storage ===\\
function saveLocal(id, data) {
    localStorage.setItem(id, JSON.stringify(data));
}

//=== ru: Получить массив с локального хранилища по ключу en: Get array from local storage by key ===\\
function getLocal(id) {
    let json = localStorage.getItem(id);
    return JSON.parse(json);
}

//=== ru: Нахождение элемент в массиве расположенный в локальном хранилище en: Finding an item in an array located in local storage ===\\
function getLocalElem(id, elem) {
    let json = localStorage.getItem(id);
    let res = JSON.parse(json);
    return res[elem];
}

//=== ru: Функцыя возвращает обьект en: Function returns an object ===\\
function addObj(name, address, bg) {
    return { name: name, address: address, bg: bg };
}

//=== ru: Группа с одинаковым названием не создается en: Group with the same name is not created ===\\
function sameТame(arr, elem) {
    for (const elems of arr) {
        if (elems == elem) return false;
    }
    return true;
}

//=== ru: Удаление элемента в массиве en: Removing an item in an array ===\\
function delElemArr(arr, elems) {
    return arr.filter(elem => elem != elems);
}

//=== ru: Проверка изображение en: Check image ===\\
function testerImage(img, funcLoad) {
    let tester = new Image();
    tester.src = img;
    tester.addEventListener('load', funcLoad);
    // tester.addEventListener('error', errorLoad);
}

//=== ru: Создание ссылки en: Link creation ===\\
function createLink(link) {
    let resLink = link.toLowerCase();
    let newLink = /^https?:\/\//.test(resLink);
    if (newLink) return resLink;
    else return `http://${resLink}`;
}

//=== ru: Валидация ссылки en: Link validation ===\\
function checkURL(url) {
    if (/^(?:([a-z]+):(?:([a-z]*):)?\/\/)?(?:([^:@]*)(?::([^:@]*))?@)?((?:[a-z0-9_-]+\.)+[a-z]{2,}|localhost|(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])))(?::(\d+))?(?:([^:\?\#]+))?(?:\?([^\#]+))?(?:\#([^\s]+))?$/i.test(url)) {
        return url;
    }
    return `https://www.google.com/search?q=${url}`;
}

//=== ru: Добавление миниатюры en: Add Thumbnail ===\\
function addLogo(site) {
    try {
        site = site.match(/[A-Z0-9][A-Z0-9_-]*(\.[A-Z0-9][A-Z0-9_-]*)+/i);
        return `https://logo.clearbit.com/${site[0]}?size=300`;
    } catch (error) {
        return `../graphics/google_logo.png`;
        //return `https://logo.clearbit.com/www.google.com?size=300`;
    }
}

//=== ru: Вставка текста с одного инпуту в другой en: Insert text from one input to another ===\\
inpLink.addEventListener('keyup', addTextInput);
inpLink.addEventListener('input', addTextInput);

function addTextInput() {
    inpTitle.value = inpLink.value.replace(/https?:\/\//i, '');
}
//document.execCommand("paste")
// for (const elem of document.querySelectorAll('.data_input')) {
//     elem.addEventListener('contextmenu',()=>{
//         elem.select();
//         document.execCommand("paste");
//         // //elem.value = document.execCommand("copy")
//         // console.log(elem.value);
//     })
// }
//=== ru: Очистка инпутов en: Cleaning up inputs ===\\
function addClearInput() {
    for (const elem of document.querySelectorAll('.data_input')) {
        if (elem.value != '') elem.previousElementSibling.style.display = 'block';
        else elem.previousElementSibling.style.display = '';
    }
}

for (const elem of document.querySelectorAll('.data_input')) {
    elem.addEventListener('input', () => addClearInput());
}

for (const elem of document.querySelectorAll('.clear_value')) {
    elem.addEventListener('click', () => {
        if (elem.nextElementSibling.id == 'edit_inp_link') {
            elem.nextElementSibling.value = '';
            linkBg.value = '';
            addClearInput()
        }
        else elem.nextElementSibling.value = '';
        elem.style.display = '';
    })
}

//=== ru: Закрытие окон en: Closing windows ===\\
for (const elem of document.querySelectorAll('.close_popup')) {
    elem.addEventListener('click', closePopup);
}

function closePopup() {
    for (const elem of popupBackground) {
        elem.classList.remove('active');
        addBookmark.classList.add('positionBtnAdd');
        addBookmark.style.display = 'flex';
        positinDefaultBtnAdd(addBookmark);
        burgerSetting.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
    }
}

for (const elem of popupBackground) {
    elem.addEventListener('mousedown', e => {
        if (e.target.classList.contains('popup_background')) {
            closePopup();
        }
    })
}

document.getElementById('footer_mobile').addEventListener('click', () => closePopup())

//=== ru: Прекращение всплытия en: Cessation of ascent ===\\
for (const elem of popupBackground) {
    elem.addEventListener('contextmenu', e => {
        e.stopPropagation();
        e.preventDefault();
    })
}

//=== ru: Происходит по завершению анимацыи en: Occurs upon completion of animation ===\\
inpLink.addEventListener("animationend", function () {
    this.classList.remove('addAnimation');
    addSiteForm.classList.remove('oops');
})

//=== ru: Проверка размера меню групп en: Checking group menu size ===\\
function sizeMenuGroups(elem, num) {
    if (elem.clientWidth > num) document.getElementById('arrow').style.display = 'flex';
    else if (elem.clientWidth < num) document.getElementById('arrow').style.display = 'none';
}

//=== ru: Навигация меню групп en: Group Menu Navigation ===\\
for (const elem of arrow.children) {
    elem.addEventListener('click', () => {
        if (elem.id == 'arrow_left') menuGroups.scrollLeft = 0;
        if (elem.id == 'arrow_right') menuGroups.scrollLeft += menuGroups.clientWidth;
    })
}

//=== ru: Функцыя проверка если ли хоть одна закладка en: Functional check if there is at least one bookmark ===\\
function positinDefaultBtnAdd(addBookmark) {
    document.querySelectorAll('.addLink').length <= 0 ? addBookmark.classList.add('positionBtnAdd') : addBookmark.classList.remove('positionBtnAdd');
}

//=== ru: Звук при наведении на закладку en: Bookmark hover sound ===\\
function hoverSound(audio) {
    let sound = new Audio();
    sound.src = (audio);
    sound.play();
    sound.currentTime = 0;
}

//=== ru: Активацыя формы ввода en: Active entry forms ===\\
addBookmark.addEventListener('click', funcAddBookmark);
mediaBtnAdd.addEventListener('click', funcAddBookmark);
window.addEventListener('keydown', e => {
    if (e.altKey && e.keyCode == 78) {
        funcAddBookmark();
    }
})

function funcAddBookmark() {
    event.stopPropagation();
    popupBackground[0].classList.toggle('active');
    inpLink.focus()
    addBookmark.classList.remove('positionBtnAdd');
    addBookmark.style.display = 'none';
    contextMenu.style.display = 'none';
    valueGroups.classList.remove('active');
    toggleInputGroups.innerHTML = '<i class="fa fa-plus-square-o" aria-hidden="true"></i>';
}

//=== ru: Добавление закладки en: Add bookmark ===\\
window.addEventListener('keydown', () => {
    if (event.keyCode == 13 && popupBackground[0].classList.contains('active')) {
        pushDate();
    }
})

btnSave.addEventListener('click', pushDate);

function pushDate() {
    if (inpLink.value != '') {
        arr = getLocal(menuGroups.querySelector('li.active').dataset.groupNumber)
        arr.push(addObj(inpTitle.value, createLink(checkURL(inpLink.value)), addLogo(inpLink.value.toLowerCase())));
        inpTitle.value = '';
        inpLink.value = '';
        createBlock(arr);
        saveLocal(document.querySelector('li.active').dataset.groupNumber, arr);
        closePopup()
        findElem()
        addClearInput()
    } else {
        inpLink.classList.add('addAnimation');
        addSiteForm.classList.add('oops');
    }
}

//=== ru: Ввод имени для группы en: Enter a name for the group ===\\
toggleInputGroups.addEventListener('click', () => {
    valueGroups.classList.toggle('active');
    if (valueGroups.classList.contains('active')) {
        toggleInputGroups.innerHTML = '<i class="fa fa-minus-square-o" aria-hidden="true"></i>';
        valueGroups.focus();
        menuGroups.style.maxWidth = window.innerWidth - 590 + 'px';
        sizeMenuGroups(menuGroups, parseInt(menuGroups.style.maxWidth) - 30);
    } else {
        toggleInputGroups.innerHTML = '<i class="fa fa-plus-square-o" aria-hidden="true"></i>';
        menuGroups.style.maxWidth = window.innerWidth - 410 + 'px';
    }
})

valueGroups.addEventListener('keyup', () => valueGroups.value != '' ? addGroupsBtn.style.visibility = 'visible' : addGroupsBtn.style.visibility = 'hidden')

//=== ru: Добавление группы en: Adding a Group ===\\
window.addEventListener('keyup', () => {
    if (event.keyCode == 13 && valueGroups.classList.contains('active') && valueGroups.value != '' || event.keyCode == 13 && valueGroups.value != '') addGroups();
})

addGroupsBtn.addEventListener('click', addGroups);

function addGroups() {
    let idGroupNumber = 'id-';
    let arrGroupNumber = [];


    for (const elem of menuGroups.children) {
        arrGroupNumber.push(elem.dataset.groupNumber.match(/\d+/i)[0]);
    }

    idGroupNumber += +Math.max(...arrGroupNumber) + 1;
    objGroups[idGroupNumber] = valueGroups.value;

    menuGroups.querySelector('li.active').classList.remove('active');
    createLi(valueGroups.value, idGroupNumber).classList.add('active');

    saveLocal(idGroupNumber, []);
    createBlock(getLocal(menuGroups.querySelector('li.active').dataset.groupNumber));
    saveLocal('_localStorage_keyGroups', objGroups);

    positinDefaultBtnAdd(addBookmark);
    findElem();

    valueGroups.value = '';
    addGroupsBtn.style.visibility = 'hidden';
    sizeMenuGroups(menuGroups, parseInt(menuGroups.style.maxWidth) - 30);
}

//=== ru: Нажатие по группам en: Group Click ===\\
menuGroups.addEventListener('click', function () {
    if (event.target.closest('li')) {
        menuGroups.querySelector('li.active').classList.remove('active');
        event.target.closest('li').classList.add('active');
        createBlock(getLocal(event.target.closest('li').dataset.groupNumber));
        positinDefaultBtnAdd(addBookmark);
    }
})

toggleInputSearch.addEventListener('click', () => {
    bookmarkSearch.classList.toggle('active');
    bookmarkSearch.value = '';
    bookmarkSearch.classList.contains('active') ? bookmarkSearch.focus() : bookmarkSearch.blur();
})

//=== ru: Навигацыя по группам en: Navigation groups ===\\
for (const elem of groupNavigationArrow) {
    elem.addEventListener('click', () => {
        let navGroup = '';
        for (const [i, elem2] of [...menuGroups.children].entries()) {
            if (elem2.classList.contains('active')) navGroup = i;
        }

        if (elem.id == 'navigation_right') {
            navGroup++
            if (navGroup > --menuGroups.children.length) navGroup = 0;

            menuGroups.querySelector('li.active').classList.remove('active');
            menuGroups.children[navGroup].classList.add('active');
            createBlock(getLocal(menuGroups.querySelector('li.active').dataset.groupNumber));
        }

        if (elem.id == 'navigation_left') {
            navGroup--;
            if (navGroup < 0) navGroup = --menuGroups.children.length;

            menuGroups.querySelector('li.active').classList.remove('active');
            menuGroups.children[navGroup].classList.add('active');
            createBlock(getLocal(menuGroups.querySelector('li.active').dataset.groupNumber));
        }

        positinDefaultBtnAdd(addBookmark);
    })
}

//=== ru: Создание закладок en: Bookmarking ===\\
function createBlock(data) {

    [...bookmarksWindow.querySelectorAll('a')].forEach(elem => elem.remove());

    for (const elem of data) {

        let blockLink = document.createElement('a');
        blockLink.setAttribute('target', '_blank');
        blockLink.classList.add('addLink');
        blockLink.classList.add('preloaded');
        blockLink.href = elem.address;

        objSetting.border ? blockLink.classList.add('border') : blockLink.classList.remove('border');
        objSetting.zoom ? blockLink.classList.add('animation') : blockLink.classList.remove('animation');

        blockLink.style.margin = parseInt(objSetting.margin) / 2 + 'px';
        let result = parseInt(objSetting.margin) * objSetting.width;
        blockLink.style.width = `calc((100%  - ${result}px) / ${objSetting.width})`;
        blockLink.style.borderRadius = objSetting.bdRadius

        // let img = document.createElement('img')
        // img.src = elem.bg
        // blockLink.append(img)
        testerImage(elem.bg, imageFound)

        function imageFound() {
            blockLink.classList.remove('preloaded');
            blockLink.style.background = `${objSetting.bg} url(${elem.bg}) no-repeat center/contain`;
        }

        setTimeout(() => {
            blockLink.classList.remove('preloaded');
        }, 5000);

        blockLink.addEventListener('drop', () => {
            repointElem(bookmarksWindow.querySelectorAll('.addLink'));
            findElem();
        })

        blockLink.addEventListener('mouseenter', () => objSetting.sound ? hoverSound('./sound/sound.mp3') : false)

        blockLink.addEventListener('mouseover', () => {
            if (event.target.classList.contains('nameLink')) {
                event.target.setAttribute('title', event.target.innerHTML);
            }
        })

        createElement(blockLink, 'btnDelete', '', removeBlockLink);
        createElement(blockLink, 'btnEditing', '', btnEdit);
        createElement(blockLink, 'nameLink', elem.name);


        bookmarksWindow.insertBefore(blockLink, addBookmark);
        blockLink.addEventListener('contextmenu', () => event.preventDefault());
    }
}

//=== ru: Удаление закладок en: Delete bookmark ===\\
function removeBlockLink() {
    this.parentNode.remove();
    repointElem(bookmarksWindow.querySelectorAll('.addLink'));
    positinDefaultBtnAdd(addBookmark);
    findElem();
}

//=== ru: Редактирование закладки en: Bookmark Editing ===\\
let globVar = null;
function btnEdit() {
    globVar = this;
    selectValue = 'null';

    valueGroups.classList.remove('active');
    toggleInputGroups.innerHTML = '<i class="fa fa-plus-square-o" aria-hidden="true"></i>';

    createOptions();

    popupBackground[1].classList.add('active');
    editInpLink.focus();
    contextMenu.style.display = 'none';

    editInpTitle.value = this.closest('a').lastElementChild.innerHTML;
    editInpLink.value = this.closest('a').getAttribute('href');
    linkBg.value = this.closest('a').style.backgroundImage.slice(5, -2);
    addClearInput();

    editInpLink.addEventListener('input', checkingThumbnails);
    editInpLink.addEventListener('click', checkingThumbnails);

    function checkingThumbnails() {

        testerImage(addLogo(this.value), imageFound)

        function imageFound() {
            linkBg.value = ''
            addClearInput();
            globVar.closest('a').style.background = `${objSetting.bg} url(${addLogo(editInpLink.value)}) no-repeat center/contain`;
            repointElem(bookmarksWindow.querySelectorAll('.addLink'));
        }
        if (linkBg.value == '') {
            globVar.closest('a').style.background = '';
            repointElem(bookmarksWindow.querySelectorAll('.addLink'));
        }
    }

    delLinkImg.addEventListener('click', () => {
        linkBg.value = '';
        globVar.closest('a').style.background = '';
        repointElem(bookmarksWindow.querySelectorAll('.addLink'));
    });

    window.addEventListener('keydown', function () {
        if (event.keyCode == 13 && popupBackground[1].classList.contains('active')) {
            saveEdit();
        }
    })

    btnEditSave.addEventListener('click', saveEdit);
}



function saveEdit() {

    if (editInpLink.value != '') {
        globVar.closest('a').lastElementChild.innerHTML = editInpTitle.value;
        globVar.closest('a').setAttribute('href', createLink(checkURL(editInpLink.value)));

    }
    else {
        globVar.closest('a').lastElementChild.innerHTML = 'Поиск в Google';
        globVar.closest('a').setAttribute('href', 'https://www.google.com/');
        linkBg.value == '';
        globVar.closest('a').style.background = `${objSetting.bg} url(${'../graphics/google_logo.png'}) no-repeat center/contain`;
    }

    if (editInpTitle.value == '' && editInpLink.value != '') {
        globVar.closest('a').lastElementChild.innerHTML = editInpLink.value.match(/[A-Z0-9][A-Z0-9_-]*(\.[A-Z0-9][A-Z0-9_-]*)+/i)[0];
    }


    if (linkBg.value != '') {
        globVar.closest('a').classList.add('preloaded');

        testerImage(linkBg.value, imageFound);

        function imageFound() {
            globVar.closest('a').classList.remove('preloaded');
            globVar.closest('a').style.background = `${objSetting.bg} url(${linkBg.value}) no-repeat center/contain`;
            repointElem(bookmarksWindow.querySelectorAll('.addLink'));
        }
        setTimeout(() => {
            globVar.closest('a').classList.remove('preloaded');
        }, 5000);
    }

    changeSelectGroups(globVar, addObj(globVar.nextElementSibling.innerHTML, globVar.closest('a').href, globVar.closest('a').style.backgroundImage.slice(5, -2)))

    repointElem(bookmarksWindow.querySelectorAll('.addLink'));
    closePopup();
    findElem();
}

//=== ru: Функцыя перебора закладок en: Bookmark Iteration Functions ===\\
function repointElem(elemAll) {
    arr = [];

    for (const elem of elemAll) {
        arr.push(addObj(elem.textContent, elem.getAttribute('href'), elem.style.backgroundImage.slice(5, -2)));
    }
    saveLocal(document.querySelector('li.active').dataset.groupNumber, arr);
}

//=== ru: Создание элемента en: Item creation ===\\
function createElement(link, className, txt, func) {
    let elem = document.createElement('span');
    elem.classList.add(className);
    elem.innerHTML = txt;
    elem.addEventListener('click', function () {
        event.preventDefault();
        event.stopPropagation();
    })
    elem.addEventListener('click', func);
    link.appendChild(elem);
    return elem;
}

//=== ru: Создание вкладки группы en: Create group tab ===\\
function createLi(txt, groupNumber) {
    let li = document.createElement('li');
    let delGroups = document.createElement('div');
    delGroups.classList.add('del_groups');
    delGroups.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
    delGroups.addEventListener('click', delitGroups);

    li.innerHTML = txt;
    li.dataset.groupNumber = groupNumber;
    li.addEventListener('dblclick', renameGroups);
    li.addEventListener('contextmenu', renameGroups)
    li.appendChild(delGroups);
    menuGroups.appendChild(li);
    return li;
}

//=== ru: Удаление группы en: Group deletion ===\\
let thisRemoveElement = null;
function delitGroups() {
    contextMenu.style.display = 'none'
    popupBackground[2].classList.add('active')
    thisRemoveElement = this;
    event.stopPropagation();
    popupRemoveGroups.classList.add('active');
    popupRemoveGroups.querySelector('.btn_Yes_Popup').addEventListener('click', yesDeleteGroups);
    popupRemoveGroups.querySelector('.btn_No_Popup').addEventListener('click', () => {
        popupBackground[2].classList.remove('active')
    })
}
function yesDeleteGroups() {
    if (thisRemoveElement.parentNode.classList.contains('active')) {
        thisRemoveElement.parentNode.remove();
        localStorage.removeItem(thisRemoveElement.parentNode.dataset.groupNumber);
        menuGroups.querySelector('[data-group-number="id-0"]').classList.add('active');
        createBlock(getLocal('id-0'));

        let newObjGroups = getLocal('_localStorage_keyGroups');
        delete newObjGroups[thisRemoveElement.parentNode.dataset.groupNumber];
        saveLocal('_localStorage_keyGroups', newObjGroups);
        objGroups = getLocal('_localStorage_keyGroups');
    }
    else {
        thisRemoveElement.parentNode.remove();
        localStorage.removeItem(thisRemoveElement.parentNode.dataset.groupNumber);
        let newObjGroups = getLocal('_localStorage_keyGroups');
        delete newObjGroups[thisRemoveElement.parentNode.dataset.groupNumber];
        saveLocal('_localStorage_keyGroups', newObjGroups);
        objGroups = getLocal('_localStorage_keyGroups');
    }

    positinDefaultBtnAdd(addBookmark);
    sizeMenuGroups(menuGroups, parseInt(menuGroups.style.maxWidth) - 30);
    popupBackground[2].classList.remove('active')
    findElem()
}

//=== ru: Переименовать группу en: Rename Group ===\\
function renameGroups() {
    event.stopPropagation()
    event.preventDefault()
    this.removeEventListener('dblclick', renameGroups);
    this.removeEventListener('contextmenu', renameGroups);
    body.removeEventListener('contextmenu', funcContextMenu);

    valueGroups.classList.remove('active');
    toggleInputGroups.innerHTML = '<i class="fa fa-plus-square-o" aria-hidden="true"></i>';
    let inpRename = document.createElement('input');
    inpRename.style.width = '100%';
    let text = this.textContent;
    this.textContent = '';
    inpRename.value = text;
    this.appendChild(inpRename);
    inpRename.focus();

    window.addEventListener('keyup', () => {
        if (event.keyCode == 13 && this.contains(inpRename)) inpRename.blur();
    })

    inpRename.addEventListener('click', () => event.stopPropagation())
    inpRename.addEventListener('blur', () => {
        inpRename.value != '' ? this.innerHTML = inpRename.value : this.innerHTML = text;

        let newObjGroups = getLocal('_localStorage_keyGroups');
        newObjGroups[this.dataset.groupNumber] = inpRename.value;
        saveLocal('_localStorage_keyGroups', newObjGroups);

        let delGroups = document.createElement('div');
        delGroups.classList.add('del_groups');
        delGroups.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
        delGroups.addEventListener('click', delitGroups);
        this.appendChild(delGroups);
        findElem();
        this.addEventListener('dblclick', renameGroups);
        this.addEventListener('contextmenu', renameGroups);
        body.addEventListener('contextmenu', funcContextMenu);
    })

}

//=== ru: Сохранение и востановление закладок и настроек en: Saving and restoring bookmarks and settings ===\\
let objСopySetting = {};
downloadSave.addEventListener('click', () => {

    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) == '_localStorage_keyGroups' || localStorage.key(i) == '_localStorage_bg' || localStorage.key(i) == '_localStorage_setting' || /^id-\d+$/.test(localStorage.key(i))) {
            objСopySetting[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
        }
        //objСopySetting[localStorage.key(i)] = localStorage.getItem(localStorage.key(i))
    }
    downloadSave.href = 'data:application;charset=utf-8,' + encodeURIComponent(JSON.stringify(objСopySetting));
    let promtSave = prompt('Введите название файла', 'saveBookmarks');
    if (promtSave == null) promtSave = 'saveBookmarks';
    downloadSave.download = `${promtSave}.bookmarks`;
})

// let objСopySetting = {};
// downloadSave.addEventListener('click', () => {

//     for (let i = 0; i < localStorage.length; i++) {
//         if (localStorage.key(i) != '_googleDriveSinx') {
//             objСopySetting[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
//         }
//         //objСopySetting[localStorage.key(i)] = localStorage.getItem(localStorage.key(i))
//     }
//     downloadSave.href = 'data:application;charset=utf-8,' + encodeURIComponent(JSON.stringify(objСopySetting));
//     let promtSave = prompt('Введите название файла', 'saveBookmarks');
//     if (promtSave == null) promtSave = 'saveBookmarks';
//     downloadSave.download = `${promtSave}.bookmarks`;
// })

uploadSave.addEventListener('change', () => {
    let reader = new FileReader();
    reader.onload = () => {

        localStorage.clear();

        obj = JSON.parse(reader.result);
        for (const key in obj) {
            localStorage.setItem(key, obj[key]);
        }
    }
    reader.readAsText(uploadSave.files[0], "utf-8");

    location.reload();
})

//=== ru: Контекстное меню en: Context menu ===\\ 
body.addEventListener('contextmenu', funcContextMenu);
function funcContextMenu() {
    event.preventDefault();
    contextMenu.style.display = 'block';
    contextMenu.style.left = event.pageX + 'px';
    contextMenu.style.top = event.pageY + 'px';

    if (event.pageX > body.offsetWidth - contextMenu.offsetWidth) contextMenu.style.left = event.pageX - contextMenu.offsetWidth + 'px';
}

contextMenu.children[0].children[0].addEventListener('click', funcAddBookmark);
contextMenu.children[0].children[1].addEventListener('click', settingActive);
function settingActive() {
    popupBackground[3].classList.add('active');
    contextMenu.style.display = 'none';
    burgerSetting.innerHTML = '<i class="fa fa-window-close" aria-hidden="true"></i>';
}
body.addEventListener('click', () => contextMenu.style.display = 'none');

//=== ru: Сброс настроек en: Reset ===\\ 
btnDelitSetting.addEventListener('click', () => {
    localStorage.removeItem('_localStorage_setting');
    localStorage.removeItem('_localStorage_bg');
    localStorage.removeItem('_googleDriveSinx');
    location.reload();
})

let clearTimerDelete;
let timerDelete = document.getElementById('timer_delete');
let textDeleteEverything = document.querySelector('#delete_everything  p');
btnDeleteEverything.addEventListener('mousedown', deleteAllData);
btnDeleteEverything.addEventListener('touchstart', deleteAllData);
function deleteAllData() {
    //textDeleteEverything.style.color = '#000'
    textDeleteEverything.innerHTML = 'До полного удаление';
    timerDelete.innerHTML = 15;
    clearInterval(clearTimerDelete);
    clearTimerDelete = setInterval(() => {
        --timerDelete.innerHTML;
        if (timerDelete.innerHTML <= 0) {
            clearInterval(clearTimerDelete);
            localStorage.clear();
            location.reload();
        }
    }, 1000);
}

btnDeleteEverything.addEventListener('mousedown', () => window.addEventListener('mouseup', stopDeleteAllData));
btnDeleteEverything.addEventListener('touchend', () => window.addEventListener('touchend', stopDeleteAllData));

function stopDeleteAllData() {
    if (event.target.id == 'btn_delete_everything' || event.target.id != 'btn_delete_everything') {
        clearInterval(clearTimerDelete);
        // textDeleteEverything.style.color = ''
        textDeleteEverything.innerHTML = 'Удалить всё';
        timerDelete.innerHTML = '';
    }
}

// //=== ru: Мобильная версия en: mobile version ===\\ 
for (const elem of mode) {
    elem.addEventListener('click', function () {
        if (this.dataset.view == 'list') {
            [...bookmarksWindow.querySelectorAll('.addLink')].forEach((elem) => {
                elem.style.setProperty("margin", "5px 0", "important");
                elem.style.setProperty('width', '100%', 'important');
            })
        }
        else {
            [...bookmarksWindow.querySelectorAll('.addLink')].forEach(elem => {
                elem.style.setProperty("margin", "5px", "important");
                elem.style.setProperty('width', 'calc((100% - 40px) /4)', 'important');
            })
        }
    })
}

// //=== ru: поиск по закладкам en: bookmark search ===\\ 
let arrSearch = [];
bookmarkSearch.addEventListener('input', () => {
    [...bookmarksWindow.querySelectorAll('a')].forEach(elem => elem.remove());
    positinDefaultBtnAdd(addBookmark);
    arrSearch = [];
    searchResult.innerHTML = 0;
    if (bookmarkSearch.value != '') {
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) != '_googleDriveSinx' && localStorage.key(i) != '_localStorage_keyGroups' && localStorage.key(i) != '_localStorage_bg' && localStorage.key(i) != '_localStorage_setting') {
                let strToArr = JSON.parse(localStorage.getItem(localStorage.key(i)));
                for (let j = 0; j < strToArr.length; j++) {
                    if (strToArr[j].name.toLowerCase().startsWith(bookmarkSearch.value.toLowerCase())) {
                        arrSearch.push(strToArr[j]);
                        searchResult.innerHTML = arrSearch.length;
                        createBlock(arrSearch);
                        for (const elem of document.querySelectorAll('.btnEditing ')) {
                            elem.style.display = 'none';
                        }
                        for (const elem of document.querySelectorAll('.btnDelete')) {
                            elem.style.display = 'none';
                        }
                    }
                }
            }
        }
    }
    else if (bookmarkSearch.value == '') {
        createBlock(getLocal(menuGroups.querySelector('li.active').dataset.groupNumber));
        positinDefaultBtnAdd(addBookmark);
    }
})

//=== ru: Создание тэга option en: tag creation option ===\\
function createOptions() {
    selectGroups.innerHTML = '<option selected disabled>Выбрать группу</option>';
    for (const elem of menuGroups.children) {
        if (!elem.classList.contains('active')) {
            let option = document.createElement('option');
            option.innerHTML = elem.innerHTML;
            option.value = elem.dataset.groupNumber;
            selectGroups.appendChild(option);
        }
    }
}

selectGroups.addEventListener('change', () => selectValue = selectGroups.value);

//=== ru: Перемещение закладки en: bookmark moving ===\\
function changeSelectGroups(th, data) {
    for (let i = 0; i < localStorage.length; i++) {
        if (selectValue == localStorage.key(i)) {
            let arr = getLocal(selectValue);
            arr.push(data);
            saveLocal(selectValue, arr);
            th.parentNode.remove();
            positinDefaultBtnAdd(addBookmark);
        }
    }
}


document.getElementById('error_correction').addEventListener('click', errorCorrection);

function errorCorrection() {
    let fixObj = {};
    let fixKeyGroups = {}
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) == '_localStorage_bg' || localStorage.key(i) == '_localStorage_setting' || /^id-\d+$/.test(localStorage.key(i))) {
            fixObj[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
        }
    }

    localStorage.clear();

    for (const key in fixObj) {
        localStorage.setItem(key, fixObj[key]);
        if (key != 'id-0' && /^id-\d+$/.test(key)) {
            fixKeyGroups[key] = 'Изменить имя';
        }
    }


    let conf = confirm('Непредвиденная ошибка');
    if (conf) {
        saveLocal('_localStorage_keyGroups', fixKeyGroups);
        location.reload();
    }
}

//=== ru: Закрытие окна приветствия en: closing the welcome window ===\\
closeWelcomePopup.addEventListener('click', () => {
    welcomePopupBackground.style.display = 'none';
    objSetting.welcome = false
    saveLocal('_localStorage_setting', objSetting);
})

welcomePopupBackground.addEventListener('click', () => {
    welcomePopupBackground.style.display = 'none';
    objSetting.welcome = false
    saveLocal('_localStorage_setting', objSetting);
})


// let script = document.createElement('script');
// script.src = "https://apis.google.com/js/api.js";

// document.body.append(script);
// script.onload = ()=>{
//     handleClientLoad()
// }



// script.onreadystatechange = ()=>{
//     if (this.readyState === 'complete') this.onload()
// }