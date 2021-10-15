import React from "react";

const Emoji = ({ sign }) => {
  switch (sign) {
    case "aries": {
      return (
        <span role="img" aria-label="ram">
          🐏
        </span>
      );
    }
    case "taurus": {
      return (
        <span role="img" aria-label="bull">
          🐂
        </span>
      );
    }
    case "gemini": {
      return (
        <span role="img" aria-label="twins">
          👯
        </span>
      );
    }
    case "cancer": {
      return (
        <span role="img" aria-label="crab">
          🦀
        </span>
      );
    }
    case "leo": {
      return (
        <span role="img" aria-label="lion">
          🦁
        </span>
      );
    }
    case "virgo": {
      return (
        <span role="img" aria-label="girl">
          👧🏼
        </span>
      );
    }
    case "libra": {
      return (
        <span role="img" aria-label="scales">
          ⚖️
        </span>
      );
    }
    case "scorpio": {
      return (
        <span role="img" aria-label="scorpion">
          🦂
        </span>
      );
    }
    case "sagittarius": {
      return (
        <span role="img" aria-label="bow and arrow">
          🏹
        </span>
      );
    }
    case "capricorn": {
      return (
        <span role="img" aria-label="goat">
          🐐
        </span>
      );
    }
    case "aquarius": {
      return (
        <span role="img" aria-label="amphora">
          🏺
        </span>
      );
    }
    case "pisces": {
      return (
        <span role="img" aria-label="fish">
          🐟
        </span>
      );
    }
    default: {
      return (
        <span role="img" aria-label="birthday cake">
          🎂
        </span>
      );
    }
  }
};

export default Emoji;