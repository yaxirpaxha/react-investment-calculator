import { calculateInvestmentResults, formatter } from "../util/investment.js";
const Result = ({ userData }) => {
  const interestCalcultions = calculateInvestmentResults(userData);
  const initialInvestment =
    interestCalcultions[0].valueEndOfYear -
    interestCalcultions[0].interest -
    interestCalcultions[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Invetment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {interestCalcultions.map((row) => {
          const totalInterest =
            row.valueEndOfYear -
            row.annualInvestment * row.year -
            initialInvestment;
          const totalInvestment = row.valueEndOfYear - totalInterest;
          return (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Result;
