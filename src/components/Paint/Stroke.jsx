import { useState } from 'react';
import Popover from '@mui/material/Popover';
import Slider from '@mui/material/Slider';

const Stroke = ( { setStrokeColour, setStrokeSize } ) => {
    // const { canvas, colour } = props
    const [ anchor, setAnchor] = useState(null);

    const _handleClick = (event) => {
        setAnchor(event.currentTarget);
    };

    const _handleClose = () => {
        setAnchor(null);
    };

    const open = Boolean(anchor);
    const id = open ? 'simple-popover' : undefined; //This is the only part of this I don't understand https://mui.com/material-ui/react-popover/

    return (
        <>
            <button className="add_button add_stroke_custom" onClick= { _handleClick } title="Set Brush Size"></button>
            <Popover
                sx={{ width: 500 }}
                id={id}
                open={open}
                anchorEl={anchor}
                style={{ maxWidth: 1000}}
                onClose={_handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
            <div>
                <span className="slider-label">Stroke Width</span>
                <Slider
                    sx={{ width: 200,
                        my: 2,
                        mx: 2 }}
                    defaultValue={5} 
                    valueLabelDisplay="auto"
                    step={1}
                    min={1}
                    max={50}
                    width={500}
                    // value={value}
                    onChange={(e) => setStrokeSize(e.target.value)}
                />
            </div>
            <p>Stroke Colour </p>
            <input type="color" id="color-picker" className="add_button add_colour_select" onChange={(e) => setStrokeColour(e.target.value)} title="Set Stroke Colour" />

            </Popover>
        </>
    )
};

export default Stroke;