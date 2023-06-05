<template>
    <div id="main-component">
        <TheHeader />
        <main>
            <Nuxt />
            <a
                id="back-to-top"
                href="#"
                class="btn btn-lg back-to-top"
                role="button"
            >
                <i class="fa fa-chevron-up" style="color: #ffffff"></i>
            </a>
        </main>
        <TheFooter />
    </div>
</template>
<script>
 import ogImage from '@/assets/images/logo.jpg';
export default {
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://gicungin.com' + this.$route.path
        },
      ],
      meta: [
        { hid: 'og:image', property: 'og:image', content: 'https://gicungin.com'+ ogImage }
      ]
    }
  }
}</script>
<style lang="sass"></style>
