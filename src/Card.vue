<template>
  <div
    @click.stop="$emit('click', $event)"
    @keydown.space.stop="$emit('click', $event)"
    @keydown.enter.stop="$emit('click', $event)"
    tabindex="0"
    role="button"
    :aria-label="'test'"
    class="media-card relative"
  >
    <div
      class="absolute top-0 h-3 bg-red-500 z-10"
    ></div>

    <!--Gradient overlay-->
    <div class="absolute top-0 bottom-0 left-0 right-0 overlay">
      <div class="flex flex-row h-full">
        <div class="p-2 text-2xl self-end font-bold z-10">
          Item
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
