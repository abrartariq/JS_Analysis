const esprima = require('esprima');
const fs = require('fs');


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
        substr = [".png",".jpeg",".jpg",".html",".json",".js",".css",".gif","http","www.",".com",".org"]
        literals.forEach(a => {
            if ( (typeof a === 'string' || a instanceof String)){
                substr.forEach(b => {
                    if (a.includes(b) && a.length > 10 && a.length < 100){
                        console.log(a)
                    }
                })
            }
        })
    } catch (err){
        console.log(err)
    }
}


main()
