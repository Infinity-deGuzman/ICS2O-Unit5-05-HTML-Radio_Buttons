// Copyright (c) 2021 Infinity de Guzman All rights reserved
//
// Created by: Infinity de Guzman
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

function enterClicked () {
  // This code will check your age and the day of the week to determine what you'll be doing.

  var under18 = document.getElementById('under-18').value
	var andUp = document.getElementById('18-and-up').value
	var yes = document.getElementById('yes').value
	var no = document.getElementById('no').value

  if (document.getElementById('18-and-up').checked && document.getElementById('yes').checked) {
		document.getElementById('answer').innerHTML = "Time for work!";
	} else if (document.getElementById('under-18').checked && document.getElementById('yes').checked) {
		document.getElementById('answer').innerHTML = "Time for school!";
	} else if (document.getElementById('no').checked) {
		document.getElementById('answer').innerHTML = "Time to relax for the weekend!! :D";
	}
}
