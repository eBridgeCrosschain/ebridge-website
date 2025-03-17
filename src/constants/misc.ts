import { BackEndNetworkType } from '@/types/network';

export const NEXT_PUBLIC_NETWORK_ENV: BackEndNetworkType = process.env.NEXT_PUBLIC_NETWORK_ENV as BackEndNetworkType;

export const NEXT_PUBLIC_WEBSITE_NAME: string = process.env.NEXT_PUBLIC_WEBSITE_NAME || '';
