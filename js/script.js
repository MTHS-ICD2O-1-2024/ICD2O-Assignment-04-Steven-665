// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yi.zhou
// Created on: May 2025
// This file contains the JS functions for index.html


"use strict"


// Setting the generate as function
function buyASushi() {
  // Setting the veribals
  const regularSize = document.getElementById("regular-size").checked
  const regularPrice = 5.99
  const bigPrice = 7.99
  const price = 0

  const sushiType = document.getElementById("Ingredients-of-sushi")
  const price2 = 0
  const salmonPrice = 6.99
  const tunaPrice = 7.99
  const arcticClamPrice = 6.99
  const sweetShrimpPrice = 5.99
  const tax = 0.13

  // Setting the the if and else statment
  if (regularSize === true) {
    price = regularPrice
  } else {
    price = bigPrice
  }

  if (sushiType = "salmon") {
    price2 = salmonPrice
  } else if (sushiType = "tuna") {
    price2 = tunaPrice
  } else if (sushiType = "arctic-clam") {
    price2 = arcticClamPrice
  } else if (sushiType = "sweet-shrimp") {
    price2 = sweetShrimpPrice
  } 
  // Gettting the reuslt
  document.getElementById("result").innerHTML =
    "<p>The Size Price is: " + price + "</p>"
    "<p>The Food Material Price is: " + price2 + "</p>"
    "<p>The Total Price is: " + (price + price2) + "</p>"
    "<p>After Tax is: " + ((price + price2) * tax) + "</p>"
}
