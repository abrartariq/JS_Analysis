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
            	getIdentifiers(b);
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

const main = async () => {
    try{   
        const args = process.argv;
        filename = args[2];

        tree = await getTree(await readFile(filename));
        getIdentifiers(tree);
        console.log("------------------------------------------------------------------")
        console.log("Variables: " ,variableDec)
        console.log("------------------------------------------------------------------")
        console.log("Function Parameters", functionExp)
        console.log("------------------------------------------------------------------")
        console.log("Other Identifiers:",  identifiers)
        console.log("------------------------------------------------------------------")
        console.log("String Literals:", literals)
    } catch (err){
        console.log(err)
    }
}


main()
