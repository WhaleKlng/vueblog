<template>
  <div class="cont">
    <slid-nav></slid-nav>
  </div>

</template>

<script>
import SlidNav from "@/components/SlidNav";

export default {
  name: "index",
  components: {
    SlidNav,
  }
}
</script>

<style scoped>
.cont{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>