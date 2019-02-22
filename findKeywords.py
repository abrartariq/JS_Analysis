import sys
import os
import pandas as pd
keywords = []
result = {}
allFiles = []

def read_keywords(file):
    global keywords
    with open(file) as f:
        keywords = f.read().split("\n")

def read_a_file(folder,fileName):
    global keywords
    global result
    dict = {}
    dict["size"] = os.path.getsize(os.path.join(folder,fileName))
    with open(os.path.join(folder,fileName)) as f:
        data = f.read()
        for i in keywords:
            dict[i] = len(data.split(i)) -1
    result[fileName] = dict

def read_dir(folder):
    global allFiles
    allFiles = os.listdir(folder)
    allFiles = filter(lambda x: x [-2:] == "js", allFiles)

def get_direc(root):
    global allFolders
    allFolders = os.listdir(root)
    allFolders = filter(lambda x: os.path.isdir(x), allFolders)
    return allFolders

def printJSON(folder,data):
    for i in keywords:
        for j in data:
            print (folder,i,j,data[j][i])

def main():
    global keywords
    global files
    global result
    files = []
    result = {}
    root = sys.argv[1]
    allFolders = get_direc(root)
    read_keywords("keywords")
    
    for i in allFolders:
        folder = os.path.join(root,i)
        read_dir(folder)
        for j in allFiles:
            read_a_file(folder,j)
        # printJSON(folder,result)
        print result
        df = pd.DataFrame(result,columns = list((result.keys())).sort())
        with open(i + "_.csv",'a') as fin:
            # fin.write(df)
            df.to_csv(fin,header = True)

main()
