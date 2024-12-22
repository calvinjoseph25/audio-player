// Array of songs with details
const songs = [
    { title: "Song 1", artist: "Artist 1", file: "song1.mp3" },
    { title: "Song 2", artist: "Artist 2", file: "song2.mp3" },
    { title: "Song 3", artist: "Artist 3", file: "song3.mp3" },
  ];
  
  let currentSongIndex = 0;
  const audio = document.getElementById("audio");
  const songTitle = document.getElementById("song-title");
  const artist = document.getElementById("artist");
  const playBtn = document.getElementById("play");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  
  // Load the first song
  function loadSong(song) {
    songTitle.textContent = song.title;
    artist.textContent = `Artist: ${song.artist}`;
    audio.src = song.file;
  }
  
  // Play or pause the song
  function togglePlay() {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = "⏸️";
    } else {
      audio.pause();
      playBtn.textContent = "▶️";
    }
  }
  
  // Play the previous song
  function prevSong() {
    currentSongIndex =
      currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1;
    loadSong(songs[currentSongIndex]);
    audio.play();
  }
  
  // Play the next song
  function nextSong() {
    currentSongIndex =
      currentSongIndex === songs.length - 1 ? 0 : currentSongIndex + 1;
    loadSong(songs[currentSongIndex]);
    audio.play();
  }
  
  // Event Listeners
  playBtn.addEventListener("click", togglePlay);
  prevBtn.addEventListener("click", prevSong);
  nextBtn.addEventListener("click", nextSong);
  
  // Initialize
  loadSong(songs[currentSongIndex]);
  