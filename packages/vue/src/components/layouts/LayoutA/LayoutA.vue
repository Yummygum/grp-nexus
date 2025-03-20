<template>
  <article>
    <section class="storybook-page">
      <h2>This is a layout</h2>
      <p>
        This is a layout!

        <Button>
          Here you go!
        </Button>
      </p>
      
    </section>
  </article>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.storybook-page {
  margin: 0 auto;
  padding: 48px 20px;
  max-width: 600px;
  color: #333;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  
  h2 {
    display: inline-block;
    vertical-align: top;
    margin: 0 0 4px;
    font-weight: 700;
    font-size: 32px;
    line-height: 1;
  }
  
  p {
    margin: 1em 0;
  }
}

</style>