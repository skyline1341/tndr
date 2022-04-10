import { Match } from './match.model';
import { Person } from './person.model';

export interface Data {
  persons: Person[],
  matches: Match,
}
