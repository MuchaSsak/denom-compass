import type { Denomination } from '../data/types';
import type { T } from './index';

/** Labels for values that come from data (literal t() calls so the extractor sees them). */
export function familyName(t: T, f: Denomination['family']) {
  const m: Record<Denomination['family'], string> = {
    Catholic: t('Catholic'),
    Orthodox: t('Orthodox'),
    'Church of the East': t('Church of the East'),
    Anglican: t('Anglican'),
    Protestant: t('Protestant'),
    'Historic peace churches': t('Historic peace churches'),
    Restorationist: t('Restorationist'),
    Nontrinitarian: t('Nontrinitarian'),
  };
  return m[f] ?? f;
}
