import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

interface SubscribeResponse {
  success: boolean;
  data?: any;
  message?: string;
}

export const subscribeinfo = async (formId: string, data: any): Promise<SubscribeResponse> => {
  try {
    const response = await axios.post(`${BASE_URL}/forms/${formId}/subscribe`, {
      api_key: API_KEY,
      ...data,
    }, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || error.message,
    };
  }
};