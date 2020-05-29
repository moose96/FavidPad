import React,{Component} from 'react';

class VideoCreateForm extends Component {

    state = {
        title: '',
        description: '',
        videoUrl: ''
    };

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    componentDidMount() {
        this.setState({
            title: this.props.title,
            description: this.props.description,
            videoUrl: this.props.videoUrl,
        });
    }

    render() {
        const { title, description, videoUrl } = this.state;

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

VideoCreateForm.defaultProps = {
    title: '',
    description: '',
    videoUrl: ''
}

export default VideoCreateForm;