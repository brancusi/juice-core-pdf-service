'use strict';

const fs = require('fs');
const PdfFactory = require('./factories/pdf-factory')();

const data = {
    "date": "6/1/17",
    "ingredients": [
        {
            "label": "Kale",
            "q": "35.3",
            "uom": "lb"
        },
        {
            "label": "Turmeric Powder",
            "q": "0.7",
            "uom": "gal"
        },
        {
            "label": "Apple",
            "q": "68.0",
            "uom": "lb"
        },
        {
            "label": "Celery",
            "q": "0.0",
            "uom": "oz"
        },
        {
            "label": "Carrot",
            "q": "600.0",
            "uom": "lb"
        },
        {
            "label": "Ginger",
            "q": "220.8",
            "uom": "lb"
        },
        {
            "label": "Beet",
            "q": "128.0",
            "uom": "lb"
        },
        {
            "label": "Coconut",
            "q": "396.0",
            "uom": "count"
        }
    ],
    "recipes": [
        {
            "label": "Kale Juice",
            "q": "0.4",
            "uom": "gal"
        },
        {
            "label": "Apple Juice",
            "q": "0.5",
            "uom": "gal"
        },
        {
            "label": "Celery Juice",
            "q": "1.5",
            "uom": "gal"
        },
        {
            "label": "Carrot Juice",
            "q": "2.3",
            "uom": "gal"
        },
        {
            "label": "Ginger Juice",
            "q": "1.7",
            "uom": "gal"
        },
        {
            "label": "Beet Juice",
            "q": "1.0",
            "uom": "qt"
        },
        {
            "label": "Coconut Cream",
            "q": "1.2",
            "uom": "qt"
        }
    ],
    "products": [
        {
            "label": "Super Kale - 8oz",
            "q": 28,
            "note": "The bentonite clay needs to be added last and mixed very well, be added last and mixed very well.",
            "children": [
                {
                    "label": "Kale Juice",
                    "q": "1.8",
                    "uom": "gal"
                },
                {
                    "label": "Turmeric Powder",
                    "q": "0.6",
                    "uom": "cup"
                }
            ]
        },
        {
            "label": "Super Pow - 16oz",
            "q": 27,
            "note": "The bentonite clay needs to be added last and mixed very well, be added last and mixed very well.",
            "children": [
                {
                    "label": "Kale Juice",
                    "q": "1.7",
                    "uom": "gal"
                },
                {
                    "label": "Apple Juice",
                    "q": "1.7",
                    "uom": "gal"
                },
                {
                    "label": "Turmeric Powder",
                    "q": "1.1",
                    "uom": "cup"
                }
            ]
        },
        {
            "label": "72 And Sunny",
            "q": 62,
            "note": "The bentonite clay needs to be added last and mixed very well, be added last and mixed very well.",
            "children": [
                {
                    "label": "Kale Juice",
                    "q": "1.0",
                    "uom": "gal"
                },
                {
                    "label": "Apple Juice",
                    "q": "1.0",
                    "uom": "gal"
                },
                {
                    "label": "Celery Juice",
                    "q": "1.5",
                    "uom": "gal"
                },
                {
                    "label": "Turmeric Powder",
                    "q": "1.3",
                    "uom": "cup"
                }
            ]
        },
        {
            "label": "Carrot - 8oz",
            "q": 72,
            "note": "The bentonite clay needs to be added last and mixed very well, be added last and mixed very well.",
            "children": [
                {
                    "label": "Carrot Juice",
                    "q": "4.5",
                    "uom": "gal"
                }
            ]
        },
        {
            "label": "Carrot - 16oz",
            "q": 73,
            "note": "The bentonite clay needs to be added last and mixed very well, be added last and mixed very well.",
            "children": [
                {
                    "label": "Carrot Juice",
                    "q": "9.1",
                    "uom": "gal"
                }
            ]
        },
        {
            "label": "Ginger Carrot - 8oz",
            "q": 82,
            "note": "The bentonite clay needs to be added last and mixed very well, be added last and mixed very well.",
            "children": [
                {
                    "label": "Ginger Juice",
                    "q": "5.1",
                    "uom": "gal"
                },
                {
                    "label": "Carrot Juice",
                    "q": "5.1",
                    "uom": "gal"
                }
            ]
        },
        {
            "label": "Ginger Beet - 16oz",
            "q": 56,
            "note": "The bentonite clay needs to be added last and mixed very well, be added last and mixed very well.",
            "children": [
                {
                    "label": "Ginger Juice",
                    "q": "3.5",
                    "uom": "gal"
                },
                {
                    "label": "Beet Juice",
                    "q": "3.5",
                    "uom": "gal"
                }
            ]
        },
        {
            "label": "Cacao Coconut - 8oz",
            "q": 33,
            "note": "The bentonite clay needs to be added last and mixed very well, be added last and mixed very well.",
            "children": [
                {
                    "label": "Coconut Cream",
                    "q": "1.5",
                    "uom": "gal"
                },
                {
                    "label": "Turmeric Powder",
                    "q": "0.5",
                    "uom": "gal"
                }
            ]
        }
    ]
}

console.log(JSON.stringify(data));

const inst = PdfFactory.create();
inst.pdf().pipe(fs.createWriteStream('out.pdf'));
inst.build(data);
