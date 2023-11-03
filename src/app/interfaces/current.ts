export interface Current {
    temp_c: number;
    condition: Condition;
    wind_kph: number;
    humidity: number;
}

interface Condition{
    text: string;
    icon: string;
}