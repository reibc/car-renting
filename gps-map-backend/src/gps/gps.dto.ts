import { IsNumber, IsDate, IsJSON } from 'class-validator';

export class UpdateCoordinatesDto {
    @IsNumber()
    rentalId: number;
    
    @IsNumber()
    fuel: number;

    @IsDate()
    timestamp: Date;

    @IsJSON()
    coordinates: string;
}
