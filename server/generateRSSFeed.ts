// 更新RSS订阅源
import fs from 'fs';
import RSS from 'rss';
import dayjs from 'dayjs';
import getSortedPosts from './getSortedPosts';

const sortedPosts = getSortedPosts();

function generateRssFeed() {
    const site_url = 'https://b-sirius.github.io';

    const feedOptions = {
        title: 'LWDW! posts | RSS Feed',
        site_url,
        feed_url: `${site_url}/rss.xml`,
        pubDate: `${dayjs().format('YYYY-MM-DD')} 08:00:00`
    };

    const feed = new RSS(feedOptions);

    for (const item of sortedPosts) {
        const { date, title, id, description } = item;
        feed.item({
            title,
            description,
            url: `${site_url}/posts/${id}`,
            date
        })
    }

    fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}

generateRssFeed();