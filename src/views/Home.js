import { useEffect, useState } from "react";
import { PostService } from "../api/PostService";
import { AutorBiografy } from "../components/AutorBiography";
import { LatestPosts } from "../components/LatestPosts";

export const Home = () => {
    const [latestPosts, setLatestPosts] = useState([]);

    const fetchLatestPosts = () => {
        setLatestPosts(PostService.getLatestPosts())
    }

    useEffect(() => {
        fetchLatestPosts()
    }, [])

    return (
        <>
            <AutorBiografy />
            <LatestPosts posts={latestPosts}/>
        </>
    )
}