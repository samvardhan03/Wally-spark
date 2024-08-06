const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

exports.getSalesData = (req, res) => {
    const results = [];
    fs.createReadStream(path.join(__dirname, '../data/sales_data.csv'))
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            res.json(results);
        });
};

exports.getInventoryData = (req, res) => {
    const results = [];
    fs.createReadStream(path.join(__dirname, '../data/inventory_data.csv'))
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            res.json(results);
        });
};

exports.getPromotionData = (req, res) => {
    const results = [];
    fs.createReadStream(path.join(__dirname, '../data/promotion_data.csv'))
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            res.json(results);
        });
};
