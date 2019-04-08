const esprima = require('esprima');
const fs = require('fs');
const path = require('path')

const readFile = f => new Promise((resolve,reject) =>
    fs.readFile(f,'utf-8', (e,d) => e ? reject(e) : resolve(d) ) )

const getTree = data => new Promise((resolve, reject) => {
    try {
        ans = {}    
        ans = esprima.parseScript(data, { comment: true });
        resolve(ans)
    } catch(err) {
        reject(err)
    }
})
const isURL = (str) => {
  var pattern = new RegExp('^((ft|htt)ps?:\\/\\/)?'+ // protocol
                          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name and extension
                          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
                          '(\\:\\d+)?'+ // port
                          '(\\/[-a-z\\d%@_.~+&:]*)*'+ // path
                          '(\\?[;&a-z\\d%@_.,~+&:=-]*)?'+ // query string
                          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return pattern.test(str);
}
const variableDec = []
const functionExp = []
const identifiers = {}
const literals  = []
const getIdentifiers = tree => {
    // console.log(tree)
    Object.keys(tree).forEach(a => {
    	if (a === "id" && tree[a]) {
    		variableDec.push(tree.id)
    	} else if(a === "id"){
    		functionExp.push(tree.params)
    	}
        else if (Array.isArray(tree[a])){
        	tree[a].forEach(b => {
                if (b) {
                  getIdentifiers(b);
                }
        	})
        } else if (tree[a] instanceof Object){
            getIdentifiers(tree[a]);
        } else if (a === "type" && tree.type === "Identifier"){
    		if (Object.prototype.hasOwnProperty.call(identifiers,tree.name)){
                identifiers[tree.name] += 1 
            } else {
                identifiers[tree.name] = 1
            }
        } else if(a === "type" && tree.type === "Literal"){
        	literals.push(tree.value);
        }
    })                   
}


const findObj = (tokens, obj, num) => {
    Object.keys(tokens).forEach(a => {
        Object.keys(tokens[a]).forEach(b => {
            Object.keys(tokens[a][b]).forEach(c => {
                if (c === obj){
                    tokens[a][b][c] += num;
                }
            })
        })
    })
}

const sepLinks = allLinks => {
    types = 
        {
          Image: {
            png: [],
            jpg: [],
            jpeg: [],
            exif: [],
            bmp:  [],
            gif:  [],
            ico:  []
          },
          Script: {
            js: [],
            php:[]
          },
          CSS: {
            css: []
          },
          HTML: {
            html: []
          },
          Others: {
            other: []
          }
        }
    allLinks.forEach(a => {
        done = false
        Object.keys(types).forEach(type => {
            Object.keys(types[type]).forEach(ext => {
                if (a.includes("."+ext)){
                    types[type][ext].push(a)
                    done = true
                }
            })
        })
        if (done === false) {
            types.Others.other.push(a)
        }
    })
    return types;
}
const main = async () => {
    try{   
        const args = process.argv;
        filename = args[2];

        tree = await getTree(await readFile(filename));
        getIdentifiers(tree);
        // console.log("Variables: " ,variableDec)
        // console.log("Function Parameters", functionExp)
        // console.log("Other Identifiers:",  identifiers)
        // console.log("String Literals:", literals)
        //
		var tokens = JSON.parse(await readFile(args[3]));
        Object.keys(identifiers).forEach(a => {
            findObj(tokens,a,identifiers[a]);
        })

        Object.keys(tokens).forEach(a => {
            Object.keys(tokens[a]).forEach(b => {
                Object.keys(tokens[a][b]).forEach(c => {
                    if (tokens[a][b][c] > 0){
                        console.log(a,b,c , tokens[a][b][c]);
                    }
                })
            })
        })
        allLinks = []
        literals.forEach(a => {
            
            try{
                if (true || (typeof a === 'string' || a instanceof String)){
                    if (isURL(a)){
                        allLinks.push(a);
                    }
                }
            } catch(_){
            }
        })
        console.log(sepLinks(allLinks));
    } catch (err){
        console.log(err)
    }
}



var readDir = (dir, filelist) => {
    files = fs.readdirSync(dir)
    files.forEach(file => {
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
            filelist = readDir(path.join(dir, file), filelist)
        }
        else {
            filelist.push(path.join(dir, file))
        }
    })
    return filelist
}


const main2 = async () => {
    try{
        list = []
        readDir("./SameOrigin/", list)
        list.forEach((a) => {
            console.log(a);
        })
    } catch(err) {
        console.log(err)
    }
}

main2();
