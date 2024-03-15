import { defineStore } from "pinia";

export const useMainStore = defineStore("main", () => {
  /** Liste des playlists */
  const playlists = ref([]);
  /** Liste des chansons jouées récemment */
  const recentlyPlayed = ref([]);
  /** Est-on en train de lire l'audio ? */
  const isPlaying = ref(false);
  /** Est-on en train de changer de chanson ? */
  const changingTrack = ref(false);
  /** La piste en cours */
  const nowTrack = ref(null);
  /** La playlist en cours */
  const nowPlaylist = ref(null);
  /** La couverture est-elle en grand ? */
  const isCoverArtBig = ref(true);
  /** Objet <audio> */
  const audio = ref(null);
  /** Volume de l'audio */
  const volume = ref(100);
  /**
   * Modifie l'état de lecture
   */
  function togglePlay() {
    isPlaying.value = !isPlaying.value;
    if (isPlaying.value) {
      audio.value.play();
    } else {
      audio.value.pause();
    }
  }

  /**
   * Modifie la piste en cours
   */
  function setNowTrack(musique) {
    nowTrack.value = {
      album: musique.album,
      artist: musique.artist,
      cover: musique.album.cover,
    };
  }

  /**
   * Modifie la playlist en cours
   */
  function setNowPlaylist(newValue) {}

  /**
   * Lance la lecture d'une piste
   */
  async function playTrack(id) {
    changeSong();
    const musique = await getTrackById(id);
    console.log(musique);
    audio.value = await new Audio(musique.preview);
    setNowTrack(musique);
    togglePlay();
    changeSong();
  }

  /**
   * Passe en état de changement de piste
   */
  function changeSong() {
    changingTrack.value = !changingTrack.value;
  }

  async function loadPlaylists() {
    if (playlists.value.length === 0) {
      const response = await fetch(
        "https://api.alsacreations.net/items/playlists?fields=*,tracks.tracks_id"
      );
      const jsonResponse = await response.json();
      playlists.value = jsonResponse.data;
    }
  }

  async function loadRecentlyPlayed() {
    if (recentlyPlayed.value.length === 0) {
      const response = await fetch(
        "https://api.alsacreations.net/items/tracks"
      );
      const jsonResponse = await response.json();

      recentlyPlayed.value = jsonResponse.data;
    }
  }

  async function getTrackById(id) {
    return fetch(
      `https://corsproxy.io/?${encodeURIComponent(
        `http://api.deezer.com/track/${id}`
      )}`
    ).then((response) => response.json());
  }

  return {
    playlists,
    recentlyPlayed,
    isPlaying,
    changingTrack,
    nowTrack,
    nowPlaylist,
    isCoverArtBig,
    audio,
    volume,
    togglePlay,
    setNowTrack,
    setNowPlaylist,
    playTrack,
    changeSong,
    loadPlaylists,
    loadRecentlyPlayed,
    getTrackById,
  };
});
