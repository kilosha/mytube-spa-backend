import YoutubeServices from "../services/youtube.service.js";

class YoutubeControllers {
    async getVideos(req, res) {
        try {
            const videos = await YoutubeServices.getVideos(req.query);
            res.send(videos);
        } catch (e) {
            //Sentry.captureException(e);
            res.status(400).send({ message: e.message });
        }
    }
}

export default new YoutubeControllers();