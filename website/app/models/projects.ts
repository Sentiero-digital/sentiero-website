import { Cpt } from './common/cpt';

export type Project = Cpt & {
  urls: string[];
}

export type Projects = Array<Project>;