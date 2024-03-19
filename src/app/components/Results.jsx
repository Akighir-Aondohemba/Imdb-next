export default function Results({ results }) {
  return (
    <div>
        {results.map((result) => (
            <div key={results.id}>
            <h2>{result.original_title}</h2>
            </div>
        ))}
    </div>
  );
}
