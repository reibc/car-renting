import aiohttp
from dotenv import load_dotenv
import asyncio
import time
import random

urls = [
    "http://localhost/cars",
    "http://localhost/cars/available",
    "http://localhost/cars/1"
    "http://localhost/details/rental/1",
    "http://localhost/rentals/1",
]
AUTH_TOKEN = load_dotenv.get('AUTH_TOKEN')
num_requests = 100000

headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer {}'.format(AUTH_TOKEN)
}

async def send_request(session):
    url = random.choice(urls)
    try:
        async with session.get(url, headers=headers) as response:
            status = response.status
            print(f"Status Code: {status} for URL: {url}")
    except aiohttp.ClientError as e:
        print(f"Request failed: {e} for URL: {url}")

# Function to perform the stress test
async def stress_test(urls, num_requests):
    async with aiohttp.ClientSession() as session:
        tasks = [send_request(session) for _ in range(num_requests)]
        start_time = time.time()
        await asyncio.gather(*tasks)
        end_time = time.time()
        print(f"Total time for {num_requests} requests: {end_time - start_time} seconds")

if __name__ == "__main__":
    asyncio.run(stress_test(urls, num_requests))
