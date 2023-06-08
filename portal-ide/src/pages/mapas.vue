<template>
 
    <div id="map"></div>
 
</template>

<script>
import { defineComponent } from 'vue'

import Map from 'ol/Map.js'
import OSM from 'ol/source/OSM.js'
import TileLayer from 'ol/layer/Tile.js'
import View from 'ol/View.js'

export default defineComponent({

  mounted () { 
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        projection: 'EPSG:4326',
        center: [-82.36, 23.11],
        zoom: 12.5,
      })
    })
  }

})
</script>
<style lang="scss">
@import url('node_modules/ol/ol.css');
#map {
  height: 571px;
  width: 100%; /* Ancho del contenedor del mapa */
  max-width: 100%; /* Ancho máximo del contenedor del mapa */
  overflow: hidden; /* Oculta cualquier contenido que se salga del contenedor */
  position: relative; /* Posición relativa para los elementos internos */
}
</style>