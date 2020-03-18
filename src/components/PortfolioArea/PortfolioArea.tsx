import React, { Component, MouseEvent } from "react";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import PortfolioContentPhotography from "../PortfolioContentPhotography/PortfolioContentPhotography"
import PortfolioContentDesign from "../PortfolioContentDesign/PortfolioContentDesign"
import "./PortfolioArea.scss";

export default class PortfolioArea extends React.Component {
    handleClick(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        alert(e.currentTarget.tagName); // alerts BUTTON
    }

    handleAnotherClick(e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) {
        e.preventDefault();
        alert('Yeah!');
    }

    render() {
        return (
            <div className="portfolio-area">
                <div className="container">
                    <div className="flex-title-row">
                        <h3>Valokuvaus</h3>
                        <div className="icon-item">
                            <button
                                onClick={this.handleClick}
                                className="show-content-btn">{this.props.children}<ExpandLessIcon />
                            </button>
                        </div>
                    </div>
                    <PortfolioContentPhotography/>
                    <div className="flex-title-row">
                        <h3>Design ja grafiikka</h3>
                        <div className="icon-item">
                            <button
                                onClick={this.handleClick}
                                className="show-content-btn">{this.props.children}<ExpandLessIcon />
                            </button>
                        </div>
                    </div>
                    <PortfolioContentDesign/>
                </div>
            </div>
        );
    }
}