import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Paper } from "../components/common";
import NewsContext from "../contexts/NewsContext";

export const Root = () => {
    const { news } = useContext(NewsContext);

    return (
        <div>
            <Paper>
                {news.latest.length > 0 ? (
                    <Carousel
                        autoPlay
                        infiniteLoop
                        interval={4000}
                        showThumbs={false}
                        statusFormatter={() => ''}
                    >
                        {news.latest.map(article => (
                            <div style={{ height: 350, position: 'relative' }} key={article.id}>
                                <img src={article.headerImage} style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: 10 }} />
                                <div style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
                                <div style={{ color: 'white', position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px' }}>
                                    <h2 style={{ margin: 0, textAlign: 'left' }}>{article.headline}</h2>
                                    <p style={{ marginBottom: 20, marginTop: 5, textAlign: 'left', fontSize: 14 }}>{article.subheader}</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                ) : (
                    <div style={{ width: '100%', height: 350 }}>
                        <p>Loading news stories...</p>
                    </div>
                )}
                <div style={{ padding: 10, width: '100%' }}>
                    <h2>Welcome to RefBias</h2>
                    <p>Come see what it's all aboutaso dasd; lfsdf askdfalsd dfkj sdl fsdfsjfsldf jsdfj slfsdlfsdlfskdf sldf jsdlf sldf sf sdfs dfsk f sldkfdlf sfdk sldfsld fslf sdf sjdflsjdflksdf sdk f:</p>
                </div>
            </Paper>
        </div>
    );
};