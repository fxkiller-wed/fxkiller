import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const FORM_ID = import.meta.env.VITE_FORM_ID;
const BASE_URL = import.meta.env.VITE_BASE_URL;

interface SubscribeResponse {
  success: boolean;
  data?: any;
  message?: string;
}

export const subscribe = async (email: string): Promise<SubscribeResponse> => {
  try {
    const response = await axios.post(`${BASE_URL}/forms/${FORM_ID}/subscribe`, {
      api_key: API_KEY,
      email: email,
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