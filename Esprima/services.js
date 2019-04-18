const esprima = require('esprima');
const fs = require('fs');
const path = require('path')

const readFile = f => new Promise((resolve,reject) =>
    fs.readFile(f,'utf-8', (e,d) => e ? reject(e) : resolve(d) ) )



const isSameOrigin = (url1,url2) => {
    let x = url1.split("//")[1].split(".")[0]
    if (x === "www"){
        let x = url1.split("//")[1].split(".")[1]
    }
    return (String((new URL(url2)).hostname).includes(x)) ? 1: 0;

}
const getIdentifiers = (tree,content,allLinks,contentFirstParty,LinksFirstParty,JSLinks_sameOrigin,JSLinks_nonOrigin) => {

    main_url =tree.log.pages[0].title

    Object.keys(tree).forEach(a => {
        Object.keys(tree[a]).forEach(b => {
            if (b == "entries"){
                Object.keys(tree[a][b]).forEach(c => {
                    allLinks.push(tree[a][b][c].request.url)
                    cur_url = tree[a][b][c].request.url;
                    if (tree[a][b][c].response.headers.filter(a => a.name === "content-type").length) {
                        ext = tree[a][b][c].response.headers.filter(a => a.name === "content-type")
                        // console.log(ext)
                        if (Object.prototype.hasOwnProperty.call(content,ext[0].value)){
                            content[ext[0].value] += 1 
                            if (isSameOrigin(main_url, cur_url)){
                                if (ext[0].value.includes("javascript")) {
                                    JSLinks_sameOrigin.push(tree[a][b][c].request.url)
                                }
                                contentFirstParty[ext[0].value] += 1
                                LinksFirstParty.push(tree[a][b][c].request.url)
                            } else {
                                if (ext[0].value.includes("javascript")) {
                                    JSLinks_nonOrigin.push(tree[a][b][c].request.url)
                                }
                            }
                        } else {
                            content[ext[0].value] = 1
                            if (isSameOrigin(main_url, cur_url)){
                                contentFirstParty[ext[0].value] = 1
                                LinksFirstParty.push(tree[a][b][c].request.url)
                                if (ext[0].value.includes("javascript")) {
                                    JSLinks_sameOrigin.push(tree[a][b][c].request.url)
                                }
                            } else {
                                if (ext[0].value.includes("javascript")) {
                                    JSLinks_nonOrigin.push(tree[a][b][c].request.url)
                                }
                            }
                        }
                    }
                })
            }
        })
    })
}


const JSservices  = (fileData) => {
    services = {}
    data = JSON.parse(fileData)
    data.forEach(i => {
        Object.prototype.hasOwnProperty.call(services, i.categories[0]) ? services[i.categories[0]].push(...i.domains) : (services[i.categories[0]] = [...i.domains])
    })
    return services;
}


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



const jsServiceName = (map,file) => {
    return "Other";
}

const a = async () => {
	try{
        const args = process.argv;
        if (args.length < 2) {
            console.log("Error: node parseHar.js [har files Directory name]")
        }
        dirName = args[2];
        harFiles = readDir(dirName);

        services = JSservices(await readFile("jsServices.json"))
        services["Other"] = []
        toPrint = {}

        const jsMapSer = await readFile("jsMapServ.json");
        var mapping = JSON.parse(jsMapSer);

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
                // console.log(jsSer)
                state = ""

                Object.keys(services).forEach(a => {
                	// console.log(a)
                	state += ((Object.prototype.hasOwnProperty.call(jsSer,a) ? jsSer[a].length : 0)).toString() + " ";
                })
                console.log(  file, 
                              //JSLinks_nonOrigin.length+JSLinks_sameOrigin.length,
                              //JSLinks_sameOrigin.length ,
                              //JSLinks_nonOrigin.length, 
                              //state
                              jsServiceName(mapping,file.split("/")[7])
                            )
                toPrint[path.parse(file).name] = JSLinks_nonOrigin;
        		// console.log(toPrint)
            } catch(err){
                console.log(err)
            }

        })

	} catch(err){
		console.log(err)
	}
}

a();