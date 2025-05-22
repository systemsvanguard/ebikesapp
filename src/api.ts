// create axios API Wrapper
import axios from 'axios';

// Update this address to the deployed REST API address.  
const API_BASE = 'https://ebikesapi.ryanhunter.ca/api';
// const API_BASE = 'http://localhost/ebikesapi/api';

export const getAllBikes = () => axios.get(`${API_BASE}/read.php`);
export const getBikeById = (id: number) => axios.get(`${API_BASE}/read_single.php?id=${id}`);
export const updateBike = (bike: any) => axios.put(`${API_BASE}/update.php`, bike);
export const deleteBike = (id: number) => axios.delete(`${API_BASE}/delete.php`, { data: { id } });
export const createBike = (bike: any) => axios.post(`${API_BASE}/create.php`, bike);
