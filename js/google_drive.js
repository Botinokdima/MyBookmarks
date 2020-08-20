let authorizeButton = document.getElementById('authorize_button');
let authorizeButtonGoogle = document.getElementById('authorize_button_google');
let signoutButton = document.getElementById('signout_button');
let signoutButtonGoogle = document.getElementById('signout_button_google');
let bookmarkSyncStatus = document.getElementById('bookmark_sync_status');
let saveDisk = document.getElementById('save_disk');
let downloadDisk = document.getElementById('download_disk');
let preloadedSave = document.getElementById('preloaded_save');
let infoSave = document.getElementById('info_save');
let checkboxSinx = document.getElementById('checkbox_sinx');
let btnGoogleDrive = document.getElementById('block_btn_google-drive').children;

let reboot = false

//=== ru: Синхронизаця при заходе на страницу en: Synchronization when entering the page ===\\
checkboxSinx.addEventListener('change', () => {
    if (checkboxSinx.checked) {
        saveLocal('_googleDriveSinx', true);
        bookmarkSyncStatus.style.display = 'block';
        bookmarkSyncStatus.style.background = 'url(./graphics/sync.png) no-repeat center/cover';
    }
    else {
        saveLocal('_googleDriveSinx', false);
        bookmarkSyncStatus.style.display = 'block';
        bookmarkSyncStatus.style.background = 'url(./graphics/sync_dis.png) no-repeat center/cover';
    }
})

let clearDownloadDisk;
bookmarkSyncStatus.addEventListener('click', saveGoogleDrive);
bookmarkSyncStatus.addEventListener('mousedown', () => {
    bookmarkSyncStatus.classList.add('save');
    bookmarkSyncStatus.addEventListener('mouseup', () => {
        clearTimeout(clearDownloadDisk);
    })
    clearDownloadDisk = setTimeout(() => {
        reboot = true;
        findElem2('readFile(elem.id)');
    }, 3000);
});
function saveGoogleDrive() {
    bookmarkSyncStatus.removeEventListener('click', saveGoogleDrive);
    bookmarkSyncStatus.classList.add('save');
    findElem();
}

getLocal('_googleDriveSinx') ? checkboxSinx.checked = true : checkboxSinx.checked = false;

//=== ru: При загрузке вызывается для загрузки библиотеки auth2 и клиентской библиотеки API en: On load, called to load the auth2 library and API client library ===\\
function handleClientLoad() { gapi.load('client:auth2', initClient); }

//=== ru: Инициализирует клиентскую библиотеку API и настраивает прослушиватели состояния входа en: Initializes the API client library and sets up sign-in state listeners ===\\
function initClient() {
    gapi.client.init({
        apiKey: 'AIzaSyCf3-jCgpOaxwT0TE4sTQAliEXvfpglP5g',
        clientId: '776598491359-il3km0gng2fo1dp7src2f9r03sdr4qon.apps.googleusercontent.com',
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
        scope: 'https://www.googleapis.com/auth/drive.file'
        // https://www.googleapis.com/auth/drive.metadata.readonly
    }).then(() => {

        //=== ru: Прослушайте изменения состояния входа en: Listen for sign-in state changes ===\\
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
        //=== ru: Обработка начального состояния входа en: Handle the initial sign-in state ===\\
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        authorizeButtonGoogle.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
        signoutButtonGoogle.onclick = handleSignoutClick;
    });
    // , error => console.error(error)
}

//=== ru: Вызывается при изменении статуса входа в систему, чтобы соответствующим образом обновить пользовательский интерфейс. После входа API вызывается en: Called when the signed in status changes, to update the UI appropriately. After a sign-in, the API is called ===\\
function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        signoutButtonGoogle.setAttribute('title', `Выход из аккаунта ${gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getEmail()}`);
        findElem2("downloadDisk.style.display = 'block'");
        authorizeButton.style.display = 'none';
        authorizeButtonGoogle.style.display = 'none';
        signoutButtonGoogle.style.display = 'block';
        signoutButtonGoogle.style.background = `url(${gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getImageUrl()}) no-repeat center/contain`;
        if (!getLocal('_googleDriveSinx')) {
            bookmarkSyncStatus.style.display = 'block';
            bookmarkSyncStatus.style.background = 'url(./graphics/sync_dis.png) no-repeat center/cover';
        }
        else {
            bookmarkSyncStatus.style.display = 'block';
            bookmarkSyncStatus.style.background = 'url(./graphics/sync.png) no-repeat center/cover';
        }
        for (let i = 1; i < btnGoogleDrive.length; i++)if (btnGoogleDrive[i].id != 'download_disk') btnGoogleDrive[i].style.display = 'block';

    } else {
        authorizeButton.style.display = 'block';
        authorizeButtonGoogle.style.display = 'block';
        signoutButtonGoogle.style.display = 'none';
        bookmarkSyncStatus.style.display = 'none'
        for (let i = 1; i < btnGoogleDrive.length; i++)btnGoogleDrive[i].style.display = 'none';
        infoSave.innerHTML = '';
        localStorage.removeItem('_googleDriveSinx');
        checkboxSinx.checked = false;
    }
}

//=== ru: Войдите в систему после нажатия кнопки en: Sign in the user upon button click ===\\
function handleAuthClick(event) { gapi.auth2.getAuthInstance().signIn() }

//=== ru: Выйти из пользователя после нажатия кнопки en: Sign out the user upon button click ===\\
function handleSignoutClick(event) { gapi.auth2.getAuthInstance().signOut() }

//=== ru: Сохранить на google drive en: Save to google drive ===\\
saveDisk.addEventListener('click', () => {
    bookmarkSyncStatus.classList.add('save');
    saveDisk.disabled = true;
    findElem();
})

//=== ru: Загрузить с google drive en: Download from google drive ===\\
downloadDisk.addEventListener('click', () => {
    reboot = true
    findElem2('readFile(elem.id)');
})

//=== ru: Удаление с google drive en: Removing from google drive ===\\
function deleteFile(fileId) {
    var request = gapi.client.drive.files.delete({
        'fileId': fileId
    });
    request.execute(resp => { });
}

//=== ru: Создание файла на google drive en: Creating a file on google drive ===\\
function createFile(name, text) {
    preloadedSave.style.display = 'block'
    infoSave.innerHTML = 'Сохраняем';

    const boundary = '-------314159265358979323846';
    const delimiter = "\r\n--" + boundary + "\r\n";
    const close_delim = "\r\n--" + boundary + "--";

    var metadata = {
        'name': name,
        'mimeType': 'text/plain\r\n\r\n',
    };

    var multipartRequestBody = delimiter + 'Content-Type: application/json\r\n\r\n' + JSON.stringify(metadata) +
        delimiter + 'Content-Type: ' + 'text/plain\r\n\r\n' + text + close_delim;

    gapi.client.request({
        'path': '/upload/drive/v3/files/',
        'method': 'POST',
        'params': {
            'uploadType': 'multipart'
        },
        'headers': {
            'Content-Type': 'multipart/related; boundary="' + boundary + '"'
        },
        'body': multipartRequestBody
    }).then(response => {
        preloadedSave.style.display = '';
        infoSave.style.color = 'green';
        infoSave.innerHTML = 'Данные сохранены';
        setTimeout(() => {
            infoSave.innerHTML = '';
            infoSave.style.color = '';
        }, 2000)
        saveDisk.disabled = false;
        bookmarkSyncStatus.addEventListener('click', saveGoogleDrive);
        bookmarkSyncStatus.classList.remove('save');
        // console.log(response);
        console.log('Данные сохранены');
    }, error => {
        setTimeout(() => {
            preloadedSave.style.display = '';
            infoSave.style.color = 'red';
            infoSave.innerHTML = 'Ошибка синхронизации с Google drive';
            saveDisk.disabled = false;
            bookmarkSyncStatus.addEventListener('click', saveGoogleDrive);
            bookmarkSyncStatus.classList.remove('save');
            console.log('Ошибка перезагрузите страницу и попытайтесь снова');
        }, 2000)
    });
}

//=== ru: Записать в локальное хранилище данные с google drive en: Write data to google drive to local storage ===\\
function readFile(fileId) {
    var request = gapi.client.drive.files.get({
        fileId: fileId,
        alt: 'media'
    })
    request.then(response => {

        let localKey = localStorage.getItem('_googleDriveSinx')
        localStorage.clear()
        localStorage.setItem('_googleDriveSinx', localKey)

        obj = JSON.parse(response.body)
        for (const key in obj) {
            localStorage.setItem(key, obj[key])
        }
        createBlock(getLocal('id-0'));
        positinDefaultBtnAdd(addBookmark);

        menuGroups.innerHTML = '<li class="active" data-group-number="id-0">Главная</li>'

        objGroups = getLocal('_localStorage_keyGroups')
        for (const key in getLocal('_localStorage_keyGroups')) {
            createLi(getLocal('_localStorage_keyGroups')[key], key);
        }

        sizeMenuGroups(menuGroups, parseInt(menuGroups.style.maxWidth) - 30)
        body.style.background = `url(${getLocal('_localStorage_bg')}) no-repeat fixed center/cover`;

        if (reboot) location.reload()
    }, error => console.log('Вход выполнен'))
    // console.log(error)
}

//=== ru: Сохранить в google drive en: Save to google drive ===\\
function findElem() {
    gapi.client.drive.files.list({
        'pageSize': 100,
        'fields': "nextPageToken, files(id, name)",
    }).then(response => {
        for (const elem of response.result.files) {
            if (elem.name == 'backup.bookmarks') {
                deleteFile(elem.id)
                // console.log(elem.id);
            }
        }

        let objСopySetting = {}
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) == '_localStorage_keyGroups' || localStorage.key(i) == '_localStorage_bg' || localStorage.key(i) == '_localStorage_setting' || /^id-\d+$/.test(localStorage.key(i))) {
                objСopySetting[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
            }
            // if (localStorage.key(i) != '_googleDriveSinx') {
            //     objСopySetting[localStorage.key(i)] = localStorage.getItem(localStorage.key(i))
            // }
        }
        bookmarkSyncStatus.classList.add('save');
        createFile('backup.bookmarks', JSON.stringify(objСopySetting))
        downloadDisk.style.display = 'block';
    });
}

function findElem2(funcEval) {
    gapi.client.drive.files.list({
        'pageSize': 100,
        'fields': "nextPageToken, files(id, name)"
    }).then(response => {
        for (const elem of response.result.files) {
            if (elem.name == 'backup.bookmarks') {
                eval(funcEval);

                if (getLocal('_googleDriveSinx')) {
                    readFile(elem.id)
                }
            }
        };
    });
}


