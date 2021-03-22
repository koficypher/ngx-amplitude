 // Song Interface
 export interface NgxAmpSong {
   name: string; // song title
   artist?: string; // song artist name
   album?: string; // song album name
   url?: string; // song url or file location
   cover_art_url?: string; // song cover art url or cover art file location
   made_up_key?: string; // some made u key
   visualization?: string; // visualization key
   time_callbacks?: {};
 }

 // Init config interface
export interface NgxAmpConfig {
   playback_speed?: number; // Determines how fast the audio should play back. This should one of the following values?: 1.0, 1.5, 2.0
   callbacks?: {}; // An object that contains the callbacks and functions AmplitudeJS should bind to.
   songs?: NgxAmpSong[];  // An array of song objects used to define how AmplitudeJS is being used.
   playlists?: {}; // An object that contains playlist objects used by AmplitudeJS.
   start_song?: number; // An object that contains playlist objects used by AmplitudeJS
   starting_playlist?: string;  // The key of the playlist AmplitudeJS should start with.
   starting_playlist_song?: number; // The index of the song in the playlist AmplitudeJS should start with.
   shuffle_on?: boolean; // Determines if we should start with the shuffle on.
   default_album_art?: string; // URL to the image to be used for default album art.
   default_playlist_art?: string; // URL to the image to be used as playlist artwork by default.
   debug?: boolean; // Determines if we should output any debug notes. Helpful for debugging
   volume?: number; // A value between 0 and 1.0 for how much volume should be added
   volume_increment?: number; // How much the volume should increment each time the volume up button is pressed.
   volume_decrement?: number; // How much the volume should decrement each time the volume down button is pressed.
   soundcloud_client?: string; // Client API for SoundCloud. Used if using a SoundCloud link.
   soundcloud_use_art?: boolean; // Determines if we should use the album art from SoundCloud instead of a URL provided.
   bindings?: {}; // Contains all of the key bindings and what method they should run when pressed.
   continue_next?: boolean; // When a song is finished, determines if we should continue to the next song.
   delay?: number; // The number of milliseconds to delay between songs.
   visualizations?: {}; // The key and object store of all Web Audio API Visualizations that should be registered with AmplitudeJS.
   waveforms?: {
     sample_rate?: number; // The amount of samples we should do for each song when generating a waveform. The higher the number, the longer it will take, but more defined the waveform will be
   };
   preload?: string | null; // Can be set to "auto" which is default and loads the entire audio, "metadata" which only preloads the metadata only, or "none" which preloads nothing
  }
