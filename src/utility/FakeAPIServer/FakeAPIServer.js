const API_URL = '/database.json';

class FakeAPIServer {
    get(options) {
        return new Promise((resolve, reject) => {
            fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                if (options && options.id) {
                    let video = data.find(video => video.id === options.id);

                    if (video) {
                        resolve({ type: 'video' , data: video });
                    } else {
                        reject();
                    }
                } else {
                    resolve({ type: 'list', data });
                }
            });
        });
    }
}

export default FakeAPIServer;