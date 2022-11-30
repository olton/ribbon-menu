import React, {Children, cloneElement, useState} from "react";
import classNames from "classnames";

import "./Dropdown.css"

export interface RibbonDropdownProps {
    children?: React.ReactNode
    open: boolean
}

export interface RibbonDropdownState {
    isOpen: boolean
}

class RibbonDropdown extends React.Component<any, any>{
    state: RibbonDropdownState = {
        isOpen: false
    }

    constructor(props: RibbonDropdownProps) {
        super(props);

        this.state = {
            isOpen: false
        }

        this.toggleState = this.toggleState.bind(this);
    }

    toggleState(e: Event){
        const openState = this.state.isOpen;

        this.setState({
            isOpen: !openState
        });

        e.preventDefault();
    }

    render(){
        const {children} = this.props
        const [toggle, menu] = Children.toArray(children)
        const {isOpen} = this.state
        const classes = classNames(
            'dropdown',
            isOpen ? 'dropped' : ''
        )

        return (
            <div className={classes}>
                {/*@ts-ignore*/
                    toggle && cloneElement(toggle, {
                        /*@ts-ignore*/
                        className: ( "props" in toggle && toggle.props.className ? toggle.props.className : '') + ' dropdown-toggle ' + (isOpen ? ' active-toggle ' : ''),
                        onClick: this.toggleState
                })}

                <nav className={`drop-object ` + (isOpen ? ' open ' : '')}>
                    {menu}
                </nav>
            </div>
        )
    }
}

export default RibbonDropdown