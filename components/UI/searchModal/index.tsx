import React, { useState, useEffect } from 'react';
import styles from './styles';
import {SearchItemCard} from 'components/cards'
import Image from 'next/image';

interface Props {
	onClose: () => void;
}

export const SearchModal = ({ onClose }: Props): JSX.Element => {

    const [anime, setAnime] = useState([]);
    const [pages, setPages] = useState(1);
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        async function fetchData() {
            await fetch(`https://api.jikan.moe/v4/anime?limit=5&page=1&q=${keyword}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setAnime(data.data);
            })
            .catch((err) => {
               console.log(err.message);
            });
        }

        fetchData();
    }, [keyword]);

	return (
		<>
            <div className='back'>
                <div className='container'>
                    <div className="close-icon">
                        <a><Image src="/close.svg" width={14} height={14} alt="" onClick={onClose} /></a>
                    </div>
                    <input 
                        className='search-box'
                        type="search" 
                        onChange={(e) => {
                            setKeyword(e.target.value);
                        }}
                    />
                    {keyword != "" && (
                        <div className='search-result'>
                            {anime?.map((item, i) => {
                                return (
                                    <SearchItemCard 
                                        key = {i}
                                        mal_id={item.mal_id}
                                        backImg={item.images.jpg.image_url}
                                        title={item.title_english}
                                        type={item.type}
                                        episode={item.episodes}
                                        status={item.finished}
                                    />
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
            <style jsx>{styles}</style>
		</>
	);
};

export default SearchModal;
