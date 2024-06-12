"""
    Mock file used to simulate a POST request to the API.
    This file is used to test the API's endpoint for updating the GPS coordinates of a rental.
"""

import random
import requests
import json
import time
from datetime import datetime, timezone

url = 'http://localhost:80/gps/coordinates/rental/update'
headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RVc2VyIiwic3ViIjoxLCJpYXQiOjE3MTgxMTg1MDksImV4cCI6MTcxODEyMjEwOX0.B6XTGw2m8b7o-KCDHa-6PR4414QLsxTCSCX9XfEKYFE'  # If your API requires authentication
}

def updateRental(id, coords):
    data = {
        "rentalId": id,
        "fuel": random.randint(0, 100),
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "coordinates": json.dumps(coords)
    }
    response = requests.post(url, json=data, headers=headers)
    if response.status_code == 200 or response.status_code == 201:
        print("Success:", response.json())
    else:
        print("Error:", response.status_code, response.text)


def update_position(start, end, interval=10, steps=10):
    """
    Gradually change latitude and longitude values from start to end every 10 seconds.

    :param start: dict with 'lat' and 'lng' as start coordinates.
    :param end: dict with 'lat' and 'lng' as end coordinates.
    :param interval: time interval in seconds to update the values.
    :param steps: number of steps to reach the end value.
    """
    lat_start, lng_start = start['lat'], start['lng']
    lat_end, lng_end = end['lat'], end['lng']
    
    lat_step = (lat_end - lat_start) / steps
    lng_step = (lng_end - lng_start) / steps
    
    current_lat, current_lng = lat_start, lng_start
    
    for _ in range(steps):
        current_lat += lat_step
        current_lng += lng_step
        
        # Ensure the values do not exceed the end values in either direction
        if (lat_step > 0 and current_lat > lat_end) or (lat_step < 0 and current_lat < lat_end):
            current_lat = lat_end
        if (lng_step > 0 and current_lng > lng_end) or (lng_step < 0 and current_lng < lng_end):
            current_lng = lng_end
        
        print(f"Current Position: lat = {current_lat}, lng = {current_lng}")
        
        # Break the loop if the end position is reached
        if current_lat == lat_end and current_lng == lng_end:
            break
        
        updateRental(1, {"lat": current_lat, "lng": current_lng})
        time.sleep(interval)
        

# Example usage
start = {"lat": 47.08529106207697, "lng": 28.712530669966103}
end = {"lat": 47.05612398649986, "lng": 28.762202225038955}
update_position(start, end)