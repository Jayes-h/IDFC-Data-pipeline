const pool = require('../../db/db-config');

async function insertNpaMetrices(data) {
    console.log("insert npa metrices into postgres",data);

    for (const entry of data) {
        await pool.query(

            `INSERT INTO npa_metrics (
                Segment,
                gross_npa_percent,
                net_npa_percent
            ) VALUES ($1, $2, $3)`,
            [
                entry['Segment'],
                parseFloat(entry['Gross_NPA_Percent']),
                parseFloat(entry['Net_NPA_Percent'])
            ]
        );
    }
}

module.exports = { insertNpaMetrices };
