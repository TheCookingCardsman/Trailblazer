import os
import sys
from selenium import webdriver
from selenium.webdriver.common.keys import Keys 
from dotenv import load_dotenv

# Load .env file contents
load_dotenv()

# Set the driver
driver = webdriver.Chrome('C:\\chromedriver.exe')

# Go to Hiker Project
driver.get('https://hikingproject.com/auth/login')

# Find email and password inputs
emails = driver.find_elements_by_css_selector("input[type='email']")
password = driver.find_element_by_css_selector("input[type='password']")

# Send email and password
emails[1].send_keys(os.getenv('EMAIL'))
password.send_keys(os.getenv('PASSWORD'))

# Find submit button and click it
button = driver.find_element_by_xpath('//button[text()="Log In"]')
button.click()

# Go to given url
driver.get(sys.argv[1])

# Download GPX file
gpx_file = driver.find_element_by_xpath('//a[text()="Download GPX File"]')
gpx_file.click()