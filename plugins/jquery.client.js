import jQuery from 'jquery';
import 'jquery-ui/ui/widgets/draggable';
import 'jquery-ui/ui/widgets/droppable';
import 'jquery-ui/ui/widgets/sortable';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    window.$ = jQuery;
    window.jQuery = jQuery;

    // jQuery UI 동적 로드 설정
    const script = document.createElement('script');
    script.src = 'https://code.jquery.com/ui/1.14.1/jquery-ui.min.js';
    script.onload = () => {
      console.log('jQuery UI 로드 완료:', !!$.ui); // $.ui가 정의되었는지 확인
    };
    document.head.appendChild(script);
  }
});
