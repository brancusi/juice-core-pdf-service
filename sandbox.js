'use strict';

const fs = require('fs');
const PdfFactory = require('./factories/pdf-factory')();

/*
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
*/

const data = {"data":[{"renderer":"detailed/items","title":"Materials","collection":[{"label":"Items","collection":[{"type":"ingredient","label":"Basil, Fresh","shelfLife":null,"tags":"produce","q":268.7515390297953,"uom":"g","forceUomsParsed":["g"],"tree":[],"collection":[]},{"type":"ingredient","label":"Black Pepper","shelfLife":null,"tags":"spice","q":9.36388033525586,"uom":"g","forceUomsParsed":["g"],"tree":[],"collection":[]},{"type":"ingredient","label":"Cabbage, Green","shelfLife":null,"tags":"produce","q":999.9999999999999,"uom":"g","forceUomsParsed":["g"],"tree":[],"collection":[]},{"type":"ingredient","label":"Collard Green, Raw","shelfLife":null,"tags":"produce","q":20,"uom":"count","forceUomsParsed":["count"],"tree":[],"collection":[]},{"type":"ingredient","label":"Date, Paste","shelfLife":null,"tags":"bulk","q":139.528558476,"uom":"g","forceUomsParsed":["g"],"tree":[],"collection":[]},{"type":"ingredient","label":"Garlic, Clove","shelfLife":null,"tags":"produce","q":16.79881802511688,"uom":"g","forceUomsParsed":["g"],"tree":[],"collection":[]},{"type":"ingredient","label":"Lemon, Juice","shelfLife":null,"tags":"liquid","q":178.22985060449753,"uom":"g","forceUomsParsed":["g"],"tree":[],"collection":[]},{"type":"ingredient","label":"Nutritional Yeast, Flake","shelfLife":null,"tags":"spice","q":36.6412213740456,"uom":"g","forceUomsParsed":["g"],"tree":[],"collection":[]},{"type":"ingredient","label":"Olive Oil","shelfLife":null,"tags":"liquid","q":308.4149516937048,"uom":"g","forceUomsParsed":["g"],"tree":[],"collection":[]},{"type":"ingredient","label":"Paprika, Powder","shelfLife":null,"tags":"spice","q":19.354838709677562,"uom":"g","forceUomsParsed":["g"],"tree":[],"collection":[]},{"type":"ingredient","label":"Pumpkin, Seed, Raw","shelfLife":null,"tags":"bulk","q":128.24427480916012,"uom":"g","forceUomsParsed":["g"],"tree":[],"collection":[]},{"type":"ingredient","label":"Salt","shelfLife":null,"tags":"spice","q":24.142426366086877,"uom":"g","forceUomsParsed":["g"],"tree":[],"collection":[]},{"type":"ingredient","label":"Sunflower Seed, Raw","shelfLife":null,"tags":"bulk","q":413.18310765759384,"uom":"g","forceUomsParsed":["g"],"tree":[],"collection":[]},{"type":"ingredient","label":"Tomato, Dried","shelfLife":null,"tags":"bulk","q":161.29032258064518,"uom":"g","forceUomsParsed":["g"],"tree":[],"collection":[]},{"type":"ingredient","label":"Water","shelfLife":null,"tags":"liquid","q":326.056210353,"uom":"g","forceUomsParsed":["g"],"tree":[],"collection":[]}]}]},{"renderer":"detailed/recipes","title":"Recipes","collection":[{"type":"recipe","label":"Italian Sausage - Spread","shelfLife":7,"tags":null,"q":680,"uom":"g","forceUomsParsed":["g"],"tree":[{"type":"ingredient","label":"Basil, Fresh","shelfLife":null,"tags":"produce","q":58.064516129032,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Black Pepper","shelfLife":null,"tags":"spice","q":2.58064516129016,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Garlic, Clove","shelfLife":null,"tags":"produce","q":5.806451612903199,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Lemon, Juice","shelfLife":null,"tags":"liquid","q":32.903225806451914,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Olive Oil","shelfLife":null,"tags":"liquid","q":25.806451612902958,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Paprika, Powder","shelfLife":null,"tags":"spice","q":19.354838709677562,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Salt","shelfLife":null,"tags":"spice","q":5.806451612903199,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Sunflower Seed, Raw","shelfLife":null,"tags":"bulk","q":368.3870967741938,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Tomato, Dried","shelfLife":null,"tags":"bulk","q":161.29032258064518,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null}],"collection":[{"type":"ingredient","label":"Basil, Fresh","shelfLife":null,"tags":"produce","q":58.064516129032,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Black Pepper","shelfLife":null,"tags":"spice","q":2.58064516129016,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Garlic, Clove","shelfLife":null,"tags":"produce","q":5.806451612903199,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Lemon, Juice","shelfLife":null,"tags":"liquid","q":32.903225806451914,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Olive Oil","shelfLife":null,"tags":"liquid","q":25.806451612902958,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Paprika, Powder","shelfLife":null,"tags":"spice","q":19.354838709677562,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Salt","shelfLife":null,"tags":"spice","q":5.806451612903199,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Sunflower Seed, Raw","shelfLife":null,"tags":"bulk","q":368.3870967741938,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Tomato, Dried","shelfLife":null,"tags":"bulk","q":161.29032258064518,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null}]},{"type":"recipe","label":"Pepita Pesto - Spread","shelfLife":4,"tags":null,"q":540,"uom":"g","forceUomsParsed":["g"],"tree":[{"type":"ingredient","label":"Basil, Fresh","shelfLife":null,"tags":"produce","q":210.6870229007633,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Black Pepper","shelfLife":null,"tags":"spice","q":4.5801526717557,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Garlic, Clove","shelfLife":null,"tags":"produce","q":10.992366412213679,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Lemon, Juice","shelfLife":null,"tags":"liquid","q":36.6412213740456,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Nutritional Yeast, Flake","shelfLife":null,"tags":"spice","q":36.6412213740456,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Olive Oil","shelfLife":null,"tags":"liquid","q":101.2213740458018,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Pumpkin, Seed, Raw","shelfLife":null,"tags":"bulk","q":128.24427480916012,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Salt","shelfLife":null,"tags":"spice","q":10.992366412213679,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null}],"collection":[{"type":"ingredient","label":"Basil, Fresh","shelfLife":null,"tags":"produce","q":210.6870229007633,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Black Pepper","shelfLife":null,"tags":"spice","q":4.5801526717557,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Garlic, Clove","shelfLife":null,"tags":"produce","q":10.992366412213679,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Lemon, Juice","shelfLife":null,"tags":"liquid","q":36.6412213740456,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Nutritional Yeast, Flake","shelfLife":null,"tags":"spice","q":36.6412213740456,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Olive Oil","shelfLife":null,"tags":"liquid","q":101.2213740458018,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Pumpkin, Seed, Raw","shelfLife":null,"tags":"bulk","q":128.24427480916012,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Salt","shelfLife":null,"tags":"spice","q":10.992366412213679,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null}]},{"type":"recipe","label":"Sunflower Lemon Date - Cup","shelfLife":3,"tags":null,"q":10,"uom":"count","forceUomsParsed":["count"],"tree":[{"type":"recipe","label":"Sunflower Lemon Date - Sauce","shelfLife":9,"tags":null,"q":810,"uom":"g","forceUomsParsed":["g"],"tree":[{"type":"ingredient","label":"Salt","shelfLife":null,"tags":"spice","q":7.34360834097,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Black Pepper","shelfLife":null,"tags":"spice","q":2.20308250221,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Sunflower Seed, Raw","shelfLife":null,"tags":"bulk","q":44.7960108834,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Date, Paste","shelfLife":null,"tags":"bulk","q":139.528558476,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Lemon, Juice","shelfLife":null,"tags":"liquid","q":108.68540342400001,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Olive Oil","shelfLife":null,"tags":"liquid","q":181.387126035,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Water","shelfLife":null,"tags":"liquid","q":326.056210353,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null}],"notes":null}],"collection":[{"type":"recipe","label":"Sunflower Lemon Date - Sauce","shelfLife":9,"tags":null,"q":810,"uom":"g","forceUomsParsed":["g"],"tree":[{"type":"ingredient","label":"Salt","shelfLife":null,"tags":"spice","q":7.34360834097,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Black Pepper","shelfLife":null,"tags":"spice","q":2.20308250221,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Sunflower Seed, Raw","shelfLife":null,"tags":"bulk","q":44.7960108834,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Date, Paste","shelfLife":null,"tags":"bulk","q":139.528558476,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Lemon, Juice","shelfLife":null,"tags":"liquid","q":108.68540342400001,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Olive Oil","shelfLife":null,"tags":"liquid","q":181.387126035,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Water","shelfLife":null,"tags":"liquid","q":326.056210353,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null}],"notes":null}]},{"type":"recipe","label":"Sunflower Lemon Date - Sauce","shelfLife":9,"tags":null,"q":810,"uom":"g","forceUomsParsed":["g"],"tree":[{"type":"ingredient","label":"Black Pepper","shelfLife":null,"tags":"spice","q":2.20308250221,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Date, Paste","shelfLife":null,"tags":"bulk","q":139.528558476,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Lemon, Juice","shelfLife":null,"tags":"liquid","q":108.68540342400001,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Olive Oil","shelfLife":null,"tags":"liquid","q":181.387126035,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Salt","shelfLife":null,"tags":"spice","q":7.34360834097,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Sunflower Seed, Raw","shelfLife":null,"tags":"bulk","q":44.7960108834,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Water","shelfLife":null,"tags":"liquid","q":326.056210353,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null}],"collection":[{"type":"ingredient","label":"Black Pepper","shelfLife":null,"tags":"spice","q":2.20308250221,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Date, Paste","shelfLife":null,"tags":"bulk","q":139.528558476,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Lemon, Juice","shelfLife":null,"tags":"liquid","q":108.68540342400001,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Olive Oil","shelfLife":null,"tags":"liquid","q":181.387126035,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Salt","shelfLife":null,"tags":"spice","q":7.34360834097,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Sunflower Seed, Raw","shelfLife":null,"tags":"bulk","q":44.7960108834,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Water","shelfLife":null,"tags":"liquid","q":326.056210353,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null}]}]},{"renderer":"detailed/productionDetails","title":"Production Details","date":"2018-10-20T21:44:14.771Z","collection":[{"type":"product","label":"Pepita Pesto Wrap","shelfLife":5,"tags":null,"q":10,"uom":"count","forceUomsParsed":["count"],"tree":[{"type":"ingredient","label":"Collard Green, Raw","shelfLife":null,"tags":"produce","q":20,"uom":"count","forceUomsParsed":["count"],"tree":[],"notes":null},{"type":"recipe","label":"Pepita Pesto - Spread","shelfLife":4,"tags":null,"q":540,"uom":"g","forceUomsParsed":["g"],"tree":[{"type":"ingredient","label":"Pumpkin, Seed, Raw","shelfLife":null,"tags":"bulk","q":128.24427480916012,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Salt","shelfLife":null,"tags":"spice","q":10.992366412213679,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Black Pepper","shelfLife":null,"tags":"spice","q":4.5801526717557,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Garlic, Clove","shelfLife":null,"tags":"produce","q":10.992366412213679,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Basil, Fresh","shelfLife":null,"tags":"produce","q":210.6870229007633,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Olive Oil","shelfLife":null,"tags":"liquid","q":101.2213740458018,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Lemon, Juice","shelfLife":null,"tags":"liquid","q":36.6412213740456,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Nutritional Yeast, Flake","shelfLife":null,"tags":"spice","q":36.6412213740456,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null}],"notes":null},{"type":"recipe","label":"Italian Sausage - Spread","shelfLife":7,"tags":null,"q":680,"uom":"g","forceUomsParsed":["g"],"tree":[{"type":"ingredient","label":"Sunflower Seed, Raw","shelfLife":null,"tags":"bulk","q":368.3870967741938,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Salt","shelfLife":null,"tags":"spice","q":5.806451612903199,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Black Pepper","shelfLife":null,"tags":"spice","q":2.58064516129016,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Garlic, Clove","shelfLife":null,"tags":"produce","q":5.806451612903199,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Basil, Fresh","shelfLife":null,"tags":"produce","q":58.064516129032,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Tomato, Dried","shelfLife":null,"tags":"bulk","q":161.29032258064518,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Lemon, Juice","shelfLife":null,"tags":"liquid","q":32.903225806451914,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Paprika, Powder","shelfLife":null,"tags":"spice","q":19.354838709677562,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Olive Oil","shelfLife":null,"tags":"liquid","q":25.806451612902958,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null}],"notes":null},{"type":"ingredient","label":"Cabbage, Green","shelfLife":null,"tags":"produce","q":999.9999999999999,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"recipe","label":"Sunflower Lemon Date - Cup","shelfLife":3,"tags":null,"q":10,"uom":"count","forceUomsParsed":["count"],"tree":[{"type":"recipe","label":"Sunflower Lemon Date - Sauce","shelfLife":9,"tags":null,"q":810,"uom":"g","forceUomsParsed":["g"],"tree":[{"type":"ingredient","label":"Salt","shelfLife":null,"tags":"spice","q":7.34360834097,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Black Pepper","shelfLife":null,"tags":"spice","q":2.20308250221,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Sunflower Seed, Raw","shelfLife":null,"tags":"bulk","q":44.7960108834,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Date, Paste","shelfLife":null,"tags":"bulk","q":139.528558476,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Lemon, Juice","shelfLife":null,"tags":"liquid","q":108.68540342400001,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Olive Oil","shelfLife":null,"tags":"liquid","q":181.387126035,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Water","shelfLife":null,"tags":"liquid","q":326.056210353,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null}],"notes":null}],"notes":null}],"collection":[{"type":"ingredient","label":"Collard Green, Raw","shelfLife":null,"tags":"produce","q":20,"uom":"count","forceUomsParsed":["count"],"tree":[],"notes":null},{"type":"recipe","label":"Pepita Pesto - Spread","shelfLife":4,"tags":null,"q":540,"uom":"g","forceUomsParsed":["g"],"tree":[{"type":"ingredient","label":"Pumpkin, Seed, Raw","shelfLife":null,"tags":"bulk","q":128.24427480916012,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Salt","shelfLife":null,"tags":"spice","q":10.992366412213679,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Black Pepper","shelfLife":null,"tags":"spice","q":4.5801526717557,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Garlic, Clove","shelfLife":null,"tags":"produce","q":10.992366412213679,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Basil, Fresh","shelfLife":null,"tags":"produce","q":210.6870229007633,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Olive Oil","shelfLife":null,"tags":"liquid","q":101.2213740458018,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Lemon, Juice","shelfLife":null,"tags":"liquid","q":36.6412213740456,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Nutritional Yeast, Flake","shelfLife":null,"tags":"spice","q":36.6412213740456,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null}],"notes":null},{"type":"recipe","label":"Italian Sausage - Spread","shelfLife":7,"tags":null,"q":680,"uom":"g","forceUomsParsed":["g"],"tree":[{"type":"ingredient","label":"Sunflower Seed, Raw","shelfLife":null,"tags":"bulk","q":368.3870967741938,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Salt","shelfLife":null,"tags":"spice","q":5.806451612903199,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Black Pepper","shelfLife":null,"tags":"spice","q":2.58064516129016,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Garlic, Clove","shelfLife":null,"tags":"produce","q":5.806451612903199,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Basil, Fresh","shelfLife":null,"tags":"produce","q":58.064516129032,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Tomato, Dried","shelfLife":null,"tags":"bulk","q":161.29032258064518,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Lemon, Juice","shelfLife":null,"tags":"liquid","q":32.903225806451914,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Paprika, Powder","shelfLife":null,"tags":"spice","q":19.354838709677562,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Olive Oil","shelfLife":null,"tags":"liquid","q":25.806451612902958,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null}],"notes":null},{"type":"ingredient","label":"Cabbage, Green","shelfLife":null,"tags":"produce","q":999.9999999999999,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"recipe","label":"Sunflower Lemon Date - Cup","shelfLife":3,"tags":null,"q":10,"uom":"count","forceUomsParsed":["count"],"tree":[{"type":"recipe","label":"Sunflower Lemon Date - Sauce","shelfLife":9,"tags":null,"q":810,"uom":"g","forceUomsParsed":["g"],"tree":[{"type":"ingredient","label":"Salt","shelfLife":null,"tags":"spice","q":7.34360834097,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Black Pepper","shelfLife":null,"tags":"spice","q":2.20308250221,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Sunflower Seed, Raw","shelfLife":null,"tags":"bulk","q":44.7960108834,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Date, Paste","shelfLife":null,"tags":"bulk","q":139.528558476,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Lemon, Juice","shelfLife":null,"tags":"liquid","q":108.68540342400001,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Olive Oil","shelfLife":null,"tags":"liquid","q":181.387126035,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null},{"type":"ingredient","label":"Water","shelfLife":null,"tags":"liquid","q":326.056210353,"uom":"g","forceUomsParsed":["g"],"tree":[],"notes":null}],"notes":null}],"notes":null}]}]}]}

const inst = PdfFactory.create();
inst.pdf().pipe(fs.createWriteStream('out.pdf'));
inst.build(data);
