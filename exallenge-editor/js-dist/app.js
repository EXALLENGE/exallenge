function convertTrase(trase) {
    trase = trase.split('\n')
    errMsg = trase[0]
    lineError = trase[1].split(':')
    lineError = lineError[lineError.length - 2]
    errMsg += `\nОшибка произошла на строчке ${lineError}`
    return errMsg
}

function taskSuccessSubmit(task){
    fetch(`https://quiet-stream-57326.herokuapp.com/success-submit/${task}/${localStorage.getItem('telegramID')}`).then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data);
      }).catch(function() {
        console.log("Booo");
      });
}
