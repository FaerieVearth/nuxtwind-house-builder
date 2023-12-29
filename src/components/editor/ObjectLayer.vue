<template>
  <primitive :object="meshWithMaterial" />
</template>

<script setup>
import { Mesh, BoxGeometry, MeshBasicMaterial, TextureLoader } from 'three';
  let props = defineProps({
    position: {
      type: Array,
      required: true
    }
  });

  let [x , y, z] = props.position;

  // Create a box geometry and a basic material
  const geometry = new BoxGeometry(1, 1, 1);
  geometry.translate(x, y, z);
  const texture = new TextureLoader().load('https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?cs=srgb&dl=pexels-fwstudio-129733.jpg&fm=jpg');
  const material = new MeshBasicMaterial({ map: texture, toneMapped: false });
  material.needsUpdate = true;

  // Create a mesh with the geometry and material
  const meshWithMaterial = new Mesh(geometry, material);
</script>
