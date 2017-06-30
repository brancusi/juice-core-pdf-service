'use strict';

const fs = require('fs');
const PdfFactory = require('./factories/pdf-factory')();

// const data = {"date":"Sun 06/04/17","ingredients":[{"label":"Apple","converted":[{"q":70,"uom":"lb"},{"q":6,"uom":"oz"}]},{"label":"Apple Cider Vinegar","converted":[{"q":13,"uom":"floz"},{"q":1,"uom":"tbs"}]},{"label":"Beet","converted":[{"q":2,"uom":"lb"},{"q":9,"uom":"oz"}]},{"label":"Bentonite Clay","converted":[{"q":6,"uom":"floz"}]},{"label":"Black Pepper","converted":[{"q":"0.3","uom":"tsp"}]},{"label":"Carrot","converted":[{"q":15,"uom":"lb"},{"q":1,"uom":"oz"}]},{"label":"Cayenne Powder","converted":[{"q":1,"uom":"tsp"}]},{"label":"Celery","converted":[{"q":14,"uom":"lb"}]},{"label":"Charcoal","converted":[{"q":3,"uom":"floz"}]},{"label":"Chlorophyll","converted":[{"q":2,"uom":"floz"},{"q":1,"uom":"tbs"}]},{"label":"Cinnamon Powder","converted":[{"q":"0.5","uom":"tsp"}]},{"label":"Colloidal Silver","converted":[{"q":30,"uom":"floz"}]},{"label":"Cucumber","converted":[{"q":14,"uom":"lb"},{"q":3,"uom":"oz"}]},{"label":"E3Live","converted":[{"q":1,"uom":"floz"},{"q":1,"uom":"tbs"}]},{"label":"Fennel","converted":[{"q":1,"uom":"lb"},{"q":6,"uom":"oz"}]},{"label":"Garlic","converted":[{"q":3,"uom":"oz"}]},{"label":"Ginger","converted":[{"q":3,"uom":"lb"},{"q":6,"uom":"oz"}]},{"label":"Grapefruit","converted":[{"q":2,"uom":"lb"},{"q":9,"uom":"oz"}]},{"label":"Kale","converted":[{"q":4,"uom":"lb"},{"q":2,"uom":"oz"}]},{"label":"Lemon","converted":[{"q":16,"uom":"lb"},{"q":10,"uom":"oz"}]},{"label":"Lime","converted":[{"q":2,"uom":"lb"}]},{"label":"Nutmeg Powder","converted":[{"q":"0.5","uom":"tsp"}]},{"label":"Orange","converted":[{"q":16,"uom":"lb"},{"q":8,"uom":"oz"}]},{"label":"Oregano Oil Extract ","converted":[{"q":1,"uom":"tbs"}]},{"label":"Pineapple","converted":[{"q":29,"uom":"lb"},{"q":14,"uom":"oz"}]},{"label":"R.O. Water","converted":[{"q":30,"uom":"floz"}]},{"label":"Romaine","converted":[{"q":1,"uom":"lb"},{"q":13,"uom":"oz"}]},{"label":"Spinach","converted":[{"q":3,"uom":"lb"},{"q":12,"uom":"oz"}]},{"label":"Strawberry","converted":[{"q":4,"uom":"lb"},{"q":14,"uom":"oz"}]},{"label":"Turmeric","converted":[{"q":1,"uom":"lb"},{"q":12,"uom":"oz"}]},{"label":"Watermelon","converted":[{"q":12,"uom":"lb"},{"q":6,"uom":"oz"}]}],"recipes":[{"label":"Apple Juice","converted":[{"q":22,"uom":"qt"}]},{"label":"Beet Juice","converted":[{"q":28,"uom":"floz"},{"q":1,"uom":"tbs"}]},{"label":"Carrot Juice","converted":[{"q":2,"uom":"qt"},{"q":31,"uom":"floz"}]},{"label":"Celery Juice","converted":[{"q":5,"uom":"qt"},{"q":25,"uom":"floz"}]},{"label":"Cucumber Juice","converted":[{"q":5,"uom":"qt"},{"q":8,"uom":"floz"}]},{"label":"Fennel Juice","converted":[{"q":15,"uom":"floz"},{"q":1,"uom":"tbs"}]},{"label":"Garlic Juice","converted":[{"q":1,"uom":"floz"},{"q":1,"uom":"tbs"}]},{"label":"Ginger Juice","converted":[{"q":1,"uom":"qt"},{"q":8,"uom":"floz"}]},{"label":"Grapefruit Juice","converted":[{"q":18,"uom":"floz"}]},{"label":"Kale Juice","converted":[{"q":1,"uom":"qt"},{"q":6,"uom":"floz"}]},{"label":"Lemon Juice","converted":[{"q":3,"uom":"qt"},{"q":6,"uom":"floz"}]},{"label":"Lime Juice","converted":[{"q":12,"uom":"floz"},{"q":1,"uom":"tbs"}]},{"label":"Orange Juice","converted":[{"q":3,"uom":"qt"},{"q":12,"uom":"floz"}]},{"label":"Pineapple Juice","converted":[{"q":7,"uom":"qt"},{"q":15,"uom":"floz"}]},{"label":"Romaine Juice","converted":[{"q":20,"uom":"floz"}]},{"label":"Spinach Juice","converted":[{"q":1,"uom":"qt"},{"q":6,"uom":"floz"}]},{"label":"Strawberry Juice","converted":[{"q":22,"uom":"floz"}]},{"label":"Turmeric Juice","converted":[{"q":19,"uom":"floz"}]},{"label":"Watermelon Juice","converted":[{"q":3,"uom":"qt"},{"q":3,"uom":"floz"}]}],"products":[{"label":"72° and Sunny","q":"10","note":"","children":[{"label":"Apple Cider Vinegar","converted":[{"q":1,"uom":"tbs"},{"q":2,"uom":"tsp"}]},{"label":"Apple Juice","converted":[{"q":1,"uom":"qt"},{"q":28,"uom":"floz"}]},{"label":"Carrot Juice","converted":[{"q":30,"uom":"floz"}]},{"label":"Cayenne Powder","converted":[{"q":"0.3","uom":"tsp"}]},{"label":"Ginger Juice","converted":[{"q":1,"uom":"tsp"}]},{"label":"Lemon Juice","converted":[{"q":5,"uom":"floz"}]},{"label":"Lime Juice","converted":[{"q":5,"uom":"floz"}]},{"label":"Orange Juice","converted":[{"q":30,"uom":"floz"}]},{"label":"R.O. Water","converted":[{"q":30,"uom":"floz"}]}]},{"label":"Aftershock - SM","q":"5","note":"Expires in 8 days","children":[{"label":"Black Pepper","converted":[{"q":"0.3","uom":"tsp"}]},{"label":"Cayenne Powder","converted":[{"q":"0.3","uom":"tsp"}]},{"label":"Ginger Juice","converted":[{"q":15,"uom":"floz"}]},{"label":"Lemon Juice","converted":[{"q":7,"uom":"floz"},{"q":1,"uom":"tbs"}]},{"label":"Lime Juice","converted":[{"q":7,"uom":"floz"},{"q":1,"uom":"tbs"}]},{"label":"Turmeric Juice","converted":[{"q":15,"uom":"floz"}]}]},{"label":"Apple - 8oz","q":"5","note":"","children":[{"label":"Apple Juice","converted":[{"q":1,"uom":"qt"},{"q":8,"uom":"floz"}]}]},{"label":"City Of Angels","q":"6","note":"","children":[{"label":"Fennel Juice","converted":[{"q":3,"uom":"floz"}]},{"label":"Grapefruit Juice","converted":[{"q":18,"uom":"floz"}]},{"label":"Orange Juice","converted":[{"q":24,"uom":"floz"}]},{"label":"Pineapple Juice","converted":[{"q":1,"uom":"qt"},{"q":16,"uom":"floz"}]},{"label":"Turmeric Juice","converted":[{"q":3,"uom":"floz"}]}]},{"label":"Editors Choice","q":"5","note":"","children":[{"label":"Apple Juice","converted":[{"q":1,"uom":"qt"},{"q":8,"uom":"floz"}]},{"label":"Celery Juice","converted":[{"q":10,"uom":"floz"}]},{"label":"Cucumber Juice","converted":[{"q":15,"uom":"floz"}]},{"label":"Fennel Juice","converted":[{"q":12,"uom":"floz"},{"q":1,"uom":"tbs"}]},{"label":"Ginger Juice","converted":[{"q":"0.6","uom":"tsp"}]},{"label":"Lemon Juice","converted":[{"q":2,"uom":"floz"},{"q":1,"uom":"tbs"}]}]},{"label":"Farmers Market","q":"5","note":"","children":[{"label":"Beet Juice","converted":[{"q":25,"uom":"floz"}]},{"label":"Carrot Juice","converted":[{"q":25,"uom":"floz"}]},{"label":"Cayenne Powder","converted":[{"q":"0.2","uom":"tsp"}]},{"label":"Celery Juice","converted":[{"q":25,"uom":"floz"}]},{"label":"Lemon Juice","converted":[{"q":5,"uom":"floz"}]}]},{"label":"Headshot - SM","q":"5","note":"Expires in 5 days","children":[{"label":"Apple Cider Vinegar","converted":[{"q":2,"uom":"qt"},{"q":11,"uom":"floz"}]},{"label":"Colloidal Silver","converted":[{"q":30,"uom":"floz"}]},{"label":"Garlic Juice","converted":[{"q":1,"uom":"tsp"}]},{"label":"Oregano Oil Extract ","converted":[{"q":1,"uom":"tbs"}]}]},{"label":"I’m Glowing! - SM","q":"5","note":"Expires in 5 days","children":[{"label":"Cayenne Powder","converted":[{"q":"0.3","uom":"tsp"}]},{"label":"Chlorophyll","converted":[{"q":2,"uom":"floz"},{"q":1,"uom":"tbs"}]},{"label":"E3Live","converted":[{"q":1,"uom":"floz"},{"q":1,"uom":"tbs"}]},{"label":"Ginger Juice","converted":[{"q":1,"uom":"tsp"}]},{"label":"Lemon Juice","converted":[{"q":10,"uom":"floz"}]},{"label":"Pineapple Juice","converted":[{"q":30,"uom":"floz"}]}]},{"label":"Lax","q":"36","note":"Charcoal needs to be added/mixed last","children":[{"label":"Apple Juice","converted":[{"q":15,"uom":"qt"},{"q":6,"uom":"floz"}]},{"label":"Bentonite Clay","converted":[{"q":6,"uom":"floz"}]},{"label":"Charcoal","converted":[{"q":3,"uom":"floz"}]},{"label":"Ginger Juice","converted":[{"q":3,"uom":"floz"},{"q":1,"uom":"tbs"}]},{"label":"Lemon Juice","converted":[{"q":2,"uom":"qt"},{"q":8,"uom":"floz"}]}]},{"label":"Lyft Me Up","q":"4","note":"","children":[{"label":"Apple Juice","converted":[{"q":24,"uom":"floz"}]},{"label":"Carrot Juice","converted":[{"q":1,"uom":"qt"},{"q":8,"uom":"floz"}]},{"label":"Cinnamon Powder","converted":[{"q":"0.5","uom":"tsp"}]},{"label":"Ginger Juice","converted":[{"q":"0.7","uom":"tsp"}]},{"label":"Nutmeg Powder","converted":[{"q":"0.5","uom":"tsp"}]}]},{"label":"Orange - 8oz","q":"5","note":"","children":[{"label":"Orange Juice","converted":[{"q":1,"uom":"qt"},{"q":8,"uom":"floz"}]}]},{"label":"Sunset Strip","q":"11","note":"","children":[{"label":"Pineapple Juice","converted":[{"q":1,"uom":"qt"},{"q":23,"uom":"floz"}]},{"label":"Strawberry Juice","converted":[{"q":22,"uom":"floz"}]},{"label":"Watermelon Juice","converted":[{"q":3,"uom":"qt"},{"q":3,"uom":"floz"}]}]},{"label":"The Audition","q":"7","note":"","children":[{"label":"Apple Juice","converted":[{"q":14,"uom":"floz"}]},{"label":"Beet Juice","converted":[{"q":3,"uom":"floz"},{"q":1,"uom":"tbs"}]},{"label":"Celery Juice","converted":[{"q":24,"uom":"floz"},{"q":1,"uom":"tbs"}]},{"label":"Orange Juice","converted":[{"q":14,"uom":"floz"}]},{"label":"Pineapple Juice","converted":[{"q":1,"uom":"qt"},{"q":24,"uom":"floz"}]},{"label":"Turmeric Juice","converted":[{"q":1,"uom":"tsp"}]}]},{"label":"The Premiere","q":"10","note":"","children":[{"label":"Apple Juice","converted":[{"q":1,"uom":"qt"},{"q":8,"uom":"floz"}]},{"label":"Celery Juice","converted":[{"q":30,"uom":"floz"}]},{"label":"Cucumber Juice","converted":[{"q":20,"uom":"floz"}]},{"label":"Pineapple Juice","converted":[{"q":1,"uom":"qt"},{"q":18,"uom":"floz"}]},{"label":"Romaine Juice","converted":[{"q":20,"uom":"floz"}]}]},{"label":"The Producer","q":"19","note":"","children":[{"label":"Celery Juice","converted":[{"q":2,"uom":"qt"},{"q":31,"uom":"floz"}]},{"label":"Cucumber Juice","converted":[{"q":4,"uom":"qt"},{"q":5,"uom":"floz"}]},{"label":"Kale Juice","converted":[{"q":1,"uom":"qt"},{"q":6,"uom":"floz"}]},{"label":"Spinach Juice","converted":[{"q":1,"uom":"qt"},{"q":6,"uom":"floz"}]}]}]}

const data = {
	"data": [{
		"renderer": "items-v2",
		"title": "Step 1 - Gather All Inventory",
		"collection": [{
			"label": "Items",
			"collection": [{
				"label": "Watermelon",
				"q": 110.25,
				"uom": "lb",
				"collection": []
			}, {
				"label": "Pineapple",
				"q": 80,
				"uom": "lb",
				"collection": []
			}, {
				"label": "Strawberry",
				"q": 43.55555555555555,
				"uom": "lb",
				"collection": []
			}, {
				"label": "Beet",
				"q": 405.35949999999997,
				"uom": "lb",
				"collection": []
			}, {
				"label": "Celery",
				"q": 345.15399999999994,
				"uom": "lb",
				"collection": []
			}, {
				"label": "Carrot",
				"q": 716.7823999999999,
				"uom": "lb",
				"collection": []
			}, {
				"label": "Lemon",
				"q": 148.004,
				"uom": "lb",
				"collection": []
			}, {
				"label": "Cayenne Powder",
				"q": 9.632392616666667,
				"uom": "tbs",
				"collection": []
			}, {
				"label": "Orange",
				"q": 9.18,
				"uom": "lb",
				"collection": []
			}, {
				"label": "Apple",
				"q": 26.730000000000004,
				"uom": "lb",
				"collection": []
			}, {
				"label": "Turmeric",
				"q": 0.405,
				"uom": "lb",
				"collection": []
			}, {
				"label": "Grapefruit",
				"q": 2.5559999999999996,
				"uom": "lb",
				"collection": []
			}, {
				"label": "Fennel",
				"q": 1.6199999999999999,
				"uom": "lb",
				"collection": []
			}, {
				"label": "Cucumber",
				"q": 6.069599999999999,
				"uom": "lb",
				"collection": []
			}, {
				"label": "Ginger",
				"q": 0.5586,
				"uom": "lb",
				"collection": []
			}, {
				"label": "Bentonite Clay",
				"q": 1,
				"uom": "floz",
				"collection": []
			}, {
				"label": "Charcoal",
				"q": 1,
				"uom": "tbs",
				"collection": []
			}, {
				"label": "Kale",
				"q": 1.308,
				"uom": "lb",
				"collection": []
			}, {
				"label": "Spinach",
				"q": 1.1880000000000002,
				"uom": "lb",
				"collection": []
			}, {
				"label": "Romaine",
				"q": 1.092,
				"uom": "lb",
				"collection": []
			}, {
				"label": "Cinnamon Powder",
				"q": 0.75,
				"uom": "tsp",
				"collection": []
			}, {
				"label": "Nutmeg Powder",
				"q": 0.75,
				"uom": "tsp",
				"collection": []
			}, {
				"label": "R.O. Water",
				"q": 18,
				"uom": "floz",
				"collection": []
			}, {
				"label": "Lime",
				"q": 0.48,
				"uom": "lb",
				"collection": []
			}, {
				"label": "Apple Cider Vinegar",
				"q": 1,
				"uom": "tbs",
				"collection": []
			}]
		}]
	}, {
		"renderer": "simplified-composite",
		"title": "Step 2 - Juice All Items",
		"collection": [{
				"label": "Watermelon Juice",
				"q": 110.25,
				"uom": "floz",
				"collection": [{
					"label": "Watermelon",
					"q": 110.25,
					"uom": "lb",
					"tree": []
				}]
			},
			{
				"label": "Pineapple Juice",
				"q": 640,
				"uom": "floz",
				"collection": [{
					"label": "Pineapple",
					"q": 80,
					"uom": "lb",
					"tree": []
				}]
			},
			{
				"label": "Pineapple Juice",
				"q": 640,
				"uom": "floz",
				"collection": [{
					"label": "Pineapple",
					"q": 80,
					"uom": "lb",
					"tree": []
				}]
			},
			{
				"label": "Pineapple Juice",
				"q": 640,
				"uom": "floz",
				"collection": [{
					"label": "Pineapple",
					"q": 80,
					"uom": "lb",
					"tree": []
				}]
			},
			{
				"label": "Pineapple Juice",
				"q": 640,
				"uom": "floz",
				"collection": [{
					"label": "Pineapple",
					"q": 80,
					"uom": "lb",
					"tree": []
				}]
			},
			{
				"label": "Pineapple Juice",
				"q": 640,
				"uom": "floz",
				"collection": [{
					"label": "Pineapple",
					"q": 80,
					"uom": "lb",
					"tree": []
				}]
			},
			{
				"label": "Pineapple Juice",
				"q": 640,
				"uom": "floz",
				"collection": [{
					"label": "Pineapple",
					"q": 80,
					"uom": "lb",
					"tree": []
				}]
			},
			{
				"label": "Pineapple Juice",
				"q": 640,
				"uom": "floz",
				"collection": [{
					"label": "Pineapple",
					"q": 80,
					"uom": "lb",
					"tree": []
				}]
			},
			{
				"label": "Pineapple Juice",
				"q": 640,
				"uom": "floz",
				"collection": [{
					"label": "Pineapple",
					"q": 80,
					"uom": "lb",
					"tree": []
				}]
			},
			{
				"label": "Pineapple Juice",
				"q": 640,
				"uom": "floz",
				"collection": [{
					"label": "Pineapple",
					"q": 80,
					"uom": "lb",
					"tree": []
				}]
			},

			{
				"label": "Pineapple Juice",
				"q": 640,
				"uom": "floz",
				"collection": [{
					"label": "Pineapple",
					"q": 80,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Strawberry Juice",
				"q": 43.55555555555555,
				"uom": "floz",
				"collection": [{
					"label": "Strawberry",
					"q": 43.55555555555555,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Beet Juice",
				"q": 4454.5,
				"uom": "floz",
				"collection": [{
					"label": "Beet",
					"q": 405.35949999999997,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Celery Juice",
				"q": 4541.5,
				"uom": "floz",
				"collection": [{
					"label": "Celery",
					"q": 345.15399999999994,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Carrot Juice",
				"q": 4528,
				"uom": "floz",
				"collection": [{
					"label": "Carrot",
					"q": 716.7823999999999,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Lemon Juice",
				"q": 908,
				"uom": "floz",
				"collection": [{
					"label": "Lemon",
					"q": 148.004,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Orange Juice",
				"q": 60,
				"uom": "floz",
				"collection": [{
					"label": "Orange",
					"q": 9.18,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Apple Juice",
				"q": 243,
				"uom": "floz",
				"collection": [{
					"label": "Apple",
					"q": 26.730000000000004,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Turmeric Juice",
				"q": 4.5,
				"uom": "floz",
				"collection": [{
					"label": "Turmeric",
					"q": 0.405,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Grapefruit Juice",
				"q": 18,
				"uom": "floz",
				"collection": [{
					"label": "Grapefruit",
					"q": 2.5559999999999996,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Fennel Juice",
				"q": 18,
				"uom": "floz",
				"collection": [{
					"label": "Fennel",
					"q": 1.6199999999999999,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Cucumber Juice",
				"q": 72,
				"uom": "floz",
				"collection": [{
					"label": "Cucumber",
					"q": 6.069599999999999,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Ginger Juice",
				"q": 6.65,
				"uom": "floz",
				"collection": [{
					"label": "Ginger",
					"q": 0.5586,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Kale Juice",
				"q": 12,
				"uom": "floz",
				"collection": [{
					"label": "Kale",
					"q": 1.308,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Spinach Juice",
				"q": 12,
				"uom": "floz",
				"collection": [{
					"label": "Spinach",
					"q": 1.1880000000000002,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Romaine Juice",
				"q": 12,
				"uom": "floz",
				"collection": [{
					"label": "Romaine",
					"q": 1.092,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Lime Juice",
				"q": 3,
				"uom": "floz",
				"collection": [{
					"label": "Lime",
					"q": 0.48,
					"uom": "lb",
					"tree": []
				}]
			}
		]
	}, {
		"renderer": "composites-v2",
		"title": "Product Sheet",
		"collection": [{
			"label": "Sunset Strip",
			"q": 98,
			"uom": "count",
			"collection": [{
				"label": "Watermelon Juice",
				"q": 110.25,
				"uom": "floz",
				"tree": [{
					"label": "Watermelon",
					"q": 110.25,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Pineapple Juice",
				"q": 490,
				"uom": "floz",
				"tree": [{
					"label": "Pineapple",
					"q": 61.25,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Strawberry Juice",
				"q": 43.55555555555555,
				"uom": "floz",
				"tree": [{
					"label": "Strawberry",
					"q": 43.55555555555555,
					"uom": "lb",
					"tree": []
				}]
			}]
		}, {
			"label": "Farmers Market",
			"q": 890,
			"uom": "count",
			"collection": [{
				"label": "Beet Juice",
				"q": 4450,
				"uom": "floz",
				"tree": [{
					"label": "Beet",
					"q": 404.95,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Celery Juice",
				"q": 4450,
				"uom": "floz",
				"tree": [{
					"label": "Celery",
					"q": 338.2,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Carrot Juice",
				"q": 4450,
				"uom": "floz",
				"tree": [{
					"label": "Carrot",
					"q": 704.435,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Lemon Juice",
				"q": 890,
				"uom": "floz",
				"tree": [{
					"label": "Lemon",
					"q": 145.07,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Cayenne Powder",
				"q": 9.569892616666667,
				"uom": "tbs",
				"forceUomsParsed": ["tsp", "tbs"],
				"tree": []
			}]
		}, {
			"label": "The Audition",
			"q": 9,
			"uom": "count",
			"collection": [{
				"label": "Pineapple Juice",
				"q": 72,
				"uom": "floz",
				"tree": [{
					"label": "Pineapple",
					"q": 9,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Celery Juice",
				"q": 31.5,
				"uom": "floz",
				"tree": [{
					"label": "Celery",
					"q": 2.394,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Orange Juice",
				"q": 18,
				"uom": "floz",
				"tree": [{
					"label": "Orange",
					"q": 2.754,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Apple Juice",
				"q": 18,
				"uom": "floz",
				"tree": [{
					"label": "Apple",
					"q": 1.98,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Beet Juice",
				"q": 4.5,
				"uom": "floz",
				"tree": [{
					"label": "Beet",
					"q": 0.4095,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Turmeric Juice",
				"q": 1.5,
				"uom": "floz",
				"tree": [{
					"label": "Turmeric",
					"q": 0.135,
					"uom": "lb",
					"tree": []
				}]
			}]
		}, {
			"label": "City Of Angels",
			"q": 6,
			"uom": "count",
			"collection": [{
				"label": "Pineapple Juice",
				"q": 48,
				"uom": "floz",
				"tree": [{
					"label": "Pineapple",
					"q": 6,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Orange Juice",
				"q": 24,
				"uom": "floz",
				"tree": [{
					"label": "Orange",
					"q": 3.6719999999999997,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Grapefruit Juice",
				"q": 18,
				"uom": "floz",
				"tree": [{
					"label": "Grapefruit",
					"q": 2.5559999999999996,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Fennel Juice",
				"q": 3,
				"uom": "floz",
				"tree": [{
					"label": "Fennel",
					"q": 0.27,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Turmeric Juice",
				"q": 3,
				"uom": "floz",
				"tree": [{
					"label": "Turmeric",
					"q": 0.27,
					"uom": "lb",
					"tree": []
				}]
			}]
		}, {
			"label": "Editors Choice",
			"q": 6,
			"uom": "count",
			"collection": [{
				"label": "Apple Juice",
				"q": 48,
				"uom": "floz",
				"tree": [{
					"label": "Apple",
					"q": 5.28,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Cucumber Juice",
				"q": 18,
				"uom": "floz",
				"tree": [{
					"label": "Cucumber",
					"q": 1.5174,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Fennel Juice",
				"q": 15,
				"uom": "floz",
				"tree": [{
					"label": "Fennel",
					"q": 1.3499999999999999,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Celery Juice",
				"q": 12,
				"uom": "floz",
				"tree": [{
					"label": "Celery",
					"q": 0.9119999999999999,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Lemon Juice",
				"q": 3,
				"uom": "floz",
				"tree": [{
					"label": "Lemon",
					"q": 0.489,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Ginger Juice",
				"q": 1.5,
				"uom": "tbs",
				"tree": [{
					"label": "Ginger",
					"q": 0.063,
					"uom": "lb",
					"tree": []
				}]
			}]
		}, {
			"label": "Lax",
			"q": 6,
			"uom": "count",
			"collection": [{
				"label": "Apple Juice",
				"q": 81,
				"uom": "floz",
				"tree": [{
					"label": "Apple",
					"q": 8.91,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Lemon Juice",
				"q": 12,
				"uom": "floz",
				"tree": [{
					"label": "Lemon",
					"q": 1.956,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Ginger Juice",
				"q": 3.9000000000000004,
				"uom": "floz",
				"tree": [{
					"label": "Ginger",
					"q": 0.3276,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Bentonite Clay",
				"q": 1,
				"uom": "floz",
				"tree": []
			}, {
				"label": "Charcoal",
				"q": 1,
				"uom": "tbs",
				"tree": []
			}]
		}, {
			"label": "The Producer",
			"q": 6,
			"uom": "count",
			"collection": [{
				"label": "Cucumber Juice",
				"q": 42,
				"uom": "floz",
				"tree": [{
					"label": "Cucumber",
					"q": 3.5405999999999995,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Celery Juice",
				"q": 30,
				"uom": "floz",
				"tree": [{
					"label": "Celery",
					"q": 2.2800000000000002,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Kale Juice",
				"q": 12,
				"uom": "floz",
				"tree": [{
					"label": "Kale",
					"q": 1.308,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Spinach Juice",
				"q": 12,
				"uom": "floz",
				"tree": [{
					"label": "Spinach",
					"q": 1.1880000000000002,
					"uom": "lb",
					"tree": []
				}]
			}]
		}, {
			"label": "The Premiere",
			"q": 6,
			"uom": "count",
			"collection": [{
				"label": "Pineapple Juice",
				"q": 30,
				"uom": "floz",
				"tree": [{
					"label": "Pineapple",
					"q": 3.75,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Cucumber Juice",
				"q": 12,
				"uom": "floz",
				"tree": [{
					"label": "Cucumber",
					"q": 1.0116,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Celery Juice",
				"q": 18,
				"uom": "floz",
				"tree": [{
					"label": "Celery",
					"q": 1.3679999999999999,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Apple Juice",
				"q": 24,
				"uom": "floz",
				"tree": [{
					"label": "Apple",
					"q": 2.64,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Romaine Juice",
				"q": 12,
				"uom": "floz",
				"tree": [{
					"label": "Romaine",
					"q": 1.092,
					"uom": "lb",
					"tree": []
				}]
			}]
		}, {
			"label": "Lyft Me Up",
			"q": 6,
			"uom": "count",
			"collection": [{
				"label": "Carrot Juice",
				"q": 60,
				"uom": "floz",
				"tree": [{
					"label": "Carrot",
					"q": 9.498,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Apple Juice",
				"q": 36,
				"uom": "floz",
				"tree": [{
					"label": "Apple",
					"q": 3.96,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Ginger Juice",
				"q": 1,
				"uom": "floz",
				"tree": [{
					"label": "Ginger",
					"q": 0.084,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Cinnamon Powder",
				"q": 0.75,
				"uom": "tsp",
				"forceUomsParsed": ["tsp", "tbs"],
				"tree": []
			}, {
				"label": "Nutmeg Powder",
				"q": 0.75,
				"uom": "tsp",
				"forceUomsParsed": ["tsp", "tbs"],
				"tree": []
			}]
		}, {
			"label": "72° and Sunny",
			"q": 6,
			"uom": "count",
			"collection": [{
				"label": "Apple Juice",
				"q": 36,
				"uom": "floz",
				"tree": [{
					"label": "Apple",
					"q": 3.96,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Carrot Juice",
				"q": 18,
				"uom": "floz",
				"tree": [{
					"label": "Carrot",
					"q": 2.8494,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Orange Juice",
				"q": 18,
				"uom": "floz",
				"tree": [{
					"label": "Orange",
					"q": 2.7539999999999996,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "R.O. Water",
				"q": 18,
				"uom": "floz",
				"tree": []
			}, {
				"label": "Lemon Juice",
				"q": 3,
				"uom": "floz",
				"tree": [{
					"label": "Lemon",
					"q": 0.489,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Lime Juice",
				"q": 3,
				"uom": "floz",
				"tree": [{
					"label": "Lime",
					"q": 0.48,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Ginger Juice",
				"q": 1,
				"uom": "floz",
				"tree": [{
					"label": "Ginger",
					"q": 0.084,
					"uom": "lb",
					"tree": []
				}]
			}, {
				"label": "Apple Cider Vinegar",
				"q": 1,
				"uom": "tbs",
				"tree": []
			}, {
				"label": "Cayenne Powder",
				"q": 0.1875,
				"uom": "tsp",
				"forceUomsParsed": ["tsp", "tbs"],
				"tree": []
			}]
		}]
	}]
};
const inst = PdfFactory.create();
inst.pdf().pipe(fs.createWriteStream('out.pdf'));
inst.build(data);
