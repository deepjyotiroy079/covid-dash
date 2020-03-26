import { Data } from './data';

export interface Stats {
    success: boolean;
    data: Data;
    lastRefreshed: Date;
    lastOriginUpdate: Date;
}