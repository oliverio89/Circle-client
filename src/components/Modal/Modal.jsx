import { ReactDOM } from "react-dom"
import React, { Component } from "react"
import Portal from '../Portal/Portal'





export default class Modal extends Component {
    render() {
        const { children, toggle, active } = this.props
        return (
            <Portal>
                {active && (
                    <div style={styles.wrapper}>
                        <div style={styles.window}>
                            <button style={styles.closeBtn} onClick={toggle}>Cerrar la ventana</button>
                            <div>
                                {children}
                            </div>
                        </div>

                    </div>
                )

                }
            </Portal>
        )
    }
}

const styles = {
    wrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        heigth: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    window: {
        position: 'relative',
        background: "#fff",
        borderRadius: 5,
        padding: 15,
        boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
        zIndex: 10,
        minWidth: 320,
    },

    closeBtn: {
        position: 'absolute',
        top: 0,
        rigth: 0
    }

}