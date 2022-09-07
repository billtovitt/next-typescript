
import styles from './styles';

interface Props {
	backImg?: string;
	title?: string;
	order?: string;
}

export const ItemCard = ({backImg, title, order = '0'}: Props): JSX.Element => {
	return (
		<>
			<div className={`card-container n-${order} `} >
				<div 
					className='img-container' 
					style={{ backgroundImage: `url(${backImg})` }}
				>
				</div>
				<div className='back-gradient' />
				<div className='name-container'>
					<p>{title}</p>
				</div>
			</div>
			<style jsx>{styles}</style>
		</>
	);
};

export default ItemCard;
