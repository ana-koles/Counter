import React from 'react';

export const Counter = () => {
  return (
    <div>

      <div className='wrapper'>
        <div className='content_wrapper'>
          <div className='value_content'>
            <span>max value:</span>
            <input type="number" />
          </div>
          <div className='value_content'>
            <span>min value:</span>
            <input type="number" />
          </div>
        </div>

        <div className='content_wrapper'>
          <button>set</button>
        </div>
      </div>

      <div className='wrapper'>
        <div className='content_wrapper'>
          <div className='value_content'>
            <div></div>
            <p></p>
          </div>
        </div>

        <div className='content_wrapper'>
          <button>inc</button>
          <button>reset</button>
        </div>
      </div>

    </div>
  );
};

