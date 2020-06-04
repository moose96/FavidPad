import React,{Component} from 'react';

class VideoCreateForm extends Component {
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

    handleSubmit = (event) => {
        event.preventDefault();
        let method = 'POST';

        if (this.props.match.params.id) {
            method = 'PATCH';
        }

        fetch('http://localhost:3000/v1/movies',{
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                description: this.state.description,
                video_url: this.state.videoUrl
            })
        })
        .then(response => {
            if (response.status === 201) {
                console.log('ok');
            } else if (response.status === 400) {
                throw Error('bad request');
            } else if (response.status === 404) {
                throw Error('not found');
            }
        })
        .catch(err => console.log(err));
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            fetch(`http://localhost:3000/v1/movies/${this.props.match.params.id}`)
            .then(response => {
                if(response.status === 200) {
                    return response.json();
                } else {
                    throw Error('not found');
                }
            })
            .then(data => {
                this.setState({
                    title: data.title,
                    description: data.description,
                    videoUrl: data.video_url,
                    noVideo: false
                });
            })
            .catch(err => {
                console.log(err);
                this.setState({ noVideo: true });
            })
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
                <form onSubmit={this.handleSubmit}>
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