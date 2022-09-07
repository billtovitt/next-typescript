import React, {useState, useEffect} from "react";
import { useRouter } from 'next/router';
import styles from '../styles/Details.module.css';
import Link from "next/link";


export default function Details() {
    const router = useRouter()
    console.log(router);
    const [anime, setAnime] = useState(null);
    useEffect(() => {
        async function fetchData() {
            await fetch(`https://api.jikan.moe/v4/anime/${router.query.id}`)
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
    }, [router]);
    return (
        <>
            {anime != null && (
                <div className={styles.container}>
                    <div className={styles.back}>
                        <Link href='/'>
                            <a>&lt; Go back to Main</a>
                        </Link>
                    </div>
                    <div className={styles.main}>
                        <div className={styles.preview} style={{ backgroundImage: `url(${anime.images.jpg.image_url})` }}></div>
                        <div className={styles.detail}>
                            <div className={styles.detail_title}>{anime.title_english}</div>
                            <div className={styles.detail1}>
                                <div className={styles.detail1_item}>
                                    <span className={styles.item_title}>Type</span>
                                    <div className={styles.line}></div>
                                    <span>{anime.type}</span>
                                </div>
                                <div className={styles.detail1_item}>
                                    <span className={styles.item_title}>Source</span>
                                    <div className={styles.line}></div>
                                    <span>{anime.source}</span>
                                </div>
                                <div className={styles.detail1_item}>
                                    <span className={styles.item_title}>Episodes</span>
                                    <div className={styles.line}></div>
                                    <span>{anime.episodes}</span>
                                </div>
                                <div className={styles.detail1_item}>
                                    <span className={styles.item_title}>Status</span>
                                    <div className={styles.line}></div>
                                    <span>{anime.status}</span>
                                </div>
                            </div>
                            <div className={styles.detail2}>
                                <div style={{ textAlign: 'right'}}>
                                    <p>{anime.score}</p>
                                    <p className={styles.score_title}>Score</p>
                                </div>
                                <div style={{ textAlign: 'right'}}>
                                    <p>{anime.rank}</p>
                                    <p className={styles.score_title}>Rank</p>
                                </div>
                                <div style={{ textAlign: 'right'}}>
                                    <p>{anime.popularity}</p>
                                    <p className={styles.score_title}>Popularity</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <p className={styles.title}>Description</p>
                        <p className={styles.content}>{anime.synopsis}</p>
                    </div>
                </div>
            )}
        </>
    )
}