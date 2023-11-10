import webiopi
import RPi.GPIO as GPIO
import subprocess
import time;

GPIO.setmode(GPIO.BCM)
gpio_pin = 17
dir = "/home/yurisi/webiopi/html/script/"

def setup():
    GPIO.setup(gpio_pin, GPIO.OUT)

def runCode(code):
    subprocess.call('python3 '+dir+'irrp.py -p -g22 -f '+dir+'codes ' + code, shell=True)

@webiopi.macro
def LIGHT_ON():
     runCode("power:on")

@webiopi.macro
def LIGHT_OFF():
    runCode("power:off")

@webiopi.macro
def LIGHT_HALF():
    runCode("power:half")

@webiopi.macro
def LIGHT_UP():
    runCode("light:up")

@webiopi.macro
def LIGHT_DOWN():
    runCode("light:down")

@webiopi.macro
def LIGHT_80():
    runCode("light:80")

@webiopi.macro
def LIGHT_60():
    runCode("light:60")

@webiopi.macro
def LIGHT_30():
    runCode("light:30")

@webiopi.macro
def AIR_ON():
    runCode("air:on")

@webiopi.macro
def AIR_OFF():
    runCode("air:off")

@webiopi.macro
def ALL_ON():
    LIGHT_30()
    time.sleep(0.1)
    AIR_ON()

@webiopi.macro
def ALL_OFF():
    LIGHT_OFF()
    time.sleep(0.1)
    AIR_OFF()