import { LatestPostsContainer } from "../styles/LatestPostsContainer";
import { ShortPost } from "./ShortPost";

export const LatestPosts = ({ posts }) => (
    <LatestPostsContainer>
        <div>
            <h1>Últimas do blog</h1>
            {posts.map(p =>
                <ShortPost title={p.title} description={p.description} />  
            )}
        </div>
    </LatestPostsContainer>
)