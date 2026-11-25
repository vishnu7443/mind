import { Award, FileText, ExternalLink } from 'lucide-react';
import type { ReactElement } from 'react';

export interface CertificateItemProps {
	id: number;
	name: string;
	subtitle?: string;
	issuerUrl?: string;
	category?: string;
	imageUrl: string;
}

interface CertificateCardProps {
	item: CertificateItemProps;
	onOpen: () => void;
}

/**
 * Reusable certificate card component.
 * Displays high-res images for image formats or an Apple-style certificate tile for PDFs.
 */
export const CertificateCard = ({
	item,
	onOpen,
}: CertificateCardProps): ReactElement => {
	const isPdf = item.imageUrl.toLowerCase().endsWith('.pdf');

	return (
		<div className="group flex h-full flex-col">
			<button
				type="button"
				onClick={onOpen}
				className="relative h-44 w-full cursor-pointer overflow-hidden rounded-lg border border-neutral-200/90 bg-neutral-100 text-left shadow-sm transition-all hover:border-blue-500/60 hover:shadow-md dark:border-neutral-700/80 dark:bg-neutral-800/80 dark:hover:border-blue-400/60"
				aria-label={`Open certificate ${item.name}`}
			>
				{isPdf ? (
					<div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-neutral-50 via-white to-blue-50/40 p-3.5 dark:from-neutral-800 dark:via-neutral-800/95 dark:to-neutral-900">
						<div className="flex items-center justify-between gap-1">
							<span className="max-w-[70%] truncate rounded border border-blue-500/20 bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
								{item.subtitle ?? 'Certification'}
							</span>
							<span className="flex shrink-0 items-center gap-1 rounded bg-red-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-red-600 dark:text-red-400">
								<FileText className="size-3" /> PDF
							</span>
						</div>

						<div className="my-auto py-1">
							<div className="mb-2 flex size-8 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
								<Award className="size-5" />
							</div>
							<p className="line-clamp-2 text-xs leading-snug font-semibold text-neutral-800 dark:text-neutral-100">
								{item.name}
							</p>
						</div>

						<div className="flex items-center justify-between border-t border-neutral-200/60 pt-2 text-[11px] text-neutral-500 dark:border-neutral-700/60 dark:text-neutral-400">
							<span className="truncate">{item.category}</span>
							<span className="flex items-center gap-0.5 font-medium text-blue-600 transition-transform group-hover:translate-x-0.5 dark:text-blue-400">
								View <ExternalLink className="size-3" />
							</span>
						</div>
					</div>
				) : (
					<img
						src={item.imageUrl}
						alt={item.name}
						loading="lazy"
						className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
					/>
				)}
			</button>
			<p className="gallery-item-title mt-2 line-clamp-2 text-xs leading-4 font-medium text-gray-700 dark:text-gray-200">
				{item.name}
			</p>
			{item.subtitle ? (
				<p className="gallery-item-issuer mt-0.5 text-[11px] leading-4 text-gray-500 dark:text-gray-400">
					{item.issuerUrl ? (
						<a
							href={item.issuerUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="gallery-item-issuer-link text-blue-600 hover:underline dark:text-blue-400"
						>
							{item.subtitle}
						</a>
					) : (
						item.subtitle
					)}
				</p>
			) : null}
		</div>
	);
};
