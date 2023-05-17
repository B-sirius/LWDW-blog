import dayjs from 'dayjs';
import postMapJson from '../postMap.json';
import { PostMap } from './type';

const postMap: PostMap = postMapJson;

const getSortedPosts = () => Object
    .values(postMap)
    .sort((post1, post2) => {
        const date1 = dayjs(post1.date);
        const date2 = dayjs(post2.date);
        if (date1.isBefore(date2)) {
            return 1;
        }
        return -1;
    });

export default getSortedPosts;