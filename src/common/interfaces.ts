export enum pageTypes {
    AIR = 'Airducts',
    MOLD = 'Mold',
    HARDWOOD = 'Hardwood',
    CRIME = 'Crime',
    CARPET = 'Carpet',
    DRYER = 'Dryer',
    WATER = 'Water',
    TILE = 'Tile',
    UPHOLSTERY = 'Upholstery',
}

export enum serviceTitles {
    AIR = 'Air Duct',
    MOLD = 'Mold',
    HARDWOOD = 'Hardwood',
    CRIME = 'Crime Scene',
    CARPET = 'Carpet',
    DRYER = 'Dryer Vent',
    WATER = 'Water & Fire Damage',
    TILE = 'Tile & Grout',
    UPHOLSTERY = 'Upholstery',
}

export enum serviceDescriptions {
    clearning = 'Cleaning',
    restoration = 'Restoration',
    removal = 'Removal',
}

export interface IReview {
    name: string;
    star_rating: number;
    date: string;
    review: string;
}