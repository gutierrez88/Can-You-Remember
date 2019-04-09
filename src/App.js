import React from "react";
import Top from "./components/Top";
import Score from "./components/Score";
import Game from "./components/Game";
import Footer from "./components/Footer";
import pictures from "./pictures.json";
import "./App.css";

class App extends React.Component {
  state = {
    pictures,
    clicked: [],
    current: 0,
    best: 0,
    wins: 0,
    loses: 0
  };

  handleScore = id => {
    const notClicked = this.state.clicked.indexOf(id) > -1;

    if(!notClicked) {
      this.state.clicked.push(id);
      if(this.state.current === this.state.best){
        this.setState({
          pictures: this.state.pictures.sort( 
            function(a,b) { 
              return 0.5 - Math.random();
            }
          ),
          current: this.state.current + 1,
          best: this.state.best + 1
        },
          () => {
            if( this.state.current === 12) {
              alert("You have Won the Memory Game Congradulations!");
              this.setState({
                pictures: this.state.pictures.sort( 
                  function(a,b) { 
                    return 0.5 - Math.random();
                  }
                ),
                current: 0,
                clicked: [],
                wins: this.state.wins + 1
              })
            }
          }
        )
      }else{
        this.setState({
          pictures: this.state.pictures.sort( 
            function(a,b) { 
              return 0.5 - Math.random();
            }
          ),
          current: this.state.current + 1
        },
          () => {
            if( this.state.current === 12) {
              alert("You have Won the Memory Game Congradulations!");
              this.setState({
                pictures: this.state.pictures.sort( 
                  function(a,b) { 
                    return 0.5 - Math.random();
                  }
                ),
                current: 0,
                clicked: [],
                wins: this.state.wins + 1
              })
            }
          }
        )
      };
    }else{
      this.setState({
        pictures: this.state.pictures.sort( 
          function(a,b) { 
            return 0.5 - Math.random();
          }
        ),
        current: 0,
        clicked: [],
        loses: this.state.loses + 1
      })
    };

  
  };

  render() {
    return (
      <div>
        <Top current={this.state.current} best={this.state.best} />
        <Score />
        <div className="container row">
        {this.state.pictures.map( picture => (
          <Game 
          handleScore={this.handleScore}
          key={picture.id}
          image={picture.image} 
          id={picture.id}
          />
        ))}
        </div>
          <Footer wins={this.state.wins} loses={this.state.loses} />
      </div>
    )
  }
}

export default App;
