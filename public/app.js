var apiURL = '/instagrams'

var component = new Vue({

  el: '#app',

  data: {
    instagrams: null,
    otherStuff: ['hi one', 'hi two', 'hi three'],
    newTitle: null,
    newImg: null
  },

  created: function () {
    this.fetchData()
  },

  methods: {
    fetchData: function () {
      var self = this;
      $.ajax({
        url: apiURL,
        method: 'GET'
      }).done(function(response){
        self.instagrams = response.data
        console.log(self.instagrams)
      })
    },
    submitInstagram: function(){
      var self = this;
      console.log(this.newTitle)
      console.log(this.newImg)
      var item = { title: this.newTitle, img: this.newImg }
      $.ajax({
        url: apiURL,
        method: 'POST',
        data: item
      }).done(function(response){
        self.fetchData()
        console.log(response)
      })
    }
  }
})
