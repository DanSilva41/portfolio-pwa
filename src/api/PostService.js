import { Post } from '../model/Post';

export class PostService {
    static getLatestPosts() {
        return [
            new Post('5 dicas para sua carreira', '...'),
            new Post('5 dicas para sua carreira', '...'),
            new Post('5 dicas para sua carreira', '...')
        ]
    }
}