const esprima = require('esprima');
const fs = require('fs');
const path = require('path')

const readFile = f => new Promise((resolve,reject) =>
    fs.readFile(f,'utf-8', (e,d) => e ? reject(e) : resolve(d) ) )



// var content     = {}
// var allLinks    = []
// var contentFirstParty = {}
// var LinksFirstParty = []
// var JSLinks_sameOrigin = []
// var JSLinks_nonOrigin = []

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


const identifyServices = (services, jsLinks) => {
    allServices = { "Advertising":[],
                    "Services_Widgets":[],
                    "Analytics":[],
                    "Social_Networking":[],
                    "Programming_Framework":[],
                    "Other":[],
                    "Cookie":[],
                    "CDN":[]}
    jsLinks.forEach( a => {
        hostname = (new URL(a)).hostname;
        done = false
        Object.keys(services).forEach( b => {
            if (hostname.includes(b)){
                Object.prototype.hasOwnProperty.call(allServices,services[b]) ? allServices[services[b]].push(a) : allServices[services[b]] = [a];
                done = true
            }
        })
        if (done === false) {
            Object.prototype.hasOwnProperty.call(allServices,"Other") ? allServices["Other"].push(a) : allServices["Other"] = [a];
        }
    })
    return allServices;
}

const readJSservices  = (fileData) => {
    services = {}
    fileData.split("\n").forEach(a => {
        host = a.split("\t");
        services[host[0]] = host[1];
    })
    return services;
}

const readDir = (dirName) => {
    allFiles = []
    fs.readdir(dirName, (err, filenames) =>  {
        if (err) {
            console.log(err)
            return;
        }
        filenames.forEach( file => {
            if (file.includes(".har")) {
                allFiles.push(path.resolve(dirName, file));
            }
        })
        
    });
    return allFiles;
}

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
                console.log(  file.split("/")[7], 
                              JSLinks_nonOrigin.length+JSLinks_sameOrigin.length,
                              JSLinks_sameOrigin.length ,
                              JSLinks_nonOrigin.length, 
                              jsSer["Analytics"].length || 0,
                              jsSer["Advertising"].length || 0 ,
                              jsSer["Services_Widgets"].length || 0, 
                              jsSer["Social_Networking"].length || 0, 
                              jsSer["CDN"].length || 0, 
                              jsSer["Cookie"].length || 0, 
                              jsSer["Programming_Framework"].length || 0 ,
                              jsSer["Other"].length || 0 
                            )

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

main2()
