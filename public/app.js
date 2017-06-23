var apiURL = '/instagrams'

var component = new Vue({

  el: '#app',

  data: {
    instagrams: null,
    otherStuff: ['hi one', 'hi two', 'hi three']
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
    }
  }
})
