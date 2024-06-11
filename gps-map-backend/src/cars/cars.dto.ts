export type CarInformations = {
    model: string;
    VIN: string;
    Plate: string;
    Year: number;
    isRented: boolean;
    carDetails: CarDetails;
  };
  
export type CarDetails = {
    Color: string;
    Specifications: string;
    Completation: string;
    isFuel: boolean;
    capacityLevel: number;
};
  