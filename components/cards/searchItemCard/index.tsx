
import styles from './styles';
import Link from 'next/link';


interface Props {
	mal_id?: string;
	backImg?: string;
	title?: string;
	type?: string;
	episode?: string;
	status?: string;
}

export const SearchItemCard = ({mal_id, backImg, title, type, episode, status}: Props): JSX.Element => {
	return (
		<>
			<Link href={{ pathname: '/details', query: { id: mal_id } }}>
				<a>
					<div className={`card-container`} >
						<div 
							className='img-container' 
							style={{ backgroundImage: `url(${backImg})` }}
						>
						</div>
						<div className='description-box'>
							<p className='title'>{title}&nbsp;</p>
							<p className='note'>{type}.{episode}episode.{status}</p>
						</div>
						<div className='arrow' />
					</div>
				</a>
			</Link>
			<style jsx>{styles}</style>
		</>
	);
};

export default SearchItemCard;
