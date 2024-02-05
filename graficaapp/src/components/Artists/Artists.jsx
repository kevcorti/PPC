import { ArtistCard } from './ArtistCard';

function Artists() {
	return (
		<div
			className="flex relative h-full bg-cover bg-no-repeat p-5"
			style={{
				backgroundImage:
					'url(https://wallpapers.com/images/hd/museum-background-i46ank5l1sk9bubq.jpg)',
			}}
		>
			{/* Black overlay on the entire background */}
			<div className="absolute inset-0 bg-black opacity-50"></div>

			{/* White container wrapping title and artist cards */}
			<div className="ml-auto bg-white p-5 rounded shadow-md z-10">
				<h2 className="title_section">Artistas</h2>
				<div className="flex flex-col items-end">
					<ArtistCard />
					<ArtistCard />
					<ArtistCard />
				</div>
			</div>
		</div>
	);
}

export default Artists;
