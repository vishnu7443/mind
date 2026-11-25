import { MobileWindowHeader } from '#components/mobile/WindowHeader';
import { MobileWindowWrapper } from '#hoc';
import { useWindowStore, type WindowState } from '#store';
import { isFinderImageFile } from '#types';
import { Download, ExternalLink } from 'lucide-react';
import type { ReactElement } from 'react';

const MobileImage = (): ReactElement | null => {
	const data = useWindowStore(
		(state: WindowState) => state.windows.imgfile.data,
	);
	if (!isFinderImageFile(data)) return null;

	const isPdf = data.imageUrl.toLowerCase().endsWith('.pdf');

	return (
		<>
			<MobileWindowHeader windowKey="imgfile" title="Preview" />
			<div className="mobile-file-scroll flex h-[calc(100dvh-var(--mobile-navbar-height))] flex-col bg-neutral-100 dark:bg-neutral-900">
				<div className="flex items-center justify-between border-b border-neutral-200 p-3 dark:border-neutral-800">
					<p className="max-w-[60%] truncate text-xs font-semibold text-neutral-800 dark:text-neutral-200">
						{data.name}
					</p>
					<div className="flex items-center gap-3">
						<a
							href={data.imageUrl}
							download
							className="flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400"
							title="Download file"
						>
							<Download className="size-3.5" /> Download
						</a>
						<a
							href={data.imageUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400"
							title="Open in new tab"
						>
							<ExternalLink className="size-3.5" /> Open
						</a>
					</div>
				</div>
				<div className="preview flex flex-1 items-center justify-center p-2">
					{isPdf ? (
						<iframe
							src={data.imageUrl}
							title={data.name}
							className="h-full min-h-[420px] w-full rounded border-0 bg-white dark:bg-neutral-800"
						/>
					) : (
						<img
							src={data.imageUrl}
							alt={data.name}
							className="max-h-full max-w-full rounded object-contain shadow-sm"
						/>
					)}
				</div>
			</div>
		</>
	);
};

const MobileImageWindow = MobileWindowWrapper(MobileImage, 'imgfile');
export default MobileImageWindow;
