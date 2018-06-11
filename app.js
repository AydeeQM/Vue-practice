new Vue ({
  el: '#vue-app',
  data: {
    name: 'Aydee',
    job: 'Developer',
    age: 23,
    x: 0,
    y: 0
  },
  methods: {
    greet: function(time){
      return `Good ${time} ${this.name}`
    },

    add: function(inc){
      this.age += inc;
    },

    substract: function(dec){
      this.age -= dec;
    },

    updateXY: function(e){
      //console.log(e);
      this.x = e.offsetX;
      this.y = e.offsetY;
    }
  }
})