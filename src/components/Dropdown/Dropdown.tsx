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

    private dropdown: any

    constructor(props: RibbonDropdownProps) {
        super(props);

        this.state = {
            isOpen: false
        }
        this.dropdown = React.createRef();
        this.toggleState = this.toggleState.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount(){
        document.addEventListener("mousedown", this.handleClickOutside)
    }

    componentWillUnmount(){
        document.removeEventListener("mousedown", this.handleClickOutside)
    }

    handleClickOutside (e: Event) {
        // @ts-ignore
        if (this.dropdown.current && !this.dropdown.current.contains(e.target)) {
            this.setState({
                isOpen: false,
            })
        }
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
            <div className={classes} ref={this.dropdown}>
                {/*@ts-ignore*/
                    toggle && cloneElement(toggle, {
                        /*@ts-ignore*/
                        className: ( "props" in toggle && toggle.props.className ? toggle.props.className : '') + ' dropdown-toggle ' + (isOpen ? ' drop-active active-toggle ' : ''),
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