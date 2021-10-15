// Aries	      March 21       April 20
// Taurus	      April 21       May 21
// Gemini	      May 22         June 21
// Cancer	      June 22        July 22
// Leo	        July 23        August 22
// Virgo	      August 23      September 23
// Libra	      September 24   October 23
// Scorpio	    October 24     November 22
// Sagittarius	November 23    December 21
// Capricorn	  December 22    January 20
// Aquarius	    January 21     February 19
// Pisces	      February 20    March 20

export const getStarSign = (day, month) => {
    const d = Number(day);
    const m = Number(month);
  
    if ((d >= 21 && d <= 31 && m === 3) || (d >= 1 && d <= 20 && m === 4)) {
      return "aries";
    }
    if ((d >= 21 && d <= 30 && m === 4) || (d >= 1 && d <= 21 && m === 5)) {
      return "taurus";
    }
    if ((d >= 22 && d <= 31 && m === 4) || (d >= 1 && d <= 21 && m === 6)) {
      return "gemini";
    }
    if ((d >= 22 && d <= 30 && m === 6) || (d >= 1 && d <= 22 && m === 7)) {
      return "cancer";
    }
    if ((d >= 23 && d <= 31 && m === 7) || (d >= 1 && d <= 23 && m === 8)) {
      return "leo";
    }
    if ((d >= 23 && d <= 31 && m === 8) || (d >= 1 && d <= 23 && m === 9)) {
      return "virgo";
    }
    if ((d >= 24 && d <= 30 && m === 9) || (d >= 1 && d <= 23 && m === 10)) {
      return "libra";
    }
    if ((d >= 24 && d <= 31 && m === 10) || (d >= 1 && d <= 22 && m === 11)) {
      return "scorpio";
    }
    if ((d >= 23 && d <= 30 && m === 11) || (d >= 1 && d <= 21 && m === 12)) {
      return "sagittarius";
    }
    if ((d >= 22 && d <= 31 && m === 12) || (d >= 1 && d <= 20 && m === 1)) {
      return "capricorn";
    }
    if ((d >= 21 && d <= 31 && m === 1) || (d >= 1 && d <= 17 && m === 2)) {
      return "aquarius";
    }
    if ((d >= 18 && d <= 28 && m === 2) || (d >= 1 && d <= 20 && m === 3)) {
      return "pisces";
    }
  
    return "";
  };
  