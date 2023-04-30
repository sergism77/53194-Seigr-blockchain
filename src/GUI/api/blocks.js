//this is the blocks api file that will be used to make calls to the backend


import axios from 'axios';

export const getBlocks = () => {
    return axios.get('/api/blocks');
}

export const getBlock = (id) => {
    return axios.get(`/api/blocks/${id}`);
}

export const createBlock = (block) => {
    return axios.post('/api/blocks', block);
}

export const updateBlock = (block) => {
    return axios.patch(`/api/blocks/${block.id}`, block);
}

export const deleteBlock = (id) => {
    return axios.delete(`/api/blocks/${id}`);
}

