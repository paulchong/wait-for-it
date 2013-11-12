var restaurant = {

  toggleLogin: function(e) {
    e.preventDefault()
    if ( $(".restaurant-login").hasClass("hidden") ) {
      $(".restaurant-login").slideDown("slow")
      $(".restaurant-login").removeClass("hidden")
    } else {
      $(".restaurant-login").slideUp("slow")
      $(".restaurant-login").addClass("hidden")
    }
  },

  showRegister: function(e, registerPage) {
    $("#container").addClass("hidden").html(registerPage)
    $("#container").slideDown()
  }
}

var guest = {

  showAllRestaurants: function(e, restaurantPage) {
    $("#container").addClass("hidden").html(restaurantPage)
    $("#container").slideDown("slow")
  }
}

$(document).ready(function(){
  $(".body").on("click", ".restaurant-button", restaurant.toggleLogin)
  $(document).on("ajax:success", ".guest-link", restaurant.showRegister)
  $(document).on("ajax:success", ".register-link", guest.showAllRestaurants)
})