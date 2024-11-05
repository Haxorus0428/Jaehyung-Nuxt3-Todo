import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  css: [
    '@/assets/css/app.css',
    'bootstrap/dist/css/bootstrap.min.css',
  ],
  modules: [
    '@pinia/nuxt',  // Pinia 모듈만 사용하여 설정
  ],
  plugins: [
    { src: '~/plugins/jquery.client.js', mode: 'client' }
  ],
  ssr: false,  // 서버사이드 렌더링 비활성화
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ],
      script: [
        {
          src: 'https://code.jquery.com/jquery-3.7.1.min.js', // jQuery 버전을 3.7.1로 변경
          defer: false, // jQuery는 defer를 false로 설정
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.14.1/jquery-ui.min.js', // 새로운 jQuery UI CDN URL
          defer: false, // jQuery UI도 defer를 false로 설정하여 즉시 로드
        },
      ],
    },
  },
  compatibilityDate: '2024-11-05',
});