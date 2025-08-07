
// Clean and transform data
function cleanAndTransform(data) {

    return data.map(entry => {
        console.log("clean and transform");
        const cleaned = {};
        for (let key in entry) {
            let value = entry[key];
            if (typeof value === 'string') {
                value = value.replace( /,/g, '').trim();
                // value = value.replace(/[^\d.-]/g, '').trim(); // Remove %, +, commas, etc.

                cleaned[key] = isNaN(value) ? value : Number(value);
            } else {
                cleaned[key] = value;
            }
        }
        return cleaned;
    });
}

module.exports= { cleanAndTransform};