import axios from 'axios';
import config from '../../../config';
import React from 'react';

export default function Http() {
  const httpRequest = axios.create({
    baseURL: config.baseURl,
  });
  httpRequest.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return error;
    },
  );
  return httpRequest;
}
