// Http Helper
import helpHttp from '../helpers/helpHttp'

// Custom components
import Form from './Form'
import SongDetails from './SongDetails'

// Mui
import { Grid } from './muiR'

// SnackBar API
import { useSnackbar } from 'notistack'

// React
import { useState } from 'react'

export default function SongSearcher () {
  const [songInfo, setSongInfo] = useState(null)
  const [loading, setLoading] = useState(false)
  const { enqueueSnackbar } = useSnackbar()

  const addError = (error) => {
    enqueueSnackbar(error, { variant: 'error' })
  }

  const http = helpHttp()

  const httpRequest = ({ name, song }) => {
    setLoading(true)
    const credentials = btoa(process.env.SPOTIFY)
    let accesToken = ''
    let songName = ''
    let artistName = ''
    let artistImage = ''
    let artistFeat = false
    let artistDesc = ''

    // Peticion http para obtener token de la api de spotify
    http('POST', 'https://accounts.spotify.com/api/token', {
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials'
    }).then(res => {
      accesToken = res.access_token
      // Peticion http para obtener informacion del artista y la cancion
      http('GET', `https://api.spotify.com/v1/search?q=${song}+artist=${name}&type=track`, { headers: { Authorization: `Bearer ${accesToken}` } })
        .then(async (res2) => {
          let artistIndex = 0
          if (res2.tracks.items[0]) {
            // Verificacion de que la cancion sea la correcta
            if (!res2.tracks.items[0] || res2.tracks.items[0].name.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').substring(0, song.length) !== song.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) {
              addError('Song not found')
              setLoading(false)
              return
            }

            // Verificacion de que el artista esta en la cancion obtenida
            if (!res2.tracks.items[0].artists[0].name || res2.tracks.items[0].artists[0].name.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') !== name.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) {
              // Verificacion en caso de que el artista este en ft
              let verifNotFound = true
              res2.tracks.items[0].artists.forEach((element, index) => {
                if (element.name.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') === name.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) {
                  verifNotFound = false
                  artistFeat = true
                  artistIndex = index
                }
              })

              if (verifNotFound) {
                addError('Artist not found')
                setLoading(false)
                return
              }
            }

            songName = res2.tracks.items[0].name
            artistName = res2.tracks.items[0].artists[artistIndex].name

            // Se obtiene la imagen del artista
            await http('GET', res2.tracks.items[0].artists[artistIndex].href, { headers: { Authorization: `Bearer ${accesToken}` } })
              .then(res3 => {
                artistImage = res3.images[0].url
              })

            // Peticion http a la api de last.fm para obtener la descripcion del artista
            await http('GET', `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=${process.env.LASTFM}&format=json`)
              .then(res => {
                artistDesc = res.artist.bio.content
                console.log(res)
              })

            setSongInfo({ songName, artistName, artistImage, artistDesc, artistFeat })

            setLoading(false)
          } else {
            addError('Song not found')
            setLoading(false)
          }
        })
    }
    )
  }

  return (
    <Grid container spacing={2} mt={1} columns={{ xs: 2, md: 4 }}>
      <Grid item md={1} xs={2}>
        <Form httpRequest={httpRequest} addError={addError} />
      </Grid>
      <Grid item md={3} xs={2}>
        <SongDetails loading={loading} songInfo={songInfo} />
      </Grid>
    </Grid>
  )
}
