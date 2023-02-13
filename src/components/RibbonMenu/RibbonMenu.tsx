import React, {Children, ReactNode} from "react";
import classNames from "classnames";
import RibbonTabNav from "../Tabs/TabNav";
import RibbonTab from "../Tabs/Tab";

import "./RibbonMenu.less"

export interface IRibbonMenuProps {
    children?: React.ReactNode,
    className?: string
}

export interface IRibbonMenuState {
    activeTab: string
}

class RibbonMenu extends React.Component<IRibbonMenuProps, IRibbonMenuState> {

    state: IRibbonMenuState = {
        activeTab: ''
    }

    constructor(props: IRibbonMenuProps) {
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
        this.windowResize = this.windowResize.bind(this)
    }

    componentDidMount() {
        window.addEventListener("resize", this.windowResize)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.windowResize)
    }

    windowResize(){
        const height = window.innerHeight
        const width = window.innerWidth
    }

    renderTabs(): React.ReactNode {
        // @ts-ignore
        const { children = [] } = this.props;
        // @ts-ignore
        const { activeTab } = this.state;

        // @ts-ignore
        return Children.map(children, (el: React.ReactElement, index)=>{
            const {mode, label} = el.props
            return (
                <RibbonTabNav
                    key={index}
                    index={index}
                    staticTab={mode && mode === 'static'}
                    label={label}
                    active={activeTab.toLowerCase() === label.toLowerCase()}
                    onClick={this.onTabClick}
                />
            )
        })
    }

    renderSections(): React.ReactNode {
        // @ts-ignore
        const { children = [] } = this.props;
        // @ts-ignore
        const { activeTab } = this.state;

        return Children.map(children, (el, index)=>{
            // @ts-ignore
            const {label, children} = el.props
            return (
                <RibbonTab key={index} label={label.toLowerCase()} active={activeTab === label.toLowerCase()}>
                    {children}
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