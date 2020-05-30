import React,{Component} from 'react';

import FakeAPIServer from '../../utility/FakeAPIServer';

class VideoCreateForm extends Component {
    constructor(props) {
        super(props);

        this.fakeApi = new FakeAPIServer();
    }

    state = {
        title: '',
        description: '',
        videoUrl: '',
        noVideo: false
    };

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.fakeApi.get({ id: this.props.match.params.id })
            .then(data => {
                if (data.type === 'error') {
                    this.setState({ noVideo: true });
                } else {
                    this.setState({
                        title: data.data.title,
                        description: data.data.description,
                        videoUrl: data.data.url,
                        noVideo: false
                    });
                }
            });
        }
    }

    render() {
        const { title, description, videoUrl, noVideo } = this.state;

        if (noVideo) {
            return(
                <div>
                    <h2>Nie znaleziono filmu.</h2>
                </div>
            );
        } else {
            return(
                <form>
                    <input type="text" name="title" value={title} onChange={this.handleInputChange} />
                    <input type="text" name="description" value={description} onChange={this.handleInputChange} />
                    <input type="text" name="videoUrl" value={videoUrl} onChange={this.handleInputChange} />
                    <input type="submit" value="Dodaj" />
                </form>
            );
        }
    }
}

export default VideoCreateForm;