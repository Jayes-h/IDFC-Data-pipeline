const pool = require('../../db/db-config');

async function insertSharePrice(data) {
    console.log("insert share price into postgres");

    for (const entry of data) {
        await pool.query(
            `INSERT INTO shareprice (
                month,
                bse_high,
                bse_low,
                bse_volume,
                nse_high,
                nse_low,
                nse_volume,
                
            ) VALUES ($1, $2, $3, $4)`,
            [
                parseInt(entry['Month ']),
                parseFloat(entry['BSE_High']),
                parseFloat(entry['BSE_Low']),
                parseFloat(entry['BSE_Volume']),
                parseFloat(entry['NSE_High']),
                parseFloat(entry['NSE_Low']),
                parseFloat(entry['NSE_Volume'])
            ]
        );
    }
}

module.exports = { insertSharePrice };
