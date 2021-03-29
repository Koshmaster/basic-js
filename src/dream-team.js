module.exports = function createDreamTeam(members) {
    if (members == null)
        return false
    let str1 = ''
    let str = ''
    for (let i = 0; i < members.length; i++) {
    let j  = 0 
        if (typeof (members[i]) == 'string') {
            str += members[i]
            while (str.charAt(j) == ' ')
                j++
            str1 += str.charAt(j)
            str = str.substring(str.length)
        }
    }   
    str1 = str1.toUpperCase()
    let arr = []
    for (let i = 0; i < str1.length; i++)
        arr[i] = str1[i]
    arr = arr.sort()
    let final = ''
    for (let i = 0; i < arr.length; i++)
        final += arr[i]
    return final
};
