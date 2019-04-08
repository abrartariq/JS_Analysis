const dns = require('dns')
//dns.setServers(['8.8.8.8'])
let accum = []
const getCnames = (err, result) => {
  if (err) {
    // no more records
    console.log(accum)
    return accum
  } else {
    console.log(result)
    return dns.resolveCname(cname, getCnames)
  }
}

//dns.resolveCname('www.yimg.com', getCnames)
dns.resolveCname('www.yahoo.com', getCnames)
dns.resolveAny('www.google.com', getCnames)
dns.resolveAny('www.gstatic.com', getCnames)
