import React from "react";
import classNames from "classnames";

import "./ButtonGroup.css"

export interface RibbonButtonGroupProps {
    active?: number | number[],
    radio?: boolean,
    children?: React.ReactNode,
    className?: string,
    classNameActive?: string,
    classNameButton?: string,
    style?: any,
    onButtonClick?: any,
}

export interface RibbonButtonGroupState {
    radio: boolean,
    buttons: any
}

class RibbonButtonGroup extends React.Component<RibbonButtonGroupProps, RibbonButtonGroupState> {

    state: RibbonButtonGroupState = {
        radio: false,
        buttons: []
    }

    constructor(props: RibbonButtonGroupProps){
        super(props);

        const {active, radio = false} = props
        const pressedButtons = [];

        if (typeof active !== "undefined") {
            if (!Array.isArray(active)) {
                pressedButtons.push(active);
            } else {
                active.forEach((ind) => {
                    pressedButtons.push(ind);
                })
            }
        }

        this.state = {
            radio,
            buttons: pressedButtons || []
        };

        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick(index: number){
        const {children, onButtonClick = () => {}} = this.props;
        const {buttons, radio} = this.state;
        const active = buttons.includes(index);
        const button = React.Children.toArray(children)[index - 1];

        if (!radio) {
            if (!active) {
                buttons.push(index)
            } else {
                buttons.splice(buttons.indexOf(index), 1)
            }

            this.setState({
                buttons: buttons
            });
        } else {
            this.setState({
                buttons: [index]
            });
        }
        if (typeof onButtonClick === 'function')
            onButtonClick(button);
    }

    render(){
        const {children, className, classNameActive, classNameButton, style} = this.props;
        const {buttons, radio} = this.state;
        const classes = classNames(
            "ribbon-toggle-group",
            "button-group",
            className,
            radio ? 'radio-group' : 'check-group'
        )

        return (
            <div className={classes} style={style}>
                {
                    React.Children.map(children, (button: any, index: number) => {
                        const props = button.props
                        const correctIndex = index + 1;
                        const isActive = buttons.includes(correctIndex);
                        const buttonClasses = classNames(
                            props.className,
                            classNameButton,
                            isActive ? !classNameActive ? ' active ' : classNameActive : ''
                        )
                        return (
                            React.cloneElement(button, {
                                className: buttonClasses,
                                index: correctIndex,
                                onClick: this.buttonClick.bind(this, correctIndex)
                            })
                        )
                    })
                }
            </div>
        )
    }
}

export default RibbonButtonGroup