// app/not-found.tsx
import css from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page not found | NoteHub',
  description: 'Sorry, the page you are looking for does not exist.',
  alternates: { canonical: '/not-found' },
  openGraph: {
    title: '404 — Page not found | NoteHub',
    description: 'Sorry, the page you are looking for does not exist.',
    url: 'https://notehub.com/not-found',
    images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
  },
};

export default function NotFound() {
  return (
    <div>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}
