const async = require('async');

const models = require('../models/allModels');

const bins = [
    new models.Bins({ council: 'manchester', packaging: 'plastic', bin: 'brown' }),
    new models.Bins({ council: 'traffod', packaging: 'glass', bin: 'blue' }),
    new models.Bins({ council: 'salford', packaging: 'metal', bin: 'black' })
];

const packaging = [
    new models.Packaging({ "packaging": "plastique", "material": "plastic" }),
    new models.Packaging({ "packaging": "carton", "material": "paper" }),
    new models.Packaging({ "packaging": "bottle-glass", "material": "glass" })
]

const postcodes = [
    new models.Postcodes({ postcode: "M5", council: "Salford" }),
    new models.Postcodes({ postcode: "M24", council: "Oldham" }),
    new models.Postcodes({ postcode: "M60", council: "Manchester" })
]

const collections = [
    new models.Collections({
        council: 'bolton',
        day: 15,
        month: 'June',
        year: 2017,
        bins: ['green', 'beige', 'burgundy'],
    }),
    new models.Collections({
        council: 'manchester',
        day: 6,
        month: 'July',
        year: 2017,
        bins: ['green', 'brown']
    }),
    new models.Collections({
        council: 'salford',
        day: 14,
        month: 'July',
        year: 2017,
        bins: ['pink', 'brown']
    })
]

const recyclingCentre = [
    new models.RecyclingCentres({
        name: 'Longley Lane Recycling Centre',
        address: 'Longley Lane Recycling Centre, Longley Lane, Sharston, M22 4RQ',
        postcode: 'M22 4RQ'
    }),
    new models.RecyclingCentres({
        name: 'Sandfold Lane Recycling Centre',
        address: 'Sandfold Lane Recycling Centre, Sandfold Lane, Manchester, M19 3BJ',
        postcode: 'M19 3BJ'
    }),
    new models.RecyclingCentres({
        name: 'Reliance Street Recycling Centre',
        address: 'Reliance Street Recycling Centre, Reliance Street, Manchester, M40 3EZ',
        postcode: 'M40 3EZ'
    })
];


function saveBins(cb) {
    models.Bins.create(bins, (err) => {
        if (err) cb(err);
        else cb()
    });
}

function saveCollections(cb) {
    models.Collections.create(collections, (err) => {
        if (err) cb(err);
        else cb()
    });
}

function savePackaging(cb) {
    models.Packaging.create(packaging, (err) => {
        if (err) cb(err);
        else cb()
    });
}

function savePostcodes(cb) {
    models.Postcodes.create(postcodes, (err) => {
        if (err) cb(err);
        else cb()
    });
}

function saveRecyclingCentres(cb) {
    models.RecyclingCentres.create(recyclingCentre, (err) => {
        if (err) cb(err);
        else cb()
    });
}

function saveTestData(cb) {
    async.waterfall([saveBins, saveCollections, savePackaging, savePostcodes, saveRecyclingCentres], (err, ids) => {
        if (err) console.log(err);
        else {
            console.log('Test data loaded successfully');
            cb(ids);
        }
    })
}

module.exports = saveTestData;