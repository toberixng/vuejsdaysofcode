var app = new Vue({ // create a new view instance whis is the rootof vue application is the root 
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/vmSocks-green.jpg',
        tobylink: 'https://www.tobyfatumo.ga',
        inventory: 100
    }
})

// Despite all the activities today, I was able to fulful todays task #100DaysOfCode

// Today, I learnt about Vue instance, attribute binding "v-bind", conditional rendering(v-if, v-else-if, v-else, v-show), 

// Vue instance:  is the heart of the vue application in other to form relationship between the vue instance and part
// of the DOM we use the property EL and double curly braces {{expression}} to display data to the DOM. Expression
// is used to produce or evaluate a value, to combine values, to perform conditional logic
// to run method on data
// Vue display value of data to the DOM immediately because of its reactive nature
// Attribute-binding connect data to the attributes of your HTML elements, v-bind is like glue binding the attribute to an expression
// if our application calls for and element to be displayed or not someone can use v-show
// #VueJs is reactive.
