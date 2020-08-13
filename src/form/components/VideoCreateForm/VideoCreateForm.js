import React,{ PureComponent } from 'react';

import Text from '../../../ui/components/input/Text';
import Button from '../../../ui/components/input/button/Button';
import './VideoCreateForm.scss';
import '../../../styles/iconmoon/style.scss';
import VideoUrlParser from '../../../utility/urlparser';
import placeholder from '../../../assets/images/019-play.png';

class VideoCreateForm extends PureComponent {
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
    this.props.onReset(event);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let data = {
      title: this.state.title,
      description: this.state.description,
      video_url: this.state.videoUrl
    };

    this.props.onSubmit(data);
  }

  setStateFromProps() {
    if (this.props.data) {
      if (this.props.data.noVideo) {
        this.setState({ noVideo: true })
      } else {
        const { title, description, video_url, thumbnail } = this.props.data;
        this.setState({
          title,
          description,
          videoUrl: video_url,
          thumbnail,
          formTitle: 'Edytuj video',
          submitButtonValue: 'Zaktualizuj'
        });
      }
    }
  }

  componentDidMount() {
    this.setStateFromProps();
  }

  componentDidUpdate() {
    this.setStateFromProps();
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