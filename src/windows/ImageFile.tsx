import { WindowControls } from '#components';
import { WindowWrapper } from '#hoc';
import { useWindowStore, type WindowState } from '#store';
import { isFinderImageFile } from '#types';
import { Download, ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState, type ReactElement } from 'react';

const ImageFile = (): ReactElement | null => {
	const data = useWindowStore(
		(state: WindowState) => state.windows.imgfile.data,
	);
	const isImageFile = isFinderImageFile(data);
	const imageUrl = isImageFile ? data.imageUrl : null;
	const isPdf = Boolean(imageUrl?.toLowerCase().endsWith('.pdf'));
	const [failedSrc, setFailedSrc] = useState<string | null>(null);
	const [isRetrying, setIsRetrying] = useState(false);
	const isMountedRef = useRef(true);

	useEffect(() => {
		return () => {
			isMountedRef.current = false;
		};
	}, []);

	if (!isImageFile || !imageUrl) return null;
	const hasFailed = failedSrc === imageUrl;

	return (
		<>
			<div className="window-header">
				<WindowControls target="imgfile" />
				<h2 className="max-w-[65%] truncate text-sm font-medium">{data.name}</h2>
				<div className="window-header-actions flex items-center gap-2">
					<a
						href={imageUrl}
						download
						className="cursor-pointer text-gray-500 transition-colors hover:text-gray-800 dark:hover:text-gray-200"
						title="Download file"
						aria-label="Download file"
					>
						<Download className="icon size-4" aria-hidden="true" />
					</a>
					<a
						href={imageUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="cursor-pointer text-gray-500 transition-colors hover:text-gray-800 dark:hover:text-gray-200"
						title="Open in new tab"
						aria-label="Open in new tab"
					>
						<ExternalLink className="icon size-4" aria-hidden="true" />
					</a>
				</div>
			</div>
			<div className="preview h-[calc(100%-2.5rem)] w-full flex-1 overflow-hidden bg-neutral-100 p-2 dark:bg-neutral-900">
				{isPdf ? (
					<iframe
						src={`${imageUrl}#toolbar=1`}
						title={data.name}
						className="h-full min-h-[520px] w-full rounded-b-lg border-0 bg-white shadow-inner dark:bg-neutral-800"
					/>
				) : hasFailed ? (
					<div className="flex h-64 flex-col items-center justify-center gap-3 rounded bg-neutral-100 p-6 text-center text-sm font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
						<p>Preview unavailable for {data.name}</p>
						<button
							type="button"
							className="rounded bg-neutral-700 px-3 py-1 text-xs font-semibold text-white transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
							disabled={isRetrying}
							onClick={() => {
								setIsRetrying(true);
								const probe = new Image();
								probe.onload = () => {
									if (!isMountedRef.current) return;
									setFailedSrc(null);
									setIsRetrying(false);
								};
								probe.onerror = () => {
									if (!isMountedRef.current) return;
									setIsRetrying(false);
								};
								probe.src = imageUrl;
							}}
						>
							{isRetrying ? 'Retrying...' : 'Retry'}
						</button>
					</div>
				) : (
					<div className="flex h-full w-full items-center justify-center p-4">
						<img
							src={imageUrl}
							alt={`Preview of ${data.name}`}
							className="max-h-full max-w-full rounded object-contain shadow-md"
							onError={() => {
								setFailedSrc(imageUrl);
							}}
						/>
					</div>
				)}
			</div>
		</>
	);
};

/** Finder-backed image-preview window. */
const ImageFileWindow = WindowWrapper(ImageFile, 'imgfile');

export default ImageFileWindow;
