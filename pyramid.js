//process.stdin.resume();
//process.stdin.setEncoding('ascii');
//
//var _stdin = "";
//
//process.stdin.on('data', function(data) {
//   _stdin += data;
//    //console.log(data);
//});
//
//process.stdin.on('end', function() {
//    var num = parseInt(_stdin.trim().replace('D', ""));
//    //console.log("num: ", num);
//    process.stdout.write("\n");
//    for(var i = 0; i <= num; i++) {
//        for(var j = 0; j < i; j++) {
//            process.stdout.write("#");
//        }
//        process.stdout.write("\n");
//    }
//});


//process.stdin.resume();
//process.stdin.setEncoding('ascii');
//
//var _stdin_ = "";
//
//
//process.stdin.on('data', function(data) {
//    _stdin_=data;
//});
//
//process.stdin.on('end', function() {
//    var _stdin_arr = _stdin_.split('\n');
//    var num = parseInt(_stdin_arr[0].trim());
//    var str = "";
//    for(var i = 0; i < num; i++) {
//        str += '#';
//        process.stdout.write(str + '\n');
//    }
//
//});


function sum(size, arr) {
    var result = 0;
    for(var i = 0; i < size; i++) {
        result += arr[i];
    }
    return size;
}


console.log(sum(3, [1, 2,3]));