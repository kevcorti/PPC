import Artista from '../../assets/artista2.png';

export const ArtistCard = () => {
	return (
		<div className="card lg:card-side shadow-xl bg-white rounded-xl w-[50rem] my-4">
			<figure className="w-full h-[350px]">
				<img src={Artista} alt="Album" className="w-full h-full object-cover" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">New album is released!</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
					nesciunt nobis at sit nam ut dolorem suscipit possimus quae esse sunt
					ipsa, optio quisquam accusantium in praesentium, quia atque. Error.
				</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary bg-[#350101] hover:bg-[#350100]">
						Leer mas
					</button>
				</div>
			</div>
		</div>
	);
};
