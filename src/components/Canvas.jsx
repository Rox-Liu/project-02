import { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import Toolbar from './Toolbar';

const Canvas = () => {
    const [ canvas, setCanvas ] = useState(null);

    // create the canvas object
    const initCanvas = () => { 
        // first argument in fabric.Canvas is html canvas ID
        const newCanvas = new fabric.Canvas('canvas', {
            height: 600,
            width: 600,
            backgroundColor: 'white'
        })
        return newCanvas;
    };

    function _handleToggleBold() {
        let activeInstance = canvas.getActiveObject();
        if (activeInstance && activeInstance.type === 'i-text') {
            console.log(activeInstance.selectionStart);
            console.log(activeInstance.selectionEnd);
            if (activeInstance.selectionStart !== activeInstance.selectionEnd) {
                let startIndex = activeInstance.selectionStart;
                let endIndex = activeInstance.selectionEnd;
                let styles = activeInstance.getSelectionStyles(startIndex, endIndex);
                let fontWeightSet = [...new Set(styles.map(style => style.fontWeight))];
                if (fontWeightSet.includes("bold")) {
                    activeInstance.setSelectionStyles({ 'fontWeight': 'normal'})
                } else {
                    activeInstance.setSelectionStyles({ 'fontWeight': 'bold'})
                }
            } else {
                if (activeInstance.fontWeight === 'bold') {
                    activeInstance.fontWeight = 'normal';
                } else {
                    activeInstance.fontWeight = 'bold';
                }
            }
        }
        canvas.renderAll();
    }

    function _handleToggleItalic() {
        let activeInstance = canvas.getActiveObject();
        if (activeInstance && activeInstance.type === 'i-text') {
            console.log(activeInstance.selectionStart);
            console.log(activeInstance.selectionEnd);
            if (activeInstance.selectionStart !== activeInstance.selectionEnd) {
                let startIndex = activeInstance.selectionStart;
                let endIndex = activeInstance.selectionEnd;
                let styles = activeInstance.getSelectionStyles(startIndex, endIndex);
                let fontStyleSet = [...new Set(styles.map(style => style.fontStyle))];
                if (fontStyleSet.includes("italic")) {
                    activeInstance.setSelectionStyles({ 'fontStyle': 'normal'})
                } else {
                    activeInstance.setSelectionStyles({ 'fontStyle': 'italic'})
                }
            } else {
                if (activeInstance.fontStyle === 'italic') {
                    activeInstance.fontStyle = 'normal';
                } else {
                    activeInstance.fontStyle = 'italic';
                }
            }
        }
        canvas.renderAll();
    }

    // render canvas on load
    useEffect( () => {
        setCanvas(initCanvas());
    }, []);

    return (
        <>
            <Toolbar canvas={ canvas } />
            <button className="fontButton" onClick={ _handleToggleBold }>B</button>
            <button className="fontButton fontItalics" onClick={ _handleToggleItalic }>I</button>
            <canvas id="canvas" />
        </>
    );
};

export default Canvas;