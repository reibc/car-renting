export interface Coordinate {
    lat: number;
    lng: number;
}

export interface DataPoint {
    timestamp: string;
    coordinates: string; // coordinates are stringified JSON objects
}

function toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
}

function haversineDistance(coord1: Coordinate, coord2: Coordinate): number {
    const R = 6371; 
    const lat1 = toRadians(coord1.lat);
    const lng1 = toRadians(coord1.lng);
    const lat2 = toRadians(coord2.lat);
    const lng2 = toRadians(coord2.lng);

    const dLat = lat2 - lat1;
    const dLng = lng2 - lng1;

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1) * Math.cos(lat2) *
            Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in kilometers
}

export function calculateAverageSpeed(data: any): number {
    if (data.length < 2) {
        return 0; // Not enough data points to calculate speed
    }

    let totalDistance = 0;
    let totalTime = 0; // Total time in seconds

    for (let i = 0; i < data.length - 1; i++) {
        const coord1: Coordinate = JSON.parse(data[i].coordinates);
        const coord2: Coordinate = JSON.parse(data[i + 1].coordinates);
        const timestamp1 = new Date(data[i].timestamp).getTime();
        const timestamp2 = new Date(data[i + 1].timestamp).getTime();
    
        totalDistance += haversineDistance(coord1, coord2);
        totalTime += (timestamp2 - timestamp1) / 1000; // Convert milliseconds to seconds
    }

    const totalTimeHours = totalTime / 3600; // Convert seconds to hours
    const averageSpeed = totalDistance / totalTimeHours; // Speed in km/h

    return averageSpeed;
}
