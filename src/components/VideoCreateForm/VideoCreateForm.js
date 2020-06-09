import React,{ Component } from 'react';

import { API_URL } from '../../global';
import { Text } from '../Form';
import './VideoCreateForm.scss';
import '../../styles/iconmoon/style.scss';
import VideoUrlParser from '../../utility/urlparser';
import placeholder from '../../images/019-play.png';

class VideoCreateForm extends Component {
  parser = new VideoUrlParser();

  state = {
    title: '',
    description: '',
    videoUrl: '',
    noVideo: false,
    thumbnail: placeholder
  };

  getThumbnail = (url) => {
    this.setState({ thumbnail: this.parser.parseThumb(url) });
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleBlurVideoUrl = (event) => {
    this.getThumbnail(event.target.value);
  }

  handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    let method = 'POST';

    if (this.props.match.params.id) {
      method = 'PATCH';
    }

    fetch(`${API_URL}/v1/movies`,{
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
        this.props.history.push('/');
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
      fetch(`${API_URL}/movies/${this.props.match.params.id}`)
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
          },this.setState({ thumbnail: this.parser.parseThumb(data.video_url) }));
      })
      .catch(err => {
        console.log(err);
        this.setState({ noVideo: true });
      })
    }
  }

  render() {
    const { title, description, videoUrl, noVideo, thumbnail } = this.state;

    if (noVideo) {
        return(
            <div>
                <h2>Nie znaleziono filmu.</h2>
            </div>
        );
    } else {
        return(
          <form className="video-create-form" onSubmit={this.handleSubmit}>
            <div className="video-create-form__vertical">
              <img className="video-create-form__thumbnail" src={thumbnail} alt="thumb" />
              <div className="video-create-form__horizontal">
                <Text name="title" label="Tytuł filmu" value={title} onChange={this.handleInputChange} required/>
                <Text name="videoUrl" label="Adres URL" value={videoUrl}
                onChange={this.handleInputChange} onBlur={this.handleBlurVideoUrl} required/>
              </div>
            </div>
            <div className="video-create-form__fluid">
              <Text multiline name="description" label="Opis" value={description} onChange={this.handleInputChange} required/>
            </div>
              <input type="submit" value="Dodaj" />
          </form>
        );
    }
  }
}

export default VideoCreateForm;