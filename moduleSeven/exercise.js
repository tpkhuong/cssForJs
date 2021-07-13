// calendar

function Calendar() {
  return (
    <Wrapper>
      {DAYS.map((day) => (
        <Day key={day}>{day}</Day>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 3px solid;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px 16px;
  padding: 12px;
  padding-inline-end: 0px;
`;

const Day = styled.div`
  border: 2px solid;
  border-radius: 4px;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
`;

const DAYS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

render(<Calendar />);

// josh's solution

function Calendar() {
  return (
    <Wrapper>
      {DAYS.map((day) => (
        <Day key={day}>{day}</Day>
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  border: 3px solid;
  display: grid;
  grid-template-columns: repeat(7, 2rem);
  gap: 4px;
  width: max-content;
  padding: 16px;
`;
const Day = styled.div`
  border: 2px solid;
  border-radius: 4px;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DAYS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];
render(<Calendar />);
