
// Solutions (ordered by best practice):

function printerError(s) {
    return s.match(/[^a-m]/g).length + "/" + s.length;
}

///////////////////////////////////

function printerError2(s) {
    // your code
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }
    return count+"/"+s.length;
}

//////////////////////////////////

function printerError3(s) {
    var strLength = s.length;
    var sArr = s.split('');
    var errors = 0;


    for(let i = 0; i < sArr.length; i++) {
        var sToAscii = sArr[i].charCodeAt(0);
        if (sToAscii < 97 || sToAscii > 109 ) {
          errors++;
        }

     }
    var returnCode =  errors + '/' + strLength;

    return returnCode;

    // your code
}
