<template>
  <q-page>
    <q-carousel
      height="571px"
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="../statics/bahia/1.jpg" />
      <q-carousel-slide :name="2" img-src="../statics/bahia/2.jpg" />
      <q-carousel-slide :name="3" img-src="../statics/bahia/3.jpg" />
      <q-carousel-slide :name="4" img-src="../statics/bahia/4.jpg" />
      <q-carousel-slide :name="5" img-src="../statics/bahia/5.jpg" />
      <q-carousel-slide :name="6" img-src="../statics/bahia/6.jpg" />
      <q-carousel-slide :name="7" img-src="../statics/bahia/7.jpg" />
      <q-carousel-slide :name="8" img-src="../statics/bahia/8.jpg" />
      <q-carousel-slide :name="9" img-src="../statics/bahia/9.jpg" />
      <q-carousel-slide :name="10" img-src="../statics/bahia/10.jpg" />
      <q-carousel-slide :name="11" img-src="../statics/bahia/11.jpg" />
    </q-carousel>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
})
</script>
