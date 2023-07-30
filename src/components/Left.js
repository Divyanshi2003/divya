import React from 'react';
import './left.css';
export default function Left() {
  return (
    <>
      <div className='Left'>
        <div className='target-element'>
          <label for='targetElement'>Target Element :</label>
          <br />
          <select name='targetElement' id='targetElement'>
            <option value='Button1'>Button 1</option>
            <option value='Button2'>Button 2</option>
            <option value='Button3'>Button 3</option>
            <option value='Button4'>Button 4</option>
            <option value='Button5'>Button 5</option>
          </select>
        </div>
        <div className='tooltip-text'>
          <label for='tooltipText'>Tooltip Text :</label>
          <br />
          <input type='text' id='tooltipText' name='tooltipText' />
        </div>
        <div className='textsize-padding'>
          <label for='textSize'>Text Size :</label>
          <label for='padding'>Padding :</label>
          <br />
          <input type='number' id='textSize' name='textSize' />
          <input type='number' id='padding' name='padding' />
        </div>
        <div className='text-color'>
          <label for='textColor'>Text Color :</label>
          <br />
          <input type='text' id='textColor' name='textColor' />
        </div>
        <div className='background-color'>
          <label for='backgroundColor'>Background Color :</label>
          <br />
          <input type='text' id='backgroundColor' name='backgroundColor' />
        </div>
        <div className='radius-tooltip'>
          <label for='radius'>Radius :</label>
          <label for='tooltip'>Tooltip :</label>
          <br />
          <input type='number' id='radius' name='radius' />
          <input type='number' id='tooltip' name='tooltip' />
        </div>
        <div className='arrow-width-height'>
          <label for='arrowWidth'>Arrow Width :</label>
          <label for='arrowHeight'>Arrow Height :</label>
          <br />
          <input type='number' id='arrowWidth' name='arrowWidth' />
          <input type='number' id='arrowHeight' name='arrowHeight' />
        </div>
      </div>
      <div className='Right'>
        <div className='first'>
          <div>Button 1</div>
          <div>Button 2</div>
        </div>
        <div className='second'>
          <div className=''>Button 3</div>
        </div>
        <div className='third'>
          <div>Button 4</div>
          <div>Button 5</div>
        </div>
      </div>
    </>
  );
}