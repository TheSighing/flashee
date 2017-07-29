import React, { Component } from 'react';
import { TextInput } from 'react-native';
import DeckModel from './DeckModel';
import Utils from './Utils';
import ChimeeraApiUtil from './ChimeeraApiUtil';

//TODO Temporarily this will go here until you figure out separate concerns
// and have th API calls exist in its own file OR make this the search
// component instead of Omnibox
class OmniBox extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  componentWillMount() {
    this.setState({
      newValue: ''
    });
  }

  onChange(event){
    var title = event.nativeEvent.text;
    var dataList = this.props.data.filter((item) => item.title.match(new RegExp('.*' + title +'.*', 'gi')));

    this.setState({
      newValue: title
    });
    this.props.updateDataList(dataList);
  }

  //TODO Temporarily this will go here until you figure out separate concerns
  // and have th API calls exist in its own file OR make this the search
  // component instead of Omnibox
  getSearchFromApiAsync(term) {
    fetch('https://chimeera.herokuapp.com/chimeerapi/' + term, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
    })
    .then((response) => response.json())
    .then((responseJson) => {
      //TODO FOr each of the results you need to create a card/list entry,
      // then later it will be sub listingsthat are accessed via a click to get
      // to a list the same as now but THis top layer will be a list of decks
      // and the lower level is Cards
      // console.log("Result from search API async: ", responseJson);
      // console.log("Result from search API async: ", JSON.parse(responseJson));
      var result = JSON.parse(responseJson);
      var newDataItem = new DeckModel(term, result.data);
      console.log("The Deck Model looks like: ", newDataItem);
      // console.log("THE PROPS: ", this.props);

      var dataList = this.props.data;
      var dataItem = Utils.findTodo(newDataItem, dataList);
      if(dataItem) {
        Utils.move(dataList, (dataList.indexOf(dataItem)), 0);

        this.setState({
          newValue: ''
        });
        this.props.updateDataList(dataList);
        return;
      }

      dataList.unshift(newDataItem);

      this.setState({
        newValue: ''
      });
      this.props.updateDataList(dataList);

      // return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
  }


  onKeyPress(event){
    if (event.nativeEvent.key == 'Enter' && this.state.newValue) {
      var term = this.state.newValue;
      console.log("Search Term: ", term);
      // var dataList = this.props.data;
      // ChimeeraApiUtil.getSearchFromApiAsync(term);
      this.getSearchFromApiAsync(term);

      // var newDataItem = new DeckModel(term, 'Bunch of information');
      // console.log("The Card Model looks like: ", newDataItem);
      // console.log("THE PROPS: ", this.props);
      //
      // var dataList = this.props.data;
      // var dataItem = Utils.findTodo(newDataItem, dataList);
      // if(dataItem) {
      //   Utils.move(dataList, (dataList.indexOf(dataItem)), 0);
      //
      //   this.setState({
      //     newValue: ''
      //   });
      //   this.props.updateDataList(dataList);
      //   return;
      // }
      //
      // dataList.unshift(newDataItem);
      //
      // this.setState({
      //   newValue: ''
      // });
      // this.props.updateDataList(dataList);
    }
  }

  render() {
    return (
      <TextInput style={{height: 36, padding: 4, marginBottom: 0, fontSize: 16, borderWidth: 1, borderColor: '#eee', borderRadius: 8, backgroundColor: '#fff'}}
        placeholder='Add a todo or Search'
        blurOnSubmit={false}
        value={this.state.newValue}
        onKeyPress={this.onKeyPress}
        onChange={this.onChange}>
      </TextInput>
    );
  }
}

module.exports = OmniBox;
