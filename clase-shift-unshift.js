// Methods that modify the original array (Mutability)

// shift()

const colors = ['red', 'blue', 'black']
const removedColors = colors.shift()

console.log(colors);
console.log(removedColors);

// unshift()

const newColors = colors.unshift('pink', 'purple')

console.log(colors);
console.log(newColors);

// Exercise: Managing a Playlist

// function managePlaylist (playlist, newSong) {
//     playlist.shift()
//     playlist.unshift(newSong)

//     return playlist
// }

// const initialPlaylist = ['Demasiado', '505', 'passionfruit', 'smoking at the window', 'back on 74']
// const newSongToAdd = 'Casio'

// const updatedPlaylist = managePlaylist(initialPlaylist, newSongToAdd)


// console.log('New song to add: ', newSongToAdd);
// console.log('Updated playlist: ', updatedPlaylist);

function managePlaylist (playlist, newSong) {
    playlist.shift()
    playlist.unshift(newSong)
}

const initialPlaylist = ['Locos', 'vida', 'eco', 'vicio']

const newSongToAdd = '505'

const updatedPlaylist = managePlaylist(initialPlaylist, newSongToAdd)

console.log(initialPlaylist);
console.log(newSongToAdd);