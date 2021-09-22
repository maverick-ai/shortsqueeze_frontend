import React from "react";




const zodiacs = ['capricorn', 'aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius'];


function DateOfBirth() {


    function getZodiac(day, month) {
        let zodiac = [''].concat(zodiacs).concat([zodiacs[0]]),
            last = ['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
        return (parseInt(day) > last[parseInt(month)]) ? zodiac[parseInt(month) * 1 + 1] : zodiac[parseInt(month)];
    }

    function createZodiac(cls, index) {
        let div = <div style={{'--offset': index * -24 + 'px'}} className={cls}></div>;
        return div;
    }



  return (
    <React.Fragment>
      <div className="birthday">
        <div className="icon">
          <div className="normal">
            <svg
              viewBox="0 0 36 36"
              className="cake-smoke"
              fill="none"
              stroke="currentColor"
            >
              <path d="M18 11C18 11 18.832 7.48792 20.25 7C20.8172 6.80483 21.1828 7.19517 21.75 7C23.168 6.51208 24 3 24 3" />
              <path d="M17 8C17 8 16.0731 6.29007 15.2857 6C14.849 5.8391 14.5663 6.24699 14.1429 6C13.1961 5.44772 13 2 13 2" />
              <path d="M18.0916 5C18.0916 5 17.8855 4.20779 18.0916 3.71429C18.3987 2.97862 20 2 20 2" />
            </svg>
          </div>
          <div className="zodiac"></div>
        </div>
        <input
          type="text"
          className="month"
          placeholder="MM"
          maxlength="2"
          pattern="\d*"
        />
        <span>/</span>
        <input
          type="text"
          className="day"
          placeholder="DD"
          maxlength="2"
          pattern="\d*"
        />
        <span>/</span>
        <input
          type="text"
          className="year"
          placeholder="YYYY"
          maxlength="4"
          pattern="\d*"
        />
      </div>

      <div className="log"></div>

      <svg xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
        <symbol viewBox="0 0 36 36" id="cake-light" fill="currentColor">
          <path d="M21 10.5C21 12.1569 19.6569 13.5 18 13.5C16.3431 13.5 15 12.1569 15 10.5C15 8.84315 18 3.5 18 3.5C18 3.5 21 8.84315 21 10.5Z" />
        </symbol>
        <symbol viewBox="0 0 36 36" id="cake" fill="currentColor">
          <path d="M19.5 14V14C19.2793 12.2344 16.7207 12.2344 16.5 14V14C11.25 14.3 6 15.95 6 19.25V23.75C6 27.35 12.15 29 18 29C23.85 29 30 27.35 30 23.75V19.25C30 15.95 24.75 14.3 19.5 14ZM16.5 17V18.5C16.5 19.4 17.1 20 18 20C18.9 20 19.5 19.4 19.5 18.5V17C24.15 17.3 26.7 18.65 27 19.25C26.7 19.85 23.7 21.5 18 21.5C12.3 21.5 9.15 19.85 9 19.25C9.15 18.65 11.7 17.3 16.5 17Z" />
        </symbol>
      </svg>
    </React.Fragment>
  );
}
