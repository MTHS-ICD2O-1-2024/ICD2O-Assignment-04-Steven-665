// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yi.zhou
// Created on: May 2025
// This file contains the JS functions for index.html


"use strict"


// Setting the generate as function
function generate() {
  // Setting the veribals
  const regularSize = document.getElementById("regular-size").checked
  const regularPrice = 5.99
  const bigPrice = 7.99
  const Price = 0

  const salmon = document.getElementById("salmon").checked
  const tuna = document.getElementById("tuna")
  const arcticClam = document.getElementById("arctic-clam")
  const sweetShrimp = document.getElementById("sweet-shrimp")
  const salmonPrice = 8.99
  const tunaPrice = 9.99
  const arcticClamPrice = 7.99
  const sweetShrimpPrice = 6.99
  const Price2 = 0

  // Setting the the if and else statment
  if (regularSize === true) {
    Price = regularPrice
  } else {
    Price = bigPrice
  }

  if () {
    Price2 = salmonPrice
  } else if 
  // Gettting the reuslt
  document.getElementById("result").innerHTML =
    "<p>The random number is: " + randomNumber + "</p>"
}
