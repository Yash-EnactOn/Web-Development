const accountId = 132611
let accountEmail = "fnkslnvslkn@gmail.com"
var accountPassword = "1335624"
// please do not use var
// because of issue in block scope and function scope

accountCity = "Surat"
let accountState; //undefined

// accountId = 1325 // not allowed because of const

accountEmail = "yt@yt.com"
accountPassword = "214114"
accountCity = "delhi"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

