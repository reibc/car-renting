import React, { useState, useEffect } from 'react';
import MapComponent from './MapComponent';
import InfoPanel from './InfoPanel';
import '../styles/App.css';
import axios from 'axios';

interface CarData {
    name: string;
    isFuel: boolean;
    timeLeft: number;
}

const App: React.FC = () => {
    const [isFuel, setIsFuel] = useState<boolean | null>(null);
    const [renter, setRenter] = useState<string | null>(null);
    const [timeLeft, setTimeLeft] = useState<string>('0 minutes');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get<CarData>('http://localhost:5000/gps/cars');
                setRenter(result.data.name);
                setIsFuel(result.data.isFuel);
                setTimeLeft((result.data.timeLeft / 60).toFixed(2) + ' minutes');
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="app-container">
            <div className="map-container">
                <MapComponent />
            </div>
            <div className="info-container">
                <InfoPanel
                    renter={renter}
                    isFuel={isFuel}
                    timeLeft={timeLeft}
                />
            </div>
        </div>
    );
};

export default App;
