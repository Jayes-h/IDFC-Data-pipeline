const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const pool = require('./db/db-config');
const DATA_DIR = path.join(__dirname, 'data');
const {loadCSV} = require('./etl/extract');
const {cleanAndTransform} = require('./etl/transform');
const {insertCapitalData} = require('./etl/load data/insertCapitalData');
const {insertDepositMetrics} = require('./etl/load data/insertDepositMetrics');
const {insertFinancials} = require('./etl/load data/insertFinancials');
const {insertLibilities} = require('./etl/load data/insertLibilities');
const {insertLoanDistribution} = require('./etl/load data/insertLoanDistribution');
const {insertNpaMetrices} = require('./etl/load data/insertNpaMetrices');
const {insertProfitability} = require('./etl/load data/insertProfitability');
const {insertSharePrice} = require('./etl/load data/insertSharePrice');


// Run the pipeline
async function runPipeline() {
    console.log("run pipeline01");
    const files = [
        // 'financials.csv',
        // 'liabilities.csv',
        // 'loan_distribution.csv',
        // 'npa_metrics.csv',
        // 'profitability.csv',
        'shareprice.csv',
    ];
console.log("run pipeline");
    for (const file of files) {
        try {
            const raw = await loadCSV(file);
            const cleaned = cleanAndTransform(raw);
            console.log(`Processed ${file}: ${cleaned.length} records`);

            // Optional: write output to JSON
            fs.writeFileSync(path.join(DATA_DIR, file.replace('.csv', '.json')), JSON.stringify(cleaned, null, 2));

            // Insert capital.csv into DB
            if (file === 'capital.csv') {
                await insertCapitalData(cleaned);
                console.log(`Inserted ${file} into database.`);
            }
            if (file === 'deposit_metrics.csv') {
                await insertDepositMetrics(cleaned);
                console.log(`Inserted ${file} into database.`);
            }

            if (file === 'financials.csv') {
                await insertFinancials(cleaned);
                console.log(`Inserted ${file} into database.`);
            }

            if (file === 'liabilities.csv') {
                await insertLibilities(cleaned);
                console.log(`Inserted ${file} into database.`);
            }

            if (file === 'loan_distribution.csv') {
                await insertLoanDistribution(cleaned);
                console.log(`Inserted ${file} into database.`);
            }

            if (file === 'npa_metrics.csv') {
                await insertNpaMetrices(cleaned);
                console.log(`Inserted ${file} into database.`);
            }

            if (file === 'profitability.csv') {
                await insertProfitability(cleaned);
                console.log(`Inserted ${file} into database.`);
            }

            if (file === 'shareprice.csv') {
                await insertSharePrice(cleaned);
                console.log(`Inserted ${file} into database.`);
            }

        } catch (err) {
            console.error(`Error processing ${file}:`, err);
        }
    }
}

runPipeline();
