import React from 'react';
import UpperBar from '../../components/Articles/UpperBar';
import Feed from '../../components/Articles/Feed';
import Widgets from '../../components/Articles/Widgets';
import istambol from '../../public/istambol.webp'

function Article(props) {
    return (
        <div className='flex'>
            <div className='flex-1 m-4 p-4'>
                <Feed
                picture={istambol}
                title="title"
                date="date"
                description="dsecription"
                article="article"
                />
            </div>
            <div className=' md:w-1/6 border-l-2 border-cyan-500  m-4 p-4 overflow-auto md:block hidden'>
                <Widgets
                id='12'
                picture={istambol}
                title='title'
                description={'fzgkzpgozgkpozkpogS'}
                />
                
            </div>
        </div>
    );
}

export default Article;