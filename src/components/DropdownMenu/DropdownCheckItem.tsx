import React from "react";
import classNames from "classnames";

export interface RibbonDropdownCheckItemProps {
    className?: string,
    target?: string,
    caption?: string,
    children?: React.ReactNode,
    checked?: boolean,
    onClick?: any
}

export interface RibbonDropdownCheckItemState {
    checked: boolean
}

class RibbonDropdownCheckItem extends React.Component {

    state: RibbonDropdownCheckItemState = {
        checked: false
    }

    constructor(props: RibbonDropdownCheckItemProps) {
        super(props);

        this.state = {
            checked: props.checked || false
        }
    }

    render(){
        // @ts-ignore
        const {className, target, caption, children, onClick, ...rest} = this.props
        const {checked} = this.state

        const classes = classNames(className, (checked ? ' checked ' : ''))

        return (
            <li className={classes} {...rest} onClick={ () => {
                    this.setState({
                        checked: !this.state.checked
                    })
                }
            }>
                <a href={target} onClick={onClick}>{caption || children}</a>
            </li>
        )
    }
}

export default RibbonDropdownCheckItem