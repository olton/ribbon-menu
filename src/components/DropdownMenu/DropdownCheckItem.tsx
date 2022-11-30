import React from "react";

export interface RibbonDropdownCheckItemProps {
    className?: string,
    target?: string,
    caption?: string,
    children?: React.ReactNode,
    checked?: boolean
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
        const {className, target, caption, children, ...rest} = this.props
        const {checked} = this.state

        const classes = className + (checked ? ' checked ' : '')

        return (
            <li className={classes} {...rest} onClick={ (e) => {
                    this.setState({
                        checked: !this.state.checked
                    })
                    e.preventDefault()
                }
            }>
                <a href={target}>{caption || children}</a>
            </li>
        )
    }
}

export default RibbonDropdownCheckItem