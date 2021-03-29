module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let tower = {
        turns: 2**disksNumber - 1,
        seconds: Math.trunc((2**disksNumber - 1) / (turnsSpeed / 3600))
    };
    return tower
};
