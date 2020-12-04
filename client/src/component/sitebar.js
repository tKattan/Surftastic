import React, { Component } from 'react';
import NavBar, { ElementsWrapper } from 'react-scrolling-nav';


class SiteBar extends Component {
    render() {
        const navbarItems = [{
            label: "Item 1",
            target: "item-1"
        }, {
            label: "Item 2",
            target: "item-2"
        }, {
            label: "Item 3",
            target: "item-3"
        }, ]
        return (
            <div>
                <NavBar items={navbarItems} offset={0} duration={500} delay={0} backgroundColor={"#2c7873"}>
                </NavBar>
                <div className="container">
                    <ElementsWrapper items={navbarItems}>
                        <div name="item-1" className="item">item 1</div>
                        <div name="item-2" className="item">item 2</div>
                        <div name="item-3" className="item">item 3</div>
                    </ElementsWrapper>
                </div>
            </div>
        );
    }
}

export default SiteBar;