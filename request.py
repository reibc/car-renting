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

# # Headers (optional, depending on your API's requirements)
# headers = {
#     'Content-Type': 'application/json',
#     'Authorization': 'Bearer YOUR_ACCESS_TOKEN'  # If your API requires authentication
# }

response = requests.post(url, json=data)

# Check the response
if response.status_code == 200:
    print("Success:", response.json())
else:
    print("Error:", response.status_code, response.text)
