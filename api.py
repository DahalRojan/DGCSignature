import requests
from requests import api


response = requests.get('http://192.168.107.178:8000/docs').json
api_url = "http://192.168.107.178:8000/openapi.json"
response = requests.get(api_url)

response['comparer']