
export const API_KEY = 'AIzaSyBSg_Hhl1jY6kJJz88MBVAqMk41_ZFPb0Y';

export const value_converter = (value)=> {
    if(value>1000000){
        return Math.floor(value/1000000)+"M";
    } else if(value >=1000){
        return Math.floor(value/1000)+"K";
    } else {
        return value;
    }
}