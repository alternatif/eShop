angular.module('ProductsCtrl', [])
  .controller('ProductsController', function ($scope, Products) {
    Products.get()
			.success(function(data) {
				$scope.products = data;
			});
  });

  angular.module('ProductsAddCtrl', [])
    .controller('ProductsAddController', function ($scope, $http) {
      $scope.addProduct = function() {
        $scope.formData.picture = 'http://placehold.it/150x150';
        $http.post('/products/', $scope.formData).success(function(data) {
          console.log("posted successfully");
        }).error(function(data) {
          console.error("error in posting");
        })
        }
    });


angular.module('CartCtrl', [])
  .controller('CartController', function($scope) {
    /* Set rates + misc */
    var taxRate = 0.05;
    var shippingRate = 15.00;
    var fadeTime = 300;


    /* Assign actions */
    $('.product-quantity input').change( function() {
      updateQuantity(this);
    });

    $('.product-removal button').click( function() {
      removeItem(this);
    });


    /* Recalculate cart */
    function recalculateCart()
    {
      var subtotal = 0;

      /* Sum up row totals */
      $('.product').each(function () {
        subtotal += parseFloat($(this).children('.product-line-price').text());
      });

      /* Calculate totals */
      var tax = subtotal * taxRate;
      var shipping = (subtotal > 0 ? shippingRate : 0);
      var total = subtotal + tax + shipping;

      /* Update totals display */
      $('.totals-value').fadeOut(fadeTime, function() {
        $('#cart-subtotal').html(subtotal.toFixed(2));
        $('#cart-tax').html(tax.toFixed(2));
        $('#cart-shipping').html(shipping.toFixed(2));
        $('#cart-total').html(total.toFixed(2));
        if(total == 0){
          $('.checkout').fadeOut(fadeTime);
        }else{
          $('.checkout').fadeIn(fadeTime);
        }
        $('.totals-value').fadeIn(fadeTime);
      });
    }


    /* Update quantity */
    function updateQuantity(quantityInput)
    {
      /* Calculate line price */
      var productRow = $(quantityInput).parent().parent();
      var price = parseFloat(productRow.children('.product-price').text());
      var quantity = $(quantityInput).val();
      var linePrice = price * quantity;

      /* Update line price display and recalc cart totals */
      productRow.children('.product-line-price').each(function () {
        $(this).fadeOut(fadeTime, function() {
          $(this).text(linePrice.toFixed(2));
          recalculateCart();
          $(this).fadeIn(fadeTime);
        });
      });
    }


    /* Remove item from cart */
    function removeItem(removeButton)
    {
      /* Remove row from DOM and recalc cart total */
      var productRow = $(removeButton).parent().parent();
      productRow.slideUp(fadeTime, function() {
        productRow.remove();
        recalculateCart();
      });
    }

  });
