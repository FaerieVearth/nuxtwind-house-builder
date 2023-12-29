<template>
  <TresCanvas preset="realistic">
    <TresPerspectiveCamera :args="[45, 10, 0.1, 1000]" :position="[5, 5, 5]"/>
    <OrbitControls :target="new Vector3(objectCenter, 0, 0)" :enable-damping="true" :damping-factor="0.05" :auto-rotate="false"
      :enable-pan="false" :enable-zoom="true" :enable-rotate="true" />
    <Suspense>
      <ObjectLayer v-for="obj in objts" :position="obj.position" @click="(intersection, pointerEvent) => console.log(objts.indexOf(obj))"/>
    </Suspense>
    <TresAmbientLight :args="['#ffffff', 1]" />
  </TresCanvas>
</template>

<script setup>
import { useObjectStore } from "../../../store/store";
import { Vector3 } from 'three';
import ObjectLayer from "./ObjectLayer.vue";



const store = useObjectStore();
const objts = ref(store.objects);

const objectCenter = computed(() => {
  return (objts.value.length + 1) / 2;
});

const cameraPosition = computed(() => {
  return new Vector3(objectCenter.value, 0, 0);
});

</script>
