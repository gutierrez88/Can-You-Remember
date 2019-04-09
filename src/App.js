import React from "react";
import Top from "./components/Top";
import Score from "./components/Score";
import Game from "./components/Game";
import pictures from "./pictures.json";

class App extends React.Component {
  state = {
    pictures,
    clicked: [],
    current: 0,
    best: 0
  };

  handleScore = id => {
    const notClicked = this.state.clicked.map(() => id === null);

    if(notClicked) {
      this.state.clicked.push(id);
      if(this.state.current >= this.state.best){
        this.setState({
          pictures: this.state.pictures.sort( 
            function(a,b) { 
              return 0.5 - Math.random();
            }
          ),
          current: this.state.current + 1,
          best: this.state.current
        })
      }else{
        this.setState({
          pictures: this.state.pictures.sort( 
            function(a,b) { 
              return 0.5 - Math.random();
            }
          ),
          current: this.state.current + 1
        })
      };

      if( this.state.current = 12){
        alert("You have Won the Memory Game Congradulations!");
        this.setState({
          pictures: this.state.pictures.sort( 
            function(a,b) { 
              return 0.5 - Math.random();
            }
          ),
          current: 0,
          clicked: []
        })
      }
    }else{
      this.setState({
        pictures: this.state.pictures.sort( 
          function(a,b) { 
            return 0.5 - Math.random();
          }
        ),
        current: 0,
        clicked: []
      })
    };
  };

  render() {
    return (
      <div>
        <Top current={this.state.current} best={this.state.best} />
        <Score />
        <div class=" container row">
        {this.state.pictures.map( picture => (
          <Game 
          handleScore={this.handleScore}
          key={picture.id}
          image={picture.image} 
          id={picture.id}
          />
        ))}
        </div>
      </div>
    )
  }
}

export default App;
