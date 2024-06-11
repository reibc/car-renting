"""
    Mock file used to simulate a POST request to the API.
    This file is used to test the API's endpoint for updating the GPS coordinates of a rental.
"""

import requests
import json
from datetime import datetime, timezone

# Define the URL and data
url = 'http://localhost:5000/gps/coordinates/rental/update'

data = {
    "rentalId": 1,
    "fuel": 50.5,
    "timestamp": datetime.now(timezone.utc).isoformat(),
    "coordinates": json.dumps({"lat": 38.7749, "lng": -125.4194})
}

# Headers (optional, depending on your API's requirements)
headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RVc2VyIiwic3ViIjoxLCJpYXQiOjE3MTgxMDQ3NTIsImV4cCI6MTcxODEwODM1Mn0.8nt8ZagjSqcKdQw2d4wsk8SF-8Cz8nWce9lliFBjzgs'  # If your API requires authentication
}

response = requests.post(url, json=data, headers=headers)

# Check the response
if response.status_code == 200:
    print("Success:", response.json())
else:
    print("Error:", response.status_code, response.text)
