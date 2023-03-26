import React from "react";
import classNames from "classnames";

export interface IRibbonDropdownCheckItemProps {
    className?: string,
    target?: string,
    caption?: string,
    children?: React.ReactNode,
    checked?: boolean,
    onClick?: any,
    hotkey?: string
}

export interface IRibbonDropdownCheckItemState {
    checked: boolean
}

class RibbonDropdownCheckItem extends React.Component<IRibbonDropdownCheckItemProps, IRibbonDropdownCheckItemState> {

    state: IRibbonDropdownCheckItemState = {
        checked: false
    }

    constructor(props: IRibbonDropdownCheckItemProps) {
        super(props);

        this.state = {
            checked: props.checked || false
        }
    }

    render(){
        // @ts-ignore
        const {hotkey = "", className, target, caption, children, onClick, ...rest} = this.props
        const {checked} = this.state

        const classes = classNames(className, (checked ? ' checked ' : ''))

        return (
            <li className={classes} {...rest} onClick={ () => {
                    this.setState({
                        checked: !checked
                    })
                }
            }>
                <a href={target} onClick={onClick} data-hotkey={hotkey}>{caption || children}</a>
            </li>
        )
    }
}

export default RibbonDropdownCheckItem