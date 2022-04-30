<template>
  <div class="app-contact">
    <div class="header">
      <div class="text">
        We connect women founders and mentors around the world. Let us help each
        other succeed!
      </div>
      <div class="image">
        <img
          :src="require('@/assets/contact.jpg')"
          alt=""
          :srcset="`${require('@/assets/contact.jpg')} 1x, ${require('@/assets/contact@2x.jpg')} 2x`"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppContact",
};
</script>

<style lang="scss" scoped>
.app-contact {
}
</style>
