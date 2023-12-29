<template>
  <div class="flex flex-col">
    <button @click="store.addObject" class="top-0 left-9">ADD</button>
    <button @click="store.removeObject" class="top-0 left-11">REMOVE</button>
    <EditorComponent class="h-64 w-64 z-0"/>
  </div>
</template>


<script setup>
import { useObjectStore } from "../../../store/store";
const store = useObjectStore();
</script>