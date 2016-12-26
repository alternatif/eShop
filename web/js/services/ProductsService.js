angular.module('ProductsService', [])
  .factory('Products', function () {
    return [
      {_id: 1, title: 'Overwatch', price: 34.99, quantity: 10, description: "Online multiplayer FPS.", picture: "../img/PC/overwatch_pc.jpg"},
      {_id: 2, title: 'The Witcher 3', price: 30.00, quantity: 10, description: 'RPG', picture: "../img/PC/witcher_pc_test.jpg"},
      {_id: 3, title: 'Titanfall 2', price: 70.00, quantity: 10, description: 'Online FPS with mechs', picture: "../img/PS4/titanfall2_ps4.jpg"},
      {_id: 4, title: 'Skyrim', price: 60.00, quantity: 10, description: 'Classic RPG', picture: "../img/XO/skyrim_xo.jpg"}
    ];
  });
