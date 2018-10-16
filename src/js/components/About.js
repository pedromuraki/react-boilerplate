import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { TimelineLite } from 'gsap/TweenMax';
import imgAbout from '../../img/about.jpg';

const mapStateToProps = state => {
  return {
    hideMainComponent: state.hideMainComponent
  };
};

class About extends Component {
  constructor() {
    super();
    this.headlineDiv = React.createRef();
    this.contentDiv = React.createRef();
  }

  componentDidMount() {
    new TimelineLite()
      .from(this.headlineDiv.current, 1, {
        y: 25,
        opacity: 0
      }, .5)
      .from(this.contentDiv.current, 1, {
        y: 25,
        opacity: 0
      }, .75);
  }

  render() {
    return (
      <CSSTransition
        in={this.props.hideMainComponent}
        timeout={1000}
        classNames="hide"
      >
        <main className="main about">
          <div ref={this.headlineDiv}>
            <h2 className="headline">Mais que uma agência <br />e booker...</h2>
          </div>
          <div ref={this.contentDiv}>
            <p className="text text--16">Com 15 anos de experiência no mercado de eventos, unimos comercial e produção, com o propósito de apertar o <span className="italic">PLAY</span> nas melhores festas. Para as sócias <strong>Camila Sant' Anna</strong> e <strong>Thais Fernandes</strong>, a música tem uma experiência transformadora, especial, diferente e única. Por esse motivo entendemos sua festa, e indicamos a melhor solução de acordo com a experiência que você quer proporcionar a seus convidados, ou seja, recebemos um briefing, entregamos um artista! Espalhamos música por aí.</p>
            <p className="text text--16 bold italic">#Music.Life.And-GO #SevvenUpAperteOPlay</p>
            <img src={imgAbout} alt="Camila Sant' Anna e Thais Fernandes" />
          </div>
        </main>
      </CSSTransition>
    );
  }
}

export default connect(mapStateToProps)(About);
