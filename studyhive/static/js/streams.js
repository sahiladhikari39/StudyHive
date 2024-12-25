const APP_ID = '21dff23eba54435587405ae622d99e72'
const CHANNEL = 'main'
const TOKEN = '007eJxTYBAJv3M3Yv3Xi7qz7RZ5qLH8+HiwsTVsgm+Rx/TQx6asCyMVGIwMU9LSjIxTkxJNTUyMTU0tzE0MTBNTzYyMUiwtU82NBPdkpzcEMjLwdl5lYmSAQBCfhSE3MTOPgQEAQ6Qerw=='

let UID;

const client = AgoraRTC.createClient({mode:'rtc', codec:'vp8'})

let localTracks = []
let remoteUsers = {}

let joinAndDisplayLocalStream = async () => {
    UID = await client.join(APP_ID, CHANNEL, TOKEN, null)

    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()

    let player = `<div class="video-container" id="user-container-${UID}">
                    <div class="username-wrapper"><span class="user-name">My Name</span></div>
                    <div class="video-player" id="user-${UID}"></div>
                </div>`

    document.getElementById('video-streams').insertAdjacentHTML('beforeend', player)
    localTracks[1].play(`user-${UID}`)
    await client.publish([localTracks[0], localTracks[1]])
    
}
joinAndDisplayLocalStream()