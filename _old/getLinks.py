import requests
import json


def getLinksFromHar():
    allLinks = set()
    with open('a.json','r') as f:
        data = f.read()
        links = data.split("url\": \"")
        for i in links:
            if( i[:3] == "htt"):
               allLinks.add(i.split("\",")[0])
    # filtering JS Links

    jsLinks = list(filter(lambda x: x[-2:]== "js", allLinks))
    return jsLinks


def main():
    jsLinks = getLinksFromHar();
    for i in jsLinks:
        response = requests.get(i)
        fileName = i.split('/')[-1]
        while(not fileName[0].isalnum()):
            fileName = fileName[1:]
        with open(fileName,'w') as f:
            f.write(response.content)


def getFileNameFromLink(link):
    fileName = link.split('/')[2]
    print(link)
    while(not fileName[0].isalnum()):
        fileName = fileName[1:]
    return fileName

def downoadJS(spath,link):
    try:
        import os
        response = requests.get(link)
        fileName = getFileNameFromLink(link)
        fileName = os.path.join(spath,fileName)
        if not os.path.exists(spath):
            os.mkdir(spath)
        with open(fileName,'w') as f:
            f.write(response.content)
    except Exception as e:
        print("Error",spath,link)
        return

def parseJSON(filename):
    import json
    text = ""
    with open(filename) as f:
        text = f.read()
    data = json.loads(text)
    return data


def traverseJSON(jsonData):
    for website in jsonData:
        for link in jsonData[website]:
            downoadJS(website,link)

traverseJSON(parseJSON('links.txt'))