import React, { useState, useRef } from "react";
import {
  EmojiWrapper,
  StyledInput,
  StyledFieldset,
  StyledSpan
} from "./styles";
import { getStarSign } from "./helpers";
import Emoji from "./Emoji";

const DateInput = (props) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [sign, setSign] = useState("");

  const refDay = useRef(null);
  const refMonth = useRef(null);
  const refYear = useRef(null);

  const handleChangeDay = e => {
    const value = e.target.value;
    setDay(value);
    if (value.length === 2) {
      refMonth.current.focus();
    }
    const sign = getStarSign(value, month);
    if (sign !== "") {
      setSign(sign);
    }
  };

  const handleChangeMonth = e => {
    const value = e.target.value;
    setMonth(value);
    if (value.length === 2) {
      refYear.current.focus();
    }
    const sign = getStarSign(day, value);
    console.log(sign);
    if (sign !== "") {
      setSign(sign);
    }
  };

  const handleChangeYear = e => {
    const value = e.target.value;
    setYear(value);
    const sign = getStarSign(day, month);
    if (sign !== "") {
      setSign(sign);
    }
  };

  // console.log(sign);

  return (
    <StyledFieldset role="fieldset">
      <EmojiWrapper>
        <Emoji sign={sign} />
      </EmojiWrapper>
      <StyledInput
        maxlength="2"
        type="text"
        name="day"
        placeholder="DD"
        width="2rem"
        value={day}
        onChange={handleChangeDay}
        ref={refDay}
      />
      <StyledSpan>/</StyledSpan>
      <StyledInput
        maxlength="2"
        type="text"
        name="month"
        placeholder="MM"
        width="2rem"
        value={month}
        onChange={handleChangeMonth}
        ref={refMonth}
      />
      <StyledSpan>/</StyledSpan>
      <StyledInput
        maxlength="4"
        type="text"
        name="year"
        placeholder="YYYY"
        width="3rem"
        value={year}
        onChange={handleChangeYear}
        ref={refYear}
      />
    </StyledFieldset>
  );
};

export default DateInput;