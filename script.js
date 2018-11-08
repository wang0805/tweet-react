

class ListItems extends React.Component {
  render(){
      let list = <li><span>{this.props.user.name}</span>&nbsp;<span>@{this.props.user.screen_name}</span></li>
      let list2 = <li>{this.props.text}</li>
      let list3; //have to declare variable first
      if (this.props.entities.urls[0] != undefined){
        let url = "https://www."+this.props.entities.urls[0].display_url;
        list3 = <li><a href={url}>{this.props.entities.urls[0].display_url}</a></li>
      }
    
      return (
      <ul className="card">
        {list}
        {list2}
        {list3}
      </ul>
    );
  }
}

class Tweets extends React.Component {
  render() {
    let tweetelements = this.props.tweets.map(iterator => {
      return <ListItems user={iterator.user} entities={iterator.entities} text ={iterator.text}/>
    });

    return (
      <div>
        {tweetelements}
      </div>
    )
  }
}


ReactDOM.render(
    <div class="container">
      <Tweets tweets={tweets} />
    </div>,
    document.getElementById('root')
);
