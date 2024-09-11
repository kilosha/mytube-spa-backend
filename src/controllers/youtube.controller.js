import YoutubeServices from "../services/youtube.service.js";

class YoutubeControllers {
    async getVideos(req, res) {
        try {
            if (req.body.searchText) {
                const videos = await YoutubeServices.getVideos(req.body.searchText, req.body.maxResults);
                res.send(videos);
            } else {
                throw new Error("Не ввели ничего(")
            }

        } catch (e) {
            //Sentry.captureException(e);
            res.status(400).send({ message: e.message });
        }
    }
}

export default new YoutubeControllers();