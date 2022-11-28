import React, {Children} from "react";
import classNames from "classnames";
import RibbonTabNav from "./TabNav";
import RibbonTab from "./Tab";

import "./RibbonMenu.css"

export interface RibbonMenuProps {
    children: React.ReactNode
}

class RibbonMenu extends React.Component {
    constructor(props: RibbonMenuProps) {
        super(props);

        const tabs: any[] = Children.toArray(props.children)
        let staticTabs = -1

        tabs.forEach((tab: any, index: number) => {
            if (tab.props.mode === 'static') {
                staticTabs++
            }
        })

        this.state = {
            activeTab: tabs[staticTabs+1] ? tabs[staticTabs+1].props.label.toLowerCase() : ''
        }

        this.onTabClick = this.onTabClick.bind(this)
    }

    renderTabs(){
        // @ts-ignore
        const { children = [] } = this.props;
        // @ts-ignore
        const { activeTab } = this.state;

        return Children.map(children, (el, index)=>{
            return (
                <RibbonTabNav
                    key={index}
                    index={index}
                    staticTab={el.props.mode === 'static'}
                    label={el.props.label}
                    active={activeTab.toLowerCase() === el.props.label.toLowerCase()}
                    onClick={this.onTabClick}
                />
            )
        })
    }

    renderSections(){
        // @ts-ignore
        const { children = [] } = this.props;
        // @ts-ignore
        const { activeTab } = this.state;

        return Children.map(children, (el, index)=>{
            return (
                <RibbonTab key={index} label={el.props.label.toLowerCase()} active={activeTab === el.props.label.toLowerCase()}>
                    {el.props.children}
                </RibbonTab>
            )
        })
    }

    onTabClick(e: any){
        const staticTab = e.target.getAttribute('data-static') === 'true'
        const label = e.target.getAttribute('data-label')

        if (staticTab) {
            return
        }

        this.setState({
            activeTab: label
        })
    }

    render(){
        // @ts-ignore
        const {children, className, ...attrs} = this.props
        // const {activeTab} = this.state

        const classes = classNames(
            `ribbon-menu`,
            className
        )

        return (
            <nav className={classes} {...attrs}>
                <ul className={`tabs-holder`}>
                    {this.renderTabs()}
                </ul>

                <div className={`content-holder`}>
                    {this.renderSections()}
                </div>
            </nav>
        )
    }
}

export default RibbonMenu