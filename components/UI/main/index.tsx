import React, { useState, useEffect } from 'react';
import styles from './styles';
import Paginate from 'react-paginate';
import {ItemCard} from 'components/cards'

export const MainPage = (): JSX.Element => {

    const [anime, setAnime] = useState([]);
    const [pages, setPages] = useState(1);
    const [inputpages, setInputpages] = useState(1);
    const [pagenate, setPagenate] = useState(null);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            await fetch(`https://api.jikan.moe/v4/anime?limit=9&page=${pages}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setAnime(data.data);
                setPagenate(data.pagination);
            //    setLoading(false);
            })
            .catch((err) => {
               console.log(err.message);
            });
        }

        fetchData();
    }, [pages]);

    const pagginationHandler = (page) => {
        setPages(page);
        setInputpages(page);
    };

	return (
		<>
            <div className='container'>
                <div className='card-layout'>
                    {anime?.map((item, i) => {
                        return (
                            <ItemCard key={i} backImg={item.images.jpg.image_url} title={item.title_english} order='0' />
                        );
                    })}
                </div>
                {pagenate != null && <div className="pagination">
                    <button 
                        onClick={() => pagginationHandler(Number(pagenate.current_page) - 1)}
                        disabled={Number(pagenate.current_page) <= 1}
                        className='prev'
                    >
                        &larr;
                    </button>
                    <input 
                        type="number" 
                        onKeyDown={(event) =>{
                            if(event.key == 'Enter'){
                                const currentPage = Number((event.target as HTMLInputElement).value);
                                if(currentPage > Number(pagenate.last_visible_page)) return;
                                setPages(Number((event.target as HTMLInputElement).value));
                            }
                        }}
                        onChange={(e)=> {
                            setInputpages(Number((e.target as HTMLInputElement).value));
                        }}
                        value={inputpages}
                    />/{pagenate.last_visible_page}
                    <button
                        onClick={() => pagginationHandler(Number(pagenate.current_page) + 1)}
                        disabled={Number(pagenate.current_page) >= Number(pagenate.last_visible_page)}
                        className='next'
                    >
                        &rarr;
                    </button>
                </div>}
            </div>
            <style jsx>{styles}</style>
		</>
	);
};

export default MainPage;
