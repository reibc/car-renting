import React from 'react';
import InfoBox from './InfoBox';
import '../styles/InfoPanel.css';

interface InfoPanelProps {
    renter: string | null;
    isRented: boolean;
    isFuel: boolean | null;
    capacity: number | null;
    timeLeft: string | undefined;
    averageSpeed: number | undefined;
    totalDistance: number | null;
    totalTimeHours: number | null;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ renter, isRented, isFuel, totalDistance, totalTimeHours, timeLeft, capacity, averageSpeed }) => {
    return (
        <div className="info-panel">
            <InfoBox title="Car Model" value={renter || 'Unknown'} />
            <InfoBox title="Availability: " value={ isRented ? 'Unavailable' : 'Available' || 'Unknown'} />
            <InfoBox title="Average Speed" value={averageSpeed?.toFixed(2) + ' km' || 'Unknown'} />
            <InfoBox title="Total Distance" value={totalDistance?.toFixed(2) + ' km' || 'Unknown'} />
            <InfoBox title="Total Time" value={totalTimeHours?.toFixed(2) + ' hours' || 'Unknown'} />
            {isFuel ? (
                <InfoBox title="Fuel" value={`${capacity} %`} />
            ) : (
                <InfoBox title="Battery" value={`${capacity} %`} />
            )}
            <InfoBox title="Time Left" value={timeLeft || 'Unknown'} />
        </div>
    );
};

export default InfoPanel;
