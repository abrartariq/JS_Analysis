import subprocess

with open('sites') as f:
    allSites = f.readlines()
    for i in allSites:
        command = "node browsertime --pageCompleteCheckInactivity --android -n 1 --resultDir top100Files --har " + i +  " http://" + i
        subprocess.call('sudo node myscript.js', shell=True)