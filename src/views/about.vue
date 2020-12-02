<template>
  <x-x :msg="msg"></x-x>
  <color-button :name="buttonName" :to-path="butttonTopath"></color-button>
</template>

<script>
import {reactive, ref, toRefs} from 'vue'
import xX from '@/components/test'
import ColorButton from "@/components/ColorButton";

export default {
  setup() {
    let msg = ref('null')
    let buttonName = ref('按钮')
    let butttonTopath = ref('/')
    return {msg, buttonName, butttonTopath}
  },

  name: "about",
  components: {
    ColorButton,
    xX
  }
}
</script>

<style scoped>

</style>