const esprima = require('esprima');
const fs = require('fs');
const path = require('path')
const urlExists = require("url-exists");

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

	if ((str.includes("http") && str.length < 9)|| (str.includes(":") && !str.includes("\/"))) { return false}
	var validUrl = require('valid-url');
	if (validUrl.isUri(str)){
		return true;
	} 
	else {
		return false;
	}
}


const getIdentifiers = (tree,dict) => {
    Object.keys(tree).forEach(a => {
    	if (Array.isArray(tree[a])){
        	tree[a].forEach(b => {
                if (b) {
                  getIdentifiers(b,dict);
                }
        	})
        } else if (tree[a] instanceof Object){
            getIdentifiers(tree[a],dict);
        } else if (a === "type" && tree.type === "Identifier"){
    		if (Object.prototype.hasOwnProperty.call(dict.identifiers,tree.name)){
                dict.identifiers[tree.name] += 1 
            } else {
                dict.identifiers[tree.name] = 1
            }
        }
    })                   
}


//Given the tree, Returns Number of Variable Declarations in JS File.
const findNumOfVariables = (tree) => {
    let numOfVar = 0;
    Object.keys(tree).forEach(a => {
        if (Array.isArray(tree[a])){
            tree[a].forEach(b => {numOfVar += b ? findNumOfVariables(b) : 0;})
        } else if (tree[a] instanceof Object){
            numOfVar +=  findNumOfVariables(tree[a]);
        } else if (a === "type" && tree.type === "VariableDeclaration"){
            numOfVar += 1;
        }
    })   
    return numOfVar;
}


//Given the tree, Returns Number of Function Declarations in JS File.
const findNumOfFunctions = (tree) => {
    let numOfVar = 0;
    Object.keys(tree).forEach(a => {
        if (Array.isArray(tree[a])){
            tree[a].forEach(b => {numOfVar += b ? findNumOfFunctions(b) : 0;})
        } else if (tree[a] instanceof Object){
            numOfVar +=  findNumOfFunctions(tree[a]);
        } else if (a === "type" && (tree.type === "ArrowFunctionExpression" ||
                                    tree.type === "FunctionDeclaration"       )){
            numOfVar += 1;
        }
    })   
    return numOfVar;
}

//Given the tree, Returns all String Literals in JS File.
const getAllStringLiterals = (tree) => {
    let literals = [];
    Object.keys(tree).forEach(a => {
        if (Array.isArray(tree[a])){
            tree[a].forEach(b => { if (b) { literals.push(...getAllStringLiterals(b)) } })
        } else if (tree[a] instanceof Object){
            literals.push(...getAllStringLiterals(tree[a]));
        } else if ( a === "type"  &&
                    tree.type === "Literal" &&
                    (tree.value instanceof String || typeof tree.value === "string" ) ) {
            literals.push(tree.value);
        }
    })   
    return literals;
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

//Not Working Correctly
const jsServiceName = (map,file) => {
    const site = file.split('/')[1]
    const name = file.split('/')[2]

    var serv = "Other";
    const x = map.filter(a => (a.Name === name && a.JS === site));
    if (x.length){
        return x[0].Service;
    }
    else{
        return serv;
    }
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
        readDir("./Non-Origin/", list)

        const jsMapSer = await readFile("jsMapServ.json");
        var mapping = JSON.parse(jsMapSer);

        list.forEach(async (a) => {
        	try{
				let diction = {
					variableDec: 0,
					identifiers: {},
					literals : [],
					funcDec : 0
				}
				tree = await getTree(await readFile(a));
	        	getIdentifiers(tree,diction);
	        	
	        	var tokens = JSON.parse(await readFile("tokens.json"));
		        Object.keys(diction.identifiers).forEach(a => {
		            // console.log(a)
		            findObj(tokens,a,diction.identifiers[a]);
		        })

                console.log(a,jsServiceName(mapping,a))
		        // Object.keys(tokens).forEach(t => {
		        //     Object.keys(tokens[t]).forEach(b => {
		        //         console.log(a,t,b,Object.values(tokens[t][b]).reduce((x,y) => x+y))
		        //         // Object.keys(tokens[t][b]).forEach(c => {
		        //         //     if (tokens[t][b][c] > 0){
		        //         //         console.log(a,t,b,c , tokens[t][b][c]);
		        //         //     }
		        //         // })
		        //     })
		        // })
			        	
	        	// allUrls = getAllStringLiterals(tree).filter(a => isURL(a));
	            // console.log(a,findNumOfVariables(tree),findNumOfFunctions(tree),allUrls.length);
        	} catch(err) {
        		// console.log(err)
          	}
        })
    } catch(err) {
        console.log(err)
    }
}

main2();
