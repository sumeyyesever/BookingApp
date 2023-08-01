import "./trendingList.scss";

export default function TrendingList() {
    return (
        <div className='trending-container'>
        <h1>Trending destinations</h1>
        <p>Most popular choices for travelers</p>
            <div className='trending-wrapper'>
                <div className='top'>
                    <div className='trending-item'>
                        <img src='/assets/trending_1.jpg' />
                        <span>Paris</span>
                    </div>
                    <div className='trending-item'>
                        <img src='/assets/trending_2.jpg' />
                        <span>Athens</span>
                    </div>
                </div>
                <div className='bottom'>
                <div className='trending-item'>
                        <img src="/assets/trending_3.jpg" />
                        <span>Amsterdam</span>
                    </div>
                    <div className='trending-item'>
                        <img src='/assets/trending_4.jpg' />
                        <span>Rome</span>
                    </div>
                    <div className='trending-item'>
                        <img src='/assets/trending_5.jpg' />
                        <span>Belgrade</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
