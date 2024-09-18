class Utils {
    transformSearchResponse(items) {
        const results = items.map((item) => {
            return {
                id : item.id.videoId,
                title : item.snippet.title,
                description : item.snippet.description,
                picture :item.snippet.thumbnails.high.url
            }
        });

        return results;
    }
}

export default new Utils();