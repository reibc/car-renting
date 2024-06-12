"""
This is a mock script for the demo application to fill the database with some data.
Additionally it's used to test the API's endpoints for creating a car, client, rental and appointment.
"""

from datetime import datetime, timezone
from dotenv import load_dotenv
import requests


class FillDatabase:
    def __init__(self):
        self.url = 'http://localhost:80'
        self.AUTH_TOKEN = load_dotenv.get('AUTH_TOKEN')
        self.headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer {}'.format(self.AUTH_TOKEN)
        }
    
    def send_request(self, type, data = None):
        if type=="post":
            response = requests.post(self.url, json=data, headers=self.headers)
        elif type=="get":
            response = requests.get(self.url, headers=self.headers)
        
        if response.status_code == 200 or response.status_code == 201:
            print("Success:", response.json())
        
    def create_car(self, data = None):
        self.url = 'http://localhost:80/cars/create'
        data = {
            "model": 'Mercedes E-Class',
            "VIN": '121u391290312',
            "Plate": "ABCD-1234",
            "Year": 2021,
            'isRented': False,
            'carDetails': {
                'Color': 'blue',
                'Specifications': 'fuel',
                'Completation': 'full',
                'isFuel': True,
                'capacityLevel': 75
            },
        }
        self.send_request("post", data)
    
    def create_client(self, data = None):
        self.url = 'http://localhost:80/rentals/create/client'
        data = {
            "name": "Test User",
            "phoneNumber": "1234567890",
            "IDNP": "1234567890123",
        }
        self.send_request("post", data)
        
    def create_rental(self, data = None):
        self.url = 'http://localhost:80/rentals/create/rental'
        data = {
            "carId": 1,
            "clientId": 1,
            "startDate": datetime.now(timezone.utc).isoformat(),
        }
        self.send_request("post", data)
        
object = FillDatabase()
object.create_car()
# object.create_client()
# object.create_rental()