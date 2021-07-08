import React, { Component } from "react";
import VideoTrack from "./VideoTrack";
import AudioTrack from "./AudioTrack";
import { addMessageToMessenger } from "../../../Utils/TwilioUtils";
class Participant extends Component {
  constructor(props) {
    super(props);
    const exsistingPublications = Array.from(
      this.props.participant.tracks.values()
    );
    const existingTracks = exsistingPublications.map(
      (publication) => publication.track
    );
    const notNullTracks = existingTracks.filter((track) => track != null);
    this.state = {
      tracks: notNullTracks,
    };
  }
  componentDidMount() {
    if (!this.props.localParticipant) {
      this.props.participant.on("trackSubscribed", (track) => {
        if (track.kind === "data") {
          track.on("message", (data) => {
            addMessageToMessenger(JSON.parse(data));
          });
        } else {
          this.addTrack(track);
        }
      });
      this.props.participant.on("trackUnpublished", (track) => {
        this.removeTrack(track);
      });
    }
  }

  addTrack(track) {
    if (track) {
      this.setState({
        tracks: [...this.state.tracks, track],
      });
    }
  }

  removeTrack(track) {
    if (track) {
      const newTracks = this.state.tracks.filter(
        (t) => t.name !== track.trackName
      );

      this.setState({
        tracks: newTracks,
      });
    }
  }

  render() {
    return (
      <div className="participant" id={this.props.participant.identity}>
        {this.state.tracks.map((track) => {
          if (track.kind === "audio") {
            return <AudioTrack key={track} track={track}></AudioTrack>;
          }
          if (track.kind === "video") {
            return <VideoTrack key={track} track={track}></VideoTrack>;
          }
        })}
      </div>
    );
  }
}
export default Participant;
