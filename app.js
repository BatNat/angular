(function () {
  'use strict';


/**
* app Module
*
* Description
*/
angular
.module('app', [])
.controller('AppCtrl', AppCtrl)

function AppCtrl($scope) {
  $scope.title = 'hello,angular';

  $scope.clickBtn = function () {
    console.log('click');
  }
  $scope.hoverBtn = function () {
    console.log('mouseup');
  }

 $scope.nameData = [
  {
    "index": 1,
    "index_start_at": 56,
    "integer": 0,
    "float": 17.7207,
    "name": "Dana",
    "surname": "McConnell",
    "fullname": "Glenda Waller",
    "email": "eleanor@proctor.nr",
    "bool": false
    },
    {
    "index": 2,
    "index_start_at": 57,
    "integer": 9,
    "float": 19.1972,
    "name": "Wesley",
    "surname": "Weiss",
    "fullname": "Kathy Lehman",
    "email": "claire@robertson.in",
    "bool": false
    },
    {
    "index": 3,
    "index_start_at": 58,
    "integer": 24,
    "float": 12.0229,
    "name": "Gina",
    "surname": "Wu",
    "fullname": "Ethel Law",
    "email": "kim@harrell.mh",
    "bool": false
    },
    {
    "index": 4,
    "index_start_at": 59,
    "integer": 46,
    "float": 18.5198,
    "name": "Zachary",
    "surname": "Desai",
    "fullname": "Gladys Fox",
    "email": "robert@matthews.tm",
    "bool": false
    },
    {
    "index": 5,
    "index_start_at": 60,
    "integer": 0,
    "float": 16.1477,
    "name": "Jason",
    "surname": "Forrest",
    "fullname": "Brett Berry",
    "email": "theodore@fischer.kr",
    "bool": true
    },
    {
    "index": 6,
    "index_start_at": 61,
    "integer": 5,
    "float": 16.1048,
    "name": "Raymond",
    "surname": "Singleton",
    "fullname": "Tamara Kirk",
    "email": "paul@pugh.ro",
    "bool": false
    },
    {
    "index": 7,
    "index_start_at": 62,
    "integer": 15,
    "float": 17.0331,
    "name": "George",
    "surname": "Baxter",
    "fullname": "Vivian Barton",
    "email": "denise@locklear.kg",
    "bool": false
    },
    {
    "index": 8,
    "index_start_at": 63,
    "integer": 35,
    "float": 15.3725,
    "name": "Erica",
    "surname": "Livingston",
    "fullname": "Neal Mann",
    "email": "kyle@hardison.sc",
    "bool": false
    },
    {
    "index": 9,
    "index_start_at": 64,
    "integer": 31,
    "float": 16.3503,
    "name": "Luis",
    "surname": "Lynn",
    "fullname": "Shirley Desai",
    "email": "kimberly@parsons.ni",
    "bool": false
    },
    {
    "index": 10,
    "index_start_at": 65,
    "integer": 9,
    "float": 17.323,
    "name": "Eddie",
    "surname": "Lindsay",
    "fullname": "Natalie Phillips",
    "email": "hannah@erickson.ir",
    "bool": false
    }
    ];

}


})();