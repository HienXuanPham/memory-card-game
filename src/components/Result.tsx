interface ResultProps {
  score: number;
}

const Result: React.FC<ResultProps> = ({ score }) => {
  return (
    <>
      <h1>Your final score is: {score}</h1>
    </>
  );
};

export default Result;
