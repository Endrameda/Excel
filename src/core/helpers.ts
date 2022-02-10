import { capitalize } from './utils/capitalize';

export const getMethodName = (eventName: string): string => `on${capitalize(eventName)}`;
