import axios from 'axios';

const createApiClient = (baseURL: string) => {
  const apiClient = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.API_KEY}`,
    },
  });

  apiClient.interceptors.request.use(
    (config) => {
      console.log('Requisição enviada:', config);
      return config;
    },
    (error) => {
      console.error('Erro na requisição:', error);
      return Promise.reject(error);
    }
  );

  apiClient.interceptors.response.use(
    (response) => {
      console.log('Resposta recebida:', response);
      return response;
    },
    (error) => {
      console.error('Erro na resposta:', error);
      return Promise.reject(error);
    }
  );

  return apiClient;
};

export default createApiClient;
