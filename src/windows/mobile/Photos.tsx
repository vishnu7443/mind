import { CertificateCard } from '#components';
import { MobileWindowHeader } from '#components/mobile/WindowHeader';
import { locations } from '#constants';
import { MobileWindowWrapper } from '#hoc';
import { useWindowStore } from '#store';
import { useMemo, type ReactElement } from 'react';

const MobilePhotos = (): ReactElement => {
	const { openWindow } = useWindowStore();
	const photos = useMemo(
		() =>
			[...locations.photos.children].sort((a, b) =>
				a.name.localeCompare(b.name, undefined, {
					sensitivity: 'base',
				}),
			),
		[],
	);

	return (
		<>
			<MobileWindowHeader windowKey="photos" title="Certifications" />
			<div className="gallery px-4 py-5">
				<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
					{photos.map((imageFile) => {
						return (
							<li key={imageFile.id}>
								<CertificateCard
									item={imageFile}
									onOpen={() => {
										openWindow('imgfile', imageFile);
									}}
								/>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};

const MobilePhotosWindow = MobileWindowWrapper(MobilePhotos, 'photos');
export default MobilePhotosWindow;
