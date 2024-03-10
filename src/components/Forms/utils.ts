import axios from "axios";

export function getSchools(countryId: string){
    const countries =  axios.get(`api/countries/${countryId}/schools`).then(response => response.data).catch(() => {console.error("Error fetching schools");});;
    return countries;
}

