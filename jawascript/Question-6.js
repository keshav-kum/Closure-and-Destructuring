// Task 1: Create Playist
function createPlaylist(playlistName) {
    let playlist = [];

    return {
        addSong: function (songName, artist) {
            playlist.push({ songName, artist })
        },

        listSongs: function () {
            if (playlist.length === 0) {
                console.log(`${playlistName} playlist is empty.`)
            } else {
                console.log(`${playlistName} Playlist:${playlist.map(song => `${song.songName} by ${song.artist}`).join(', ')}`)
            }
        }

    };
}

// Task 2: Add Song to Playlist

function addSong (playlist, songName, artist){
    playlist.addSong(songName,artist)
}

// Task 3: List Songs in Playlist

function listSongs(playlist){
    playlist.listSongs();
}

const myPlaylist = createPlaylist('My favorites');

addSong(myPlaylist, "song1", "Artist1");
addSong(myPlaylist, "Song2", "Artist2");
addSong(myPlaylist, "song3", "Artist3");

listSongs(myPlaylist);
