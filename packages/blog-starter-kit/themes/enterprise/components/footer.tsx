import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	return (
		<footer className="flex flex-row items-center justify-between border-t py-10 dark:border-neutral-800">
			<Container className="flex flex-row items-center justify-between px-5">
				{PUBLICATION_LOGO ? (
					<Link
						href={'/'}
						aria-label={`${publication.title} home page`}
						className="flex flex-row items-center gap-5"
					>
						<img className="block w-10" src={PUBLICATION_LOGO} alt={publication.title} />
					</Link>
				) : (
					<p className="text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-4xl">
						{publication.title}
					</p>
				)}

				<SocialLinks />
				<p className="text-sm text-slate-500 dark:text-slate-400">
					&copy; {new Date().getFullYear()} TAHA NEJAD.
				</p>
			</Container>
		</footer>
	);
};
