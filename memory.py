from adb import ADB
import time

debug = ADB()
print debug.devices()
while(True):
    print debug.shell("dumpsys meminfo com.android.chrome -d").split("TOTAL")[1][:69]
    time.sleep(1)
