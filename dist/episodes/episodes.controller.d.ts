import { EpisodesService } from './episodes.service';
export declare class EpisodesController {
    private eposidesservices;
    constructor(eposidesservices: EpisodesService);
    findall(sort?: 'asc' | 'desc'): Promise<import("./entity/episodes.entity").Episode[]>;
    findfeatures(id: string): Promise<import("./entity/episodes.entity").Episode[]>;
    findone(id: string): Promise<import("./entity/episodes.entity").Episode | undefined>;
    create(input: any): string;
}
