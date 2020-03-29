import { DataHistory } from './dataHistory';

export interface StatsHistory {
    success: boolean;
    data: DataHistory[];
    lastRefreshed: Date;
    lastOriginUpdate: Date;
}