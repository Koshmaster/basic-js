const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof(sampleActivity) != 'string' || isNaN(Number(sampleActivity)) == true)
        return false
    if (Number(sampleActivity) < 1)
        return false
    if (Number(sampleActivity) > 15)
        return false
    return Math.trunc(Math.log(15 / Number(sampleActivity)) / (0.693 / 5730)) + 1
};
