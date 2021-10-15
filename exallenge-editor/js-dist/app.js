function convertTrase(trase) {
    trase = trase.split('\n')
    errMsg = trase[0]
    lineError = trase[1].split(':')
    lineError = lineError[lineError.length - 2]
    errMsg += `\nОшибка произошла на строчке ${lineError}`
    return errMsg
}

function req(){
    fetch('https://4cd8-178-176-77-218.ngrok.io').then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data);
      }).catch(function() {
        console.log("Booo");
      });
}

req()