import { Injectable } from '@nestjs/common';

@Injectable()
export class GpsService {
    getCoordinates() {
        return [
            { lat: 47.40999898018636, lng: 28.368937138479076 },
            { lat: 47.39490690075874, lng: 28.37638040899834},
            { lat: 47.392669913205054, lng: 28.38573595278969}
        ];
    }

    getCars() {
        return {
            'name': 'car1',
            'isFuel': true,
            'isRented': false,
            'timeLeft': 6000,
        }
    }
}

