import { MEMBERS } from './members.mock';
import { Member } from './member.model';
import { toSlug } from '../utils/member-slug.util';

export interface ProcessedMember extends Member {
  slug: string;
}

export const PROCESSED_MEMBERS: ProcessedMember[] = MEMBERS.map((member) => ({
  ...member,
  slug: member.slug ?? toSlug(member.name.hu)
}));