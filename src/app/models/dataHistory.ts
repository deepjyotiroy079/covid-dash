import { Summary } from './summary';
import { Regional } from './regional';

export interface DataHistory {
    day: Date;
    summary: Summary;
    regional: Regional[];
}