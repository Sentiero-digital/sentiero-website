import type { Thumbnail } from '~/models/common/thumbnail'

export type Cpt = {
  excerpt: null | string;
  content: { html: string };
  id: string;
  slug: string
  thumbnail: Thumbnail,
  title: string;
  createdAt: string;
  updatedAt: string;
  locale: string;
}