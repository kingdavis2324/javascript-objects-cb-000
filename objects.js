var playlist = {
  "Gucci Mane" : "Lemonade"
};

function updatePlaylist(playlist, artistName, songTitle){
<<<<<<< HEAD
    playlist[artistName] = songTitle
  
    return playlist
}

updatePlaylist(playlist, artistName,songTitle)

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  
  return playlist
=======
  return Object.assign({},
  playlist, { [artistName]: songTitle})
}

updatePlaylist(playlist)

function removeFromPlaylist(playlist, artistName){
  
>>>>>>> 3b0882fcf6d854484cd798d8b8f38d224524fd37
}