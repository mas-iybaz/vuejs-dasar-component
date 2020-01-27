Vue.component('counter', {
    props: ['member'],
    template: '#counter-template',
})

Vue.component('card-member', {
    props: ['member'],
    template: '#card-member-template',
})

Vue.component('modal-member', {
    props: ['id'],
    template: '#modal-member-template',
})

let app = new Vue({
    el: '#app',
    data: {
        members: [{
                id: 1,
                name: 'Alpha',
                image: 'img/alpha.png',
                description: 'Pemimpin Bijaksana',
                count: 0
            },
            {
                id: 2,
                name: 'Beta',
                image: 'img/beta.png',
                description: 'Pemimpin Ramah',
                count: 0
            },
            {
                id: 3,
                name: 'Cherry',
                image: 'img/cherry.png',
                description: 'Pemimpin Jujur',
                count: 0
            },
            {
                id: 4,
                name: 'Enigma',
                image: 'img/enigma.png',
                description: 'Pemimpin Merakyat',
                count: 0
            }
        ]
    }
})