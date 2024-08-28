const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Hello world!',
            image: 'img/gu.png',
        }
    }
}).mount('#app');