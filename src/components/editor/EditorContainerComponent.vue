<template>
  <div class="flex flex-col">
    <button @click="store.addObject" class="top-0 left-9">ADD</button>
    <button @click="store.removeObject" class="top-0 left-11">REMOVE</button>
    <EditorComponent />
  </div>
</template>


<script setup>
import { useObjectStore } from "../../../store/store";
const store = useObjectStore();
</script>