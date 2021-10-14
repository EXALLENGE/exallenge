function convertTrase(trase) {
    trase = trase.split('\n')
    errMsg = trase[0]
    lineError = trase[1].split(':')
    lineError = lineError[lineError.length - 2]
    errMsg += `\nОшибка произошла на строчке ${lineError}`
    return errMsg
}