const esprima = require('esprima');
const fs = require('fs');
const path = require('path')

//Reading a File Asynchronously
const readFile = f => new Promise((resolve,reject) =>
    fs.readFile(f,'utf-8', (e,d) => e ? reject(e) : resolve(d) ) )

//Check If URL2 is same same-orgin as that of url1
const isSameOrigin = (url1,url2) => {
    let x = url1.split("//")[1].split(".")[0]
    if (x === "www"){
        let x = url1.split("//")[1].split(".")[1]
    }
    return (String((new URL(url2)).hostname).includes(x)) ? 1: 0;
}

//Convert a File to Esprima Tree
const getTree = data => new Promise((resolve, reject) => {
    try {
        ans = {}    
        ans = esprima.parseScript(data, { comment: true });
        resolve(ans)
    } catch(err) {
        reject(err)
    }
})

//Check if given string is a Valid URL or not
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

//Get all identifiers from a Tree
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

//Categories Given Links into list of services...
const identifyServices = (services,jsLinks) => {
	jsServices = {}
	jsLinks.forEach(link => {
        hostname = (new URL(link)).hostname;
        done = false
		Object.keys(services).forEach(serv => {
			if (services[serv].includes(hostname)){
				done = true;
				Object.prototype.hasOwnProperty.call(jsServices,serv) ? jsServices[serv].push(link) : (jsServices[serv] = [link]);
			}
		})
		if (done === false){
			Object.prototype.hasOwnProperty.call(jsServices,"Other") ? jsServices["Other"].push(link) : (jsServices["Other"] = [link]);
		}
	})
	return jsServices;
}



//Reading a given Directory
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

//Given a file data, identify different services with their Domains.
const JSservices  = (fileData) => {
    services = {}
    data = JSON.parse(fileData)
    data.forEach(i => {
        Object.prototype.hasOwnProperty.call(services, i.categories[0]) ? services[i.categories[0]].push(...i.domains) : (services[i.categories[0]] = [...i.domains])
    })
    return services;
}

//Given a list of links, separate these links..
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

//Given tokens, a token and its quantity, find the token in tokens and increase quantity.
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

//Main Function
const runMe = async () => {
    const args = process.argv;
    if (args.length < 2) {
        console.log("Error: node parseHar.js directory")
    }
    dirName = args[2];
    harFiles = readDir(dirName);
    services = JSservices(await readFile("jsServices.json"))



}

runMe();























//Function for 1 file
const main = async () => {
    try{   
        const args = process.argv;
        if (args.length < 2) {
            console.log("Error: node parseHar.js [har filename]")
        }
        filename = args[2];
        harFiles = readDir("./alexa/")
        tree = await readFile(filename);
		var tokens = JSON.parse(tree);
        // getIdentifiers(tokens);

        //Print First Party Content BreakDown
        // console.log(contentFirstParty);

        //print All Content BreakDown
        // console.log(content);
        
        //Print all First Party Links
        // console.log(LinksFirstParty);

        //Print all Links
        // console.log(allLinks);
        
        //print JS Links
        JSLinks.forEach( l => 
            console.log(l) )
    } catch (err){
        console.log(err)
    }
}

//Function for more file
const main2 = async () => {
    try{   
        const args = process.argv;
        if (args.length < 2) {
            console.log("Error: node parseHar.js [har files Directory name]")
        }
        dirName = args[2];
        harFiles = readDir(dirName);

        services = readJSservices(await readFile("jsServices.txt"))


        harFiles.forEach(async (file) => {
            try{
                const content     = {}
                const allLinks    = []
                const contentFirstParty = {}
                const LinksFirstParty = []
                const JSLinks_nonOrigin = []
                const JSLinks_sameOrigin = []
                tree = await readFile(file);
                var tokens = JSON.parse(tree);
                getIdentifiers(tokens,content,allLinks,contentFirstParty,LinksFirstParty,JSLinks_sameOrigin,JSLinks_nonOrigin);

                jsSer = identifyServices(services,JSLinks_nonOrigin);
                // console.log(  file.split("/")[7], 
                //               JSLinks_nonOrigin.length+JSLinks_sameOrigin.length,
                //               JSLinks_sameOrigin.length ,
                //               JSLinks_nonOrigin.length, 
                //               jsSer["Analytics"].length || 0,
                //               jsSer["Advertising"].length || 0 ,
                //               jsSer["Services_Widgets"].length || 0, 
                //               jsSer["Social_Networking"].length || 0, 
                //               jsSer["CDN"].length || 0, 
                //               jsSer["Cookie"].length || 0, 
                //               jsSer["Programming_Framework"].length || 0 ,
                //               jsSer["Other"].length || 0 
                //             )
                serv = ["Analytics","Advertising","Services_Widgets","Social_Networking","Cookie","CDN","Programming_Framework","Other"]
                serv.forEach(se => jsSer[se].forEach(a => console.log( se + " ", file.split('/')[7].slice(0,-4), a.split('/')[a.split('/').length -1])))
                // JSLinks_sameOrigin.forEach(a => {
                //     console.log(file, a, "Same-Origin");
                // })
                // JSLinks_nonOrigin.forEach(a => {
                //     console.log(file,a,jsSer[a])
                // })

                // Object.keys(jsSer).forEach(a => {
                //     console.log(jsSer[a].length);
                // })

            } catch(err){
                console.log(err)
            }

        })

    } catch (err){
        console.log(err)
    }
}

