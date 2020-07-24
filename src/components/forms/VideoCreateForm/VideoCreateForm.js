import React,{ Component } from 'react';

import api from '../../../api';
import { Text } from '..';
import Button from '../Button';
import './VideoCreateForm.scss';
import '../../../styles/iconmoon/style.scss';
import VideoUrlParser from '../../../utility/urlparser';
import placeholder from '../../../images/019-play.png';

class VideoCreateForm extends Component {
  parser = new VideoUrlParser();

  state = {
    title: '',
    description: '',
    videoUrl: '',
    noVideo: false,
    thumbnail: placeholder,
    formTitle: 'Dodaj video',
    submitButtonValue: 'Dodaj'
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleBlurVideoUrl = (event) => {
    const url = this.parser.parseThumb(event.target.value);

    if (url.length > 0) {
      this.setState({ thumbnail: url });
    }
  }

  handleReset = (event) => {
    this.props.history.goBack();
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let data = {
      title: this.state.title,
      description: this.state.description,
      video_url: this.state.videoUrl
    };

    if (this.props.match.params.id) {
      api.patch(`/movies/${this.props.match.params.id}`, data)
        .then(() => this.props.history.push('/'))
        .catch(err => console.log(err));
    } else {
      api.post('/movies')
        .then(() => this.props.history.push('/'), data)
        .catch(err => console.log(err));
    }
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      api.get(`/movies/${this.props.match.params.id}`)
        .then(data => {
          this.setState({
            title: data.title,
            description: data.description,
            videoUrl: data.video_url,
            noVideo: false
          },this.setState({ thumbnail: this.parser.parseThumb(data.video_url) }));
        })
        .catch(err => this.setState({ noVideo: true }));

      this.setState({
        formTitle: "Edytuj video",
        submitButtonValue: "Zaktualizuj"
      });
    }
  }

  render() {
    const { title, description, videoUrl, noVideo, thumbnail, formTitle, submitButtonValue } = this.state;

    if (noVideo) {
        return(
            <div>
                <h2>Nie znaleziono filmu.</h2>
            </div>
        );
    } else {
        return(
          <form className="video-create-form" onSubmit={this.handleSubmit} onReset={this.handleReset}>
            <fieldset>
              <legend>{formTitle}</legend>
              <div className="video-create-form__vertical">
                <a href={videoUrl} target="blank">
                  <img className="video-create-form__thumbnail" src={thumbnail} alt="thumb" />
                </a>
                <div className="video-create-form__horizontal">
                  <Text name="title" label="Tytuł filmu" value={title} onChange={this.handleInputChange} required/>
                  <Text name="videoUrl" label="Adres URL" value={videoUrl}
                  onChange={this.handleInputChange} onBlur={this.handleBlurVideoUrl} required/>
                </div>
              </div>
              <div className="video-create-form__fluid">
                <Text multiline name="description" label="Opis" value={description} onChange={this.handleInputChange} required/>
              </div>
              <div className="video-create-form__buttons">
                <Button as="reset" type="flat-contrast">Anuluj</Button>
                <Button as="submit" Default type="flat-contrast">{submitButtonValue}</Button>
              </div>
            </fieldset>
          </form>
        );
    }
  }
}

export default VideoCreateForm;