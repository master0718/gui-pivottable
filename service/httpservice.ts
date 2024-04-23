"use client";

import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";

interface RefreshToken {
    status: number,
    data: {
        hashToken: string,
    }
}

export abstract class HttpService {
    protected instance: AxiosInstance;
    protected token?: string;
    protected readonly baseURL: string;

    public constructor(baseURL: string, token?: string) {
        this.baseURL = baseURL;
        this.instance = axios.create({ baseURL });
        this.token = token;

        this.initializeRequestInterceptor();
        this.initializeResponseInterceptor();
    }

    private handleRequest = (config: InternalAxiosRequestConfig) => {
        config.headers['Authorization'] = `Bearer ${this.token}`;
        return config;
    };

    private initializeRequestInterceptor = () => {
        this.instance.interceptors.request.use(this.handleRequest);
    }

    private initializeResponseInterceptor = () => {
        this.instance.interceptors.response.use(response => {
            if (response.headers && response.headers.authorization) {
                const responseToken = (response.headers.authorization as string).split(' ')[1];
                this.token = responseToken;
                localStorage.setItem('hashToken', this.token);
            }

            return response
        }, this.handleError);
    }

    private handleError = async (error: AxiosError) => {
        if (error.response?.status === 401) {
            const refreshToken = await this.refreshToken();
            if (refreshToken.status === 200) {
                this.token = refreshToken.data.hashToken;
                localStorage.setItem('hashToken', this.token);
            }
        }
    }

    private async refreshToken(): Promise<RefreshToken> {
        const refreshTokenRequest = {
            hashToken: this.token
        };

        return axios.post(`${this.baseURL}/user/refreshToken`, refreshTokenRequest);
    }
}