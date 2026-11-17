import type { Denomination } from './types';
import { profiles } from './profiles';
import { stances } from './stances';

export const denominations: Denomination[] = profiles.map((p) => ({ ...p, stances: stances[p.id] ?? {} }));

export const denominationById: Record<string, Denomination> = Object.fromEntries(denominations.map((d) => [d.id, d]));

export const families = ['Catholic', 'Orthodox', 'Church of the East', 'Protestant', 'Restorationist', 'Nontrinitarian'] as const;
