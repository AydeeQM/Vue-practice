new Vue ({
  el: '#vue-app',
  data: {
    name: 'Aydee',
    job: 'Developer',
    age: 23,
    website: 'http://www.thenetninja.co.uk',
    websiteTag: '<a href="http://www.thenetninja.co.uk">The ninja</a>'
  },
  methods: {
    greet: function(time){
      return `Good ${time} ${this.name}`
    },

    add: function(){
      this.age++;
    },

    substract: function(){
      this.age--;
    }

  }
})