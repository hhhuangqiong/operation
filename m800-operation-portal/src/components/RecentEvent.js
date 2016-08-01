import React, { PropTypes, Component } from 'react';

const pd = require('pretty-data2').pd;
class RecentEvent extends Component {
  constructor(props) {
    super(props);
    this.openAlicationConfig = this.openAlicationConfig.bind(this);
    this.openLibrariesConfig = this.openLibrariesConfig.bind(this);
    this.convertStringToBlob = this.convertStringToBlob.bind(this);
  }
  convertStringToBlob(string) {
    return new Blob([string], { type: 'application/json' }); // change to your mime type
  }
  openTab(blob) {
    window.open(URL.createObjectURL(blob));
  }
  openAlicationConfig() {
    let applicationConfig = pd.json(this.props.applicationConfig);
    applicationConfig = this.convertStringToBlob(applicationConfig);
    this.openTab(applicationConfig);
  }
  openLibrariesConfig() {
    let libraries = pd.json(JSON.stringify(this.props.libraries));
    libraries = this.convertStringToBlob(libraries);
    this.openTab(libraries);
  }
  render() {
    const { type, timestamp, region, uniqueId,
    sourceIp, resources, javaVersion, osVersion } = this.props;

    return (
      <tr>
        <td>{type}</td>
        <td>{timestamp}</td>
        <td><a href="#" onClick={this.openAlicationConfig}>open JSON file</a></td>
        <td><a href="#" onClick={this.openLibrariesConfig}>open JSON file</a></td>
        <td>{region}</td>
        <td>{uniqueId}</td>
        <td>{sourceIp}</td>
        <td>{resources['com.maaii.resource.single.sign.on']}</td>
        <td>{javaVersion}</td>
        <td>{osVersion}</td>
      </tr>
    );
  }
}

RecentEvent.propTypes = {
  type: PropTypes.string.isRequired,
  timestamp: PropTypes.number,
  applicationConfig: PropTypes.string,
  libraries: PropTypes.array,
  region: PropTypes.string,
  uniqueId: PropTypes.string,
  sourceIp: PropTypes.string,
  resources: PropTypes.object,
  javaVersion: PropTypes.string,
  osVersion: PropTypes.string,
};

export const recentEventShape = PropTypes.shape(RecentEvent.propTypes);

export default RecentEvent;
