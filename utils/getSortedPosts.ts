import postMap from 'postMap.json';
import dayjs from 'dayjs';

type Post = {
    id: string;
    name: string;
    title: string;
    date: string;
    draft: boolean;
    description: string;
};

export default function getSortedPosts(): Post[] {
    // 按时间排序好的博客内容
    const sortedPosts = Object
        .values(postMap)
        .sort((post1, post2) => {
            const date1 = dayjs(post1.date);
            const date2 = dayjs(post2.date);
            if (date1.isBefore(date2)) {
                return 1;
            }
            return -1;
        });
    return sortedPosts;
}
