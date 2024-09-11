import Utils from "../utils/utils.js";

class YoutubeServices {
    async getVideos(searchParams) {
        const searchText = searchParams.searchText;
        const resultsAmount = searchParams.maxResults || 12;
        const link = `${process.env.YOUTUBE_LINK}/search?part=snippet&maxResults=${resultsAmount}&q=${searchText}&type=video&key=${process.env.YOUTUBE_API_KEY}`;

        const response = await fetch(link);
        const data = await response.json();

        return Utils.transformSearchResponse(data.items);
    }
}

export default new YoutubeServices;